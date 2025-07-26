import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Timer, Users, Ticket } from 'lucide-react';

const transportItems = [
  {
    id: 1,
    title: 'BMW X5 2023',
    description: 'Розкішний кросовер з повним приводом',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
    ticketPrice: 800,
    progress: 67,
    timeLeft: '3д 8г',
    participants: 456
  },
  {
    id: 2,
    title: 'Tesla Model 3',
    description: 'Електроседан з автопілотом',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=300&fit=crop',
    ticketPrice: 700,
    progress: 82,
    timeLeft: '1д 15г',
    participants: 523
  },
  {
    id: 3,
    title: 'Harley-Davidson',
    description: 'Класичний мотоцикл для справжніх байкерів',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    ticketPrice: 350,
    progress: 45,
    timeLeft: '4д 22г',
    participants: 234
  },
  {
    id: 4,
    title: 'Mercedes-Benz C-Class',
    description: 'Елегантний бізнес-седан',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=400&h=300&fit=crop',
    ticketPrice: 650,
    progress: 91,
    timeLeft: '12г 30хв',
    participants: 687
  },
  {
    id: 5,
    title: 'Yamaha YZF-R1',
    description: 'Спортивний мотоцикл для екстремалів',
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400&h=300&fit=crop',
    ticketPrice: 400,
    progress: 38,
    timeLeft: '5д 14г',
    participants: 198
  },
  {
    id: 6,
    title: 'Audi Q7',
    description: 'Преміальний сімейний кросовер',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop',
    ticketPrice: 750,
    progress: 56,
    timeLeft: '2д 19г',
    participants: 345
  }
];

const Transport = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="py-16 bg-gradient-to-br from-red-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Транспорт
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Виграйте автомобіль або мотоцикл мрії у наших розіграшах
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transportItems.map((item) => (
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
                        <span className="text-2xl font-bold text-red-600">{item.ticketPrice} ₴</span>
                        <span className="text-sm text-gray-500 ml-1">/ квиток</span>
                      </div>
                      <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-2 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all duration-300">
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

export default Transport;