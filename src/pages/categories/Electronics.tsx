import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Timer, Users, Ticket } from 'lucide-react';

const electronicsItems = [
  {
    id: 1,
    title: 'MacBook Pro 16"',
    description: 'Потужний ноутбук для професіоналів',
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=300&fit=crop',
    ticketPrice: 250,
    progress: 73,
    timeLeft: '2д 11г',
    participants: 567
  },
  {
    id: 2,
    title: 'Gaming PC RTX 4090',
    description: 'Топовий ігровий комп\'ютер',
    image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=300&fit=crop',
    ticketPrice: 400,
    progress: 85,
    timeLeft: '1д 6г',
    participants: 823
  },
  {
    id: 3,
    title: 'iPad Pro 12.9"',
    description: 'Професійний планшет з Apple Pencil',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop',
    ticketPrice: 180,
    progress: 59,
    timeLeft: '3д 17г',
    participants: 445
  },
  {
    id: 4,
    title: 'Sony 65" OLED TV',
    description: '4K OLED телевізор з підтримкою HDR',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop',
    ticketPrice: 300,
    progress: 42,
    timeLeft: '4д 8г',
    participants: 234
  },
  {
    id: 5,
    title: 'AirPods Pro 2',
    description: 'Бездротові навушники з шумозаглушенням',
    image: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&h=300&fit=crop',
    ticketPrice: 80,
    progress: 91,
    timeLeft: '8г 45хв',
    participants: 1203
  },
  {
    id: 6,
    title: 'Canon EOS R5',
    description: 'Професійна беззеркальна камера',
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop',
    ticketPrice: 350,
    progress: 36,
    timeLeft: '5д 12г',
    participants: 189
  }
];

const Electronics = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="py-16 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Електроніка
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Виграйте найновішу техніку та гаджети від світових брендів
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {electronicsItems.map((item) => (
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
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-3 rounded-xl transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
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

export default Electronics;