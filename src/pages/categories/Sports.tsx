import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Timer, Users, Ticket } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useTicketPurchase } from '@/hooks/useTicketPurchase';

const Sports = () => {
  const { purchaseTicket, loading } = useTicketPurchase();
  
  const { data: lotteries, isLoading } = useQuery({
    queryKey: ['lotteries', 'sports'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('lotteries')
        .select('*')
        .eq('category', 'Спорт')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });

  const handlePurchaseTicket = async (lottery: any) => {
    await purchaseTicket({
      lotteryId: lottery.id,
      ticketPrice: lottery.ticket_price
    });
  };

  const calculateProgress = (soldTickets: number, totalTickets: number) => {
    return Math.round((soldTickets / totalTickets) * 100);
  };

  const formatTimeLeft = (endTime: string) => {
    const now = new Date();
    const end = new Date(endTime);
    const diff = end.getTime() - now.getTime();
    
    if (diff <= 0) return 'Завершено';
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    if (days > 0) return `${days}д ${hours}г`;
    return `${hours}г`;
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="py-16 bg-gradient-to-br from-indigo-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Спорт
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Професійне спортивне обладнання для активного способу життя
            </p>
          </div>

          {isLoading ? (
            <div className="text-center">Завантаження...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {lotteries?.map((lottery) => (
                <Card key={lottery.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden">
                      <img 
                        src={lottery.image} 
                        alt={lottery.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                        <Timer className="w-4 h-4 text-orange-500" />
                        <span className="text-sm font-medium">{formatTimeLeft(lottery.end_time)}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{lottery.title}</h3>
                    <p className="text-gray-600 mb-4">{lottery.description}</p>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Прогрес продажів</span>
                        <span className="text-sm font-medium">{calculateProgress(lottery.sold_tickets, lottery.total_tickets)}%</span>
                      </div>
                      <Progress value={calculateProgress(lottery.sold_tickets, lottery.total_tickets)} className="h-2" />
                      
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{lottery.sold_tickets} учасників</span>
                        </div>
                      </div>
                      
                      {/* Price and Button */}
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold text-indigo-600">{lottery.ticket_price} ₴</span>
                          <span className="text-sm text-gray-500 ml-1">/ квиток</span>
                        </div>
                        <Button 
                          onClick={() => handlePurchaseTicket(lottery)}
                          disabled={loading}
                          className="bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white px-6 py-2 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
                        >
                          <Ticket className="w-4 h-4 mr-2" />
                          {loading ? 'Обробка...' : 'Купити квиток'}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Sports;