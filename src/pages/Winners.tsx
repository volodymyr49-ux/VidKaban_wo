import React from 'react';
import { ArrowLeft, Trophy, Calendar, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const winners = [
  {
    id: 1,
    name: "Олександр К.",
    prize: "BMW X5 2023",
    category: "Транспорт",
    date: "15 січня 2024",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=300&h=200&fit=crop",
    ticketNumber: "TK-001245"
  },
  {
    id: 2,
    name: "Марія П.",
    prize: "Квартира в центрі Києва",
    category: "Нерухомість",
    date: "8 січня 2024",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300&h=200&fit=crop",
    ticketNumber: "RE-002847"
  },
  {
    id: 3,
    name: "Дмитро С.",
    prize: "iPhone 15 Pro Max",
    category: "Смартфони",
    date: "3 січня 2024",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=200&fit=crop",
    ticketNumber: "SP-003921"
  },
  {
    id: 4,
    name: "Анна В.",
    prize: "Діамантове кольє",
    category: "Ювелірні вироби",
    date: "28 грудня 2023",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=200&fit=crop",
    ticketNumber: "JW-004563"
  },
  {
    id: 5,
    name: "Ігор Л.",
    prize: "MacBook Pro M3",
    category: "Електроніка",
    date: "22 грудня 2023",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=200&fit=crop",
    ticketNumber: "EL-005789"
  },
  {
    id: 6,
    name: "Катерина Р.",
    prize: "Тур до Мальдів",
    category: "Туризм",
    date: "18 грудня 2023",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop",
    ticketNumber: "TR-006234"
  }
];

const Winners = () => {
  const navigate = useNavigate();

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
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg">
              <Trophy className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-teal-800 mb-4">Наші переможці</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Вітаємо наших щасливчиків, які виграли дивовижні призи! Можливо, наступним переможцем будете ви!
          </p>
        </div>

        {/* Winners Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {winners.map((winner, index) => (
            <div
              key={winner.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img
                  src={winner.image}
                  alt={winner.prize}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-yellow-400 text-teal-800 px-3 py-1 rounded-full text-sm font-semibold">
                  <Star className="w-4 h-4 inline mr-1" />
                  Переможець
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-teal-800 mb-2">{winner.name}</h3>
                <p className="text-lg text-slate-700 mb-3">{winner.prize}</p>
                <div className="space-y-2 text-sm text-slate-600">
                  <p><span className="font-semibold">Категорія:</span> {winner.category}</p>
                  <p className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {winner.date}
                  </p>
                  <p><span className="font-semibold">Квиток:</span> {winner.ticketNumber}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-teal-800 to-teal-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Станьте наступним переможцем!</h2>
            <p className="text-xl mb-6">Купуйте квитки та виграйте дивовижні призи вже сьогодні</p>
            <Button
              onClick={() => navigate('/')}
              className="bg-yellow-500 hover:bg-yellow-600 text-teal-800 px-8 py-3 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300"
            >
              Переглянути лотереї
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Winners;