import React from 'react';
import { ArrowLeft, Ticket, Clock, Trophy, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

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

  const getStatusBadge = (status: string, result?: string) => {
    if (status === 'active') {
      return (
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          Активний
        </span>
      );
    } else if (status === 'completed' && result === 'Не виграв') {
      return (
        <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
          Завершено
        </span>
      );
    } else if (status === 'won') {
      return (
        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold flex items-center">
          <Trophy className="w-4 h-4 mr-1" />
          Виграв!
        </span>
      );
    }
  };

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
            <h3 className="text-2xl font-bold text-teal-800 mb-2">{myTickets.length}</h3>
            <p className="text-slate-600">Всього квитків</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <h3 className="text-2xl font-bold text-green-600 mb-2">
              {myTickets.filter(t => t.status === 'active').length}
            </h3>
            <p className="text-slate-600">Активних</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <h3 className="text-2xl font-bold text-yellow-600 mb-2">
              {myTickets.filter(t => t.status === 'won').length}
            </h3>
            <p className="text-slate-600">Виграних</p>
          </div>
        </div>

        {/* Tickets List */}
        <div className="space-y-6">
          {myTickets.map((ticket, index) => (
            <div
              key={ticket.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={ticket.image}
                    alt={ticket.lottery}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                
                <div className="md:w-2/3 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-teal-800 mb-2">{ticket.lottery}</h3>
                      <p className="text-slate-600 mb-2">Категорія: {ticket.category}</p>
                      <p className="text-lg font-semibold text-teal-600">Квиток: {ticket.ticketNumber}</p>
                    </div>
                    {getStatusBadge(ticket.status, ticket.result)}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-slate-500">Ціна квитка</p>
                      <p className="text-lg font-semibold text-slate-800">{ticket.price}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Дата покупки</p>
                      <p className="text-lg font-semibold text-slate-800 flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {ticket.purchaseDate}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Дата розіграшу</p>
                      <p className="text-lg font-semibold text-slate-800">{ticket.drawDate}</p>
                    </div>
                    {ticket.status === 'active' && (
                      <div>
                        <p className="text-sm text-slate-500">Продано квитків</p>
                        <p className="text-lg font-semibold text-slate-800">
                          {ticket.soldTickets} / {ticket.totalTickets}
                        </p>
                        <div className="w-full bg-slate-200 rounded-full h-2 mt-1">
                          <div
                            className="bg-teal-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${(ticket.soldTickets / ticket.totalTickets) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>

                  {ticket.result && (
                    <div className="mt-4 p-3 bg-red-50 rounded-lg">
                      <p className="text-red-800 font-semibold">Результат: {ticket.result}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {myTickets.length === 0 && (
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