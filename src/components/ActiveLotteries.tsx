
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Users, Ticket } from 'lucide-react';

const lotteries = [
  {
    id: 1,
    title: 'Tesla Model 3',
    description: 'Електричний автомобіль преміум класу',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=300&fit=crop',
    ticketPrice: 250,
    totalTickets: 1000,
    soldTickets: 750,
    endTime: '2024-01-15T18:00:00',
    category: 'Транспорт'
  },
  {
    id: 2,
    title: 'iPhone 15 Pro Max',
    description: 'Найновіший смартфон від Apple',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop',
    ticketPrice: 150,
    totalTickets: 500,
    soldTickets: 320,
    endTime: '2024-01-12T20:00:00',
    category: 'Електроніка'
  },
  {
    id: 3,
    title: 'Квартира у центрі Києва',
    description: '2-кімнатна квартира, 65 м²',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
    ticketPrice: 500,
    totalTickets: 2000,
    soldTickets: 1200,
    endTime: '2024-01-20T12:00:00',
    category: 'Нерухомість'
  },
  {
    id: 4,
    title: 'MacBook Pro M3',
    description: 'Потужний ноутбук для професіоналів',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop',
    ticketPrice: 200,
    totalTickets: 750,
    soldTickets: 450,
    endTime: '2024-01-18T16:00:00',
    category: 'Електроніка'
  },
  {
    id: 5,
    title: 'Золоті сережки з діамантами',
    description: 'Ексклюзивні ювелірні вироби',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop',
    ticketPrice: 100,
    totalTickets: 300,
    soldTickets: 180,
    endTime: '2024-01-14T14:00:00',
    category: 'Ювелірні вироби'
  },
  {
    id: 6,
    title: 'Відпочинок на Мальдівах',
    description: '7 днів у 5-зірковому готелі',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    ticketPrice: 300,
    totalTickets: 400,
    soldTickets: 280,
    endTime: '2024-01-16T10:00:00',
    category: 'Туризм'
  }
];

const ActiveLotteries = () => {
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
          {lotteries.map((lottery, index) => (
            <Card
              key={lottery.id}
              className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={lottery.image}
                  alt={lottery.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {lottery.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {calculateTimeLeft(lottery.endTime)}
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-teal-600 transition-colors">
                  {lottery.title}
                </h3>
                <p className="text-gray-600 mb-4">{lottery.description}</p>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {lottery.soldTickets} з {lottery.totalTickets}
                    </span>
                    <span>{Math.round((lottery.soldTickets / lottery.totalTickets) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-teal-500 to-teal-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(lottery.soldTickets / lottery.totalTickets) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Price and Button */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-teal-600">{lottery.ticketPrice} ₴</span>
                    <span className="text-sm text-gray-500 ml-1">/ квиток</span>
                  </div>
                  <Button className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-6 py-2 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all duration-300">
                    <Ticket className="w-4 h-4 mr-2" />
                    Купити квиток
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
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
