import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Timer, Users, Ticket } from 'lucide-react';

const sportsItems = [
  {
    id: 1,
    title: 'Професійна бігова доріжка',
    description: 'NordicTrack Commercial 1750 з iFit',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    ticketPrice: 300,
    progress: 67,
    timeLeft: '3д 8г',
    participants: 189
  },
  {
    id: 2,
    title: 'Набір гантелей PowerBlock',
    description: 'Регульовані гантелі 5-50 кг',
    image: 'https://images.unsplash.com/photo-1517438984742-1262db08379e?w=400&h=300&fit=crop',
    ticketPrice: 180,
    progress: 82,
    timeLeft: '1д 16г',
    participants: 345
  },
  {
    id: 3,
    title: 'Електросамокат Xiaomi',
    description: 'Mi Electric Scooter Pro 2',
    image: 'https://images.unsplash.com/photo-1544191696-15693072f5a5?w=400&h=300&fit=crop',
    ticketPrice: 150,
    progress: 75,
    timeLeft: '2д 11г',
    participants: 456
  },
  {
    id: 4,
    title: 'Професійні лижі',
    description: 'Rossignol Experience 88 Ti з кріпленнями',
    image: 'https://images.unsplash.com/photo-1551524164-05e52c5429cd?w=400&h=300&fit=crop',
    ticketPrice: 250,
    progress: 43,
    timeLeft: '5д 14г',
    participants: 123
  },
  {
    id: 5,
    title: 'Велосипед Trek',
    description: 'Trek Domane SL 6 шосейний велосипед',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
    ticketPrice: 400,
    progress: 91,
    timeLeft: '9г 25хв',
    participants: 567
  },
  {
    id: 6,
    title: 'Фітнес браслет Garmin',
    description: 'Garmin Fenix 7 з GPS та пульсометром',
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&h=300&fit=crop',
    ticketPrice: 120,
    progress: 56,
    timeLeft: '4д 7г',
    participants: 298
  }
];

const Sports = () => {
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sportsItems.map((item) => (
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
                  <Button className="w-full bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white font-semibold py-3 rounded-xl transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
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

export default Sports;