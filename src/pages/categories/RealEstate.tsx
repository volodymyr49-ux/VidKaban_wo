import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Timer, Users, Ticket } from 'lucide-react';

const realEstateItems = [
  {
    id: 1,
    title: 'Квартира в центрі Києва',
    description: 'Сучасна 2-кімнатна квартира 65 м²',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
    ticketPrice: 500,
    progress: 75,
    timeLeft: '2д 14г',
    participants: 234
  },
  {
    id: 2,
    title: 'Будинок у передмісті',
    description: 'Приватний будинок з садом 180 м²',
    image: 'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=400&h=300&fit=crop',
    ticketPrice: 750,
    progress: 45,
    timeLeft: '5д 8г',
    participants: 156
  },
  {
    id: 3,
    title: 'Таунхаус в новобудові',
    description: 'Сучасний таунхаус 120 м² з терасою',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop',
    ticketPrice: 650,
    progress: 89,
    timeLeft: '1д 3г',
    participants: 312
  },
  {
    id: 4,
    title: 'Студія в новому ЖК',
    description: 'Сучасна студія 35 м² з панорамними вікнами',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
    ticketPrice: 300,
    progress: 62,
    timeLeft: '3д 12г',
    participants: 198
  },
  {
    id: 5,
    title: 'Дача з великою ділянкою',
    description: 'Дача 80 м² з ділянкою 12 соток',
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=400&h=300&fit=crop',
    ticketPrice: 400,
    progress: 33,
    timeLeft: '6д 20г',
    participants: 87
  },
  {
    id: 6,
    title: 'Пентхаус з терасою',
    description: 'Розкішний пентхаус 150 м² з великою терасою',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop',
    ticketPrice: 1200,
    progress: 28,
    timeLeft: '8д 5г',
    participants: 145
  }
];

const RealEstate = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Нерухомість
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Виграйте квартиру мрії або дом у розіграшах нерухомості
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {realEstateItems.map((item) => (
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
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{item.participants} учасників</span>
                      </div>
                    </div>
                    
                    {/* Price and Button */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-blue-600">{item.ticketPrice} ₴</span>
                        <span className="text-sm text-gray-500 ml-1">/ квиток</span>
                      </div>
                      <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-2 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all duration-300">
                        <Ticket className="w-4 h-4 mr-2" />
                        Купити квиток
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RealEstate;