import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

interface PurchaseTicketParams {
  lotteryId: string;
  ticketPrice: number;
}

export const useTicketPurchase = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const purchaseTicket = async ({ lotteryId, ticketPrice }: PurchaseTicketParams) => {
    setLoading(true);
    
    try {
      // Check if user is authenticated
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        toast({
          title: "Потрібна авторизація",
          description: "Увійдіть в систему, щоб купувати квитки",
          variant: "destructive",
        });
        navigate('/auth');
        return false;
      }

      // Get user profile with current balance
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('balance')
        .eq('user_id', session.user.id)
        .single();

      if (profileError) {
        toast({
          title: "Помилка",
          description: "Не вдалося завантажити профіль користувача",
          variant: "destructive",
        });
        return false;
      }

      // Check if user has enough balance
      if (!profile || profile.balance < ticketPrice) {
        toast({
          title: "Недостатньо коштів",
          description: "Поповніть баланс для покупки квитка",
          variant: "destructive",
        });
        return false;
      }

      // Generate unique ticket number
      const ticketNumber = `TK-${Date.now()}${Math.floor(Math.random() * 1000)}`;

      // Start transaction: create ticket and update balance
      const { error: ticketError } = await supabase
        .from('tickets')
        .insert({
          user_id: session.user.id,
          lottery_id: lotteryId,
          ticket_number: ticketNumber,
          price_paid: ticketPrice
        });

      if (ticketError) {
        toast({
          title: "Помилка покупки",
          description: "Не вдалося створити квиток",
          variant: "destructive",
        });
        return false;
      }

      // Update user balance
      const { error: balanceError } = await supabase
        .from('profiles')
        .update({ balance: profile.balance - ticketPrice })
        .eq('user_id', session.user.id);

      if (balanceError) {
        toast({
          title: "Помилка оновлення балансу",
          description: "Квиток створено, але баланс не оновлено",
          variant: "destructive",
        });
        return false;
      }

      // Update lottery sold tickets count
      const { data: currentLottery } = await supabase
        .from('lotteries')
        .select('sold_tickets')
        .eq('id', lotteryId)
        .single();

      if (currentLottery) {
        await supabase
          .from('lotteries')
          .update({ sold_tickets: currentLottery.sold_tickets + 1 })
          .eq('id', lotteryId);
      }

      // Show success message
      toast({
        title: "Квиток успішно придбано!",
        description: `Ваш номер квитка: ${ticketNumber}`,
      });

      // Navigate to my tickets page
      navigate('/my-tickets');
      return true;

    } catch (error) {
      console.error('Error purchasing ticket:', error);
      toast({
        title: "Помилка",
        description: "Виникла непередбачена помилка",
        variant: "destructive",
      });
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    purchaseTicket,
    loading
  };
};