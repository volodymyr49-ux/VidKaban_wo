import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Timer, Users, Ticket } from 'lucide-react';

const giftItems = [
  {
    id: 1,
    title: 'Подарунковий сертифікат',
    description: 'Універсальний сертифікат на 10,000 грн',
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop',
    ticketPrice: 100,
    progress: 78,
    timeLeft: '2д 9г',
    participants: 789
  },
  {
    id: 2,
    title: 'Букет з 101 троянди',
    description: 'Розкішний букет з червоних троянд',
    image: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=400&h=300&fit=crop',
    ticketPrice: 80,
    progress: 85,
    timeLeft: '1д 16г',
    participants: 567
  },
  {
    id: 3,
    title: 'Винтажне вино',
    description: 'Колекційне французьке вино 1995 року',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=400&h=300&fit=crop',
    ticketPrice: 150,
    progress: 62,
    timeLeft: '3д 11г',
    participants: 234
  },
  {
    id: 4,
    title: 'Шоколадний набір Godiva',
    description: 'Преміальні шоколадні цукерки',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop',
    ticketPrice: 60,
    progress: 91,
    timeLeft: '8г 45хв',
    participants: 456
  },
  {
    id: 5,
    title: 'Персоналізована фотокнига',
    description: 'Фотокнига A4 з вашими спогадами',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop',
    ticketPrice: 40,
    progress: 53,
    timeLeft: '4д 17г',
    participants: 189
  },
  {
    id: 6,
    title: 'Спа-сертифікат',
    description: 'День релаксу в преміум спа-центрі',
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=400&h=300&fit=crop',
    ticketPrice: 120,
    progress: 69,
    timeLeft: '2д 19г',
    participants: 345
  }
];

const Gifts = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="py-16 bg-gradient-to-br from-rose-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Подарунки
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Особливі подарунки для дорогих людей та незабутніх моментів
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {giftItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                      <Timer className="w-4 h-4 text-orange-500" />
                      <span className="text-sm font-medium">{item.timeLeft}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Прогрес продажів</span>
                      <span className="text-sm font-medium">{item.progress}%</span>
                    </div>
                    <Progress value={item.progress} className="h-2" />
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{item.participants} учасників</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Ticket className="w-4 h-4" />
                        <span>{item.ticketPrice} ₴</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button className="w-full bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-semibold py-3 rounded-xl transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                    Купити квиток за {item.ticketPrice} ₴
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gifts;