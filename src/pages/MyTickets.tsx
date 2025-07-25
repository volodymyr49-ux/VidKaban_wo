import React, { useState, useEffect } from 'react';
import { ArrowLeft, Ticket, Clock, Trophy, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';

interface UserTicket {
  id: string;
  ticket_number: string;
  price_paid: number;
  purchase_date: string;
  lottery: {
    id: string;
    title: string;
    category: string;
    end_time: string;
    image: string;
  };
}

const myTickets = [
  {
    id: 1,
    ticketNumber: "TK-789123",
    lottery: "BMW X3 2024",
    category: "Транспорт",
    price: "150 ₴",
    purchaseDate: "20 січня 2024",
    drawDate: "25 січня 2024",
    status: "active",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=300&h=200&fit=crop",
    totalTickets: 1000,
    soldTickets: 847
  },
  {
    id: 2,
    ticketNumber: "RE-456789",
    lottery: "Квартира в Одесі",
    category: "Нерухомість",
    price: "200 ₴",
    purchaseDate: "18 січня 2024",
    drawDate: "30 січня 2024",
    status: "active",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300&h=200&fit=crop",
    totalTickets: 2000,
    soldTickets: 1234
  },
  {
    id: 3,
    ticketNumber: "SP-321654",
    lottery: "iPhone 15 Pro",
    category: "Смартфони",
    price: "75 ₴",
    purchaseDate: "15 січня 2024",
    drawDate: "22 січня 2024",
    status: "completed",
    result: "Не виграв",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=200&fit=crop",
    totalTickets: 500,
    soldTickets: 500
  },
  {
    id: 4,
    ticketNumber: "JW-987456",
    lottery: "Золоті сережки",
    category: "Ювелірні вироби",
    price: "100 ₴",
    purchaseDate: "12 січня 2024",
    drawDate: "28 січня 2024",
    status: "active",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=200&fit=crop",
    totalTickets: 300,
    soldTickets: 156
  }
];

const MyTickets = () => {
  const navigate = useNavigate();
  const [tickets, setTickets] = useState<UserTicket[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) {
          navigate('/auth');
          return;
        }

        const { data: ticketsData, error } = await supabase
          .from('tickets')
          .select(`
            id,
            ticket_number,
            price_paid,
            created_at,
            lotteries:lottery_id (
              id,
              title,
              category,
              end_time,
              image
            )
          `)
          .eq('user_id', session.user.id)
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Error fetching tickets:', error);
        } else {
          const formattedTickets = ticketsData?.map(ticket => ({
            ...ticket,
            purchase_date: new Date(ticket.created_at).toLocaleDateString('uk-UA'),
            lottery: {
              id: ticket.lotteries?.id || '',
              title: ticket.lotteries?.title || 'Невідома лотерея',
              category: ticket.lotteries?.category || 'Невідома категорія',
              end_time: ticket.lotteries?.end_time || '',
              image: ticket.lotteries?.image || '/placeholder.svg'
            }
          })) || [];
          setTickets(formattedTickets);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, [navigate]);

  const getStatusBadge = (ticket: UserTicket) => {
    const now = new Date();
    const endTime = new Date(ticket.lottery.end_time);
    
    if (endTime > now) {
      return (
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          Активний
        </span>
      );
    } else {
      return (
        <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
          Завершено
        </span>
      );
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <Header />
        <div className="flex items-center justify-center h-96">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-teal-500"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      
      {/* Back Button */}
      <div className="container mx-auto px-4 py-4">
        <Button
          onClick={() => navigate(-1)}
          variant="outline"
          className="flex items-center space-x-2 hover:bg-teal-50 border-teal-200"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Назад</span>
        </Button>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-800 rounded-full flex items-center justify-center shadow-lg">
              <Ticket className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-teal-800 mb-4">Мої квитки</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Тут ви можете переглянути всі свої квитки та стежити за статусом розіграшів
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <h3 className="text-2xl font-bold text-teal-800 mb-2">{tickets.length}</h3>
            <p className="text-slate-600">Всього квитків</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <h3 className="text-2xl font-bold text-green-600 mb-2">
              {tickets.filter(t => new Date(t.lottery.end_time) > new Date()).length}
            </h3>
            <p className="text-slate-600">Активних</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <h3 className="text-2xl font-bold text-yellow-600 mb-2">0</h3>
            <p className="text-slate-600">Виграних</p>
          </div>
        </div>

        {/* Tickets List */}
        <div className="space-y-6">
          {tickets.map((ticket, index) => (
            <div
              key={ticket.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={ticket.lottery.image}
                    alt={ticket.lottery.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                
                <div className="md:w-2/3 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-teal-800 mb-2">{ticket.lottery.title}</h3>
                      <p className="text-slate-600 mb-2">Категорія: {ticket.lottery.category}</p>
                      <p className="text-lg font-semibold text-teal-600">Квиток: {ticket.ticket_number}</p>
                    </div>
                    {getStatusBadge(ticket)}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-slate-500">Ціна квитка</p>
                      <p className="text-lg font-semibold text-slate-800">{ticket.price_paid} ₴</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Дата покупки</p>
                      <p className="text-lg font-semibold text-slate-800 flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {ticket.purchase_date}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Дата розіграшу</p>
                      <p className="text-lg font-semibold text-slate-800">
                        {new Date(ticket.lottery.end_time).toLocaleDateString('uk-UA')}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {tickets.length === 0 && (
          <div className="text-center py-16">
            <Ticket className="w-16 h-16 text-slate-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-600 mb-2">У вас ще немає квитків</h3>
            <p className="text-slate-500 mb-6">Купіть свій перший квиток та почніть вигравати!</p>
            <Button
              onClick={() => navigate('/')}
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full"
            >
              Переглянути лотереї
            </Button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default MyTickets;