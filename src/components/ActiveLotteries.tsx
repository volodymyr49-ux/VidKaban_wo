import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Users, Ticket } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useTicketPurchase } from '@/hooks/useTicketPurchase';

interface Lottery {
  id: string;
  title: string;
  description: string;
  image: string;
  ticket_price: number;
  total_tickets: number;
  sold_tickets: number;
  end_time: string;
  category: string;
}

const ActiveLotteries = () => {
  const [realLotteries, setRealLotteries] = useState<Lottery[]>([]);
  const [loading, setLoading] = useState(true);
  const { purchaseTicket, loading: purchasing } = useTicketPurchase();

  const fetchLotteries = async () => {
    try {
      const { data, error } = await supabase
        .from('lotteries')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching lotteries:', error);
      } else {
        console.log('Fetched lotteries:', data); // Для діагностики
        setRealLotteries(data || []);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLotteries();
  }, []);

  const calculateTimeLeft = (endTime: string) => {
    const difference = +new Date(endTime) - +new Date();
    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      return `${days}д ${hours}г ${minutes}хв`;
    }
    return 'Завершено';
  };

  const handlePurchaseTicket = async (lottery: Lottery) => {
    // Перевірка доступності квитків перед покупкою
    if (lottery.sold_tickets >= lottery.total_tickets) {
      console.log('All tickets sold for lottery:', lottery.id);
      return;
    }

    console.log('Attempting to purchase ticket for:', lottery.id);
    console.log('Current sold_tickets:', lottery.sold_tickets);
    
    const success = await purchaseTicket({
      lotteryId: lottery.id,
      ticketPrice: lottery.ticket_price
    });
    
    if (success) {
      console.log('Purchase successful, refetching lotteries...');
      
      // Оптимістичне оновлення UI (миттєво)
      setRealLotteries(prevLotteries => 
        prevLotteries.map(item => 
          item.id === lottery.id 
            ? { ...item, sold_tickets: item.sold_tickets + 1 }
            : item
        )
      );
      
      // Також перезавантажуємо дані з сервера для синхронізації
      setTimeout(() => {
        fetchLotteries();
      }, 1000); // Невелика затримка для забезпечення оновлення в БД
    }
  };

  if (loading) {
    return (
      <section className="py-16 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-teal-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Завантаження лотерей...</p>
          </div>
        </div>
      </section>
    );
  }

  const displayLotteries = realLotteries;

  return (
    <section className="py-16 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Активні лотереї</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Не пропустіть шанс виграти дивовижні призи! Купуйте квитки прямо зараз
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {displayLotteries.map((lottery, index) => {
            const progressPercentage = (lottery.sold_tickets / lottery.total_tickets) * 100;
            const isSoldOut = lottery.sold_tickets >= lottery.total_tickets;

            return (
              <Card
                key={lottery.id}
                className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={lottery.image || `https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop&auto=format&q=80`}
                    alt={lottery.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop&auto=format&q=80';
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {lottery.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {calculateTimeLeft(lottery.end_time)}
                  </div>
                  {isSoldOut && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="bg-red-600 text-white px-4 py-2 rounded-full font-bold">
                        РОЗПРОДАНО
                      </span>
                    </div>
                  )}
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-teal-600 transition-colors">
                    {lottery.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{lottery.description}</p>

                  {/* Progress Bar with debug info */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {lottery.sold_tickets} з {lottery.total_tickets}
                      </span>
                      <span>{Math.round(progressPercentage)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-500 ${
                          isSoldOut 
                            ? 'bg-gradient-to-r from-red-500 to-red-600' 
                            : 'bg-gradient-to-r from-teal-500 to-teal-600'
                        }`}
                        style={{ width: `${Math.min(progressPercentage, 100)}%` }}
                      ></div>
                    </div>
                    {/* Debug info - видаліть після тестування */}
                    <div className="text-xs text-gray-400 mt-1">
                      ID: {lottery.id.slice(0, 8)}... | Sold: {lottery.sold_tickets} | Total: {lottery.total_tickets}
                    </div>
                  </div>

                  {/* Price and Button */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-teal-600">{lottery.ticket_price} ₴</span>
                      <span className="text-sm text-gray-500 ml-1">/ квиток</span>
                    </div>
                    <Button 
                      onClick={() => handlePurchaseTicket(lottery)}
                      disabled={purchasing || isSoldOut}
                      className={`px-6 py-2 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                        isSoldOut 
                          ? 'bg-gray-400 hover:bg-gray-400' 
                          : 'bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white'
                      }`}
                    >
                      <Ticket className="w-4 h-4 mr-2" />
                      {purchasing ? 'Обробка...' : isSoldOut ? 'Розпродано' : 'Купити квиток'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Переглянути всі лотереї
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ActiveLotteries;