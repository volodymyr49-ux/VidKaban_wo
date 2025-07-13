import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Timer, Users, Ticket } from 'lucide-react';

const smartphoneItems = [
  {
    id: 1,
    title: 'iPhone 15 Pro Max',
    description: '256GB Titanium Blue',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop',
    ticketPrice: 120,
    progress: 88,
    timeLeft: '1д 4г',
    participants: 1456
  },
  {
    id: 2,
    title: 'Samsung Galaxy S24 Ultra',
    description: '512GB Phantom Black з S Pen',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop',
    ticketPrice: 110,
    progress: 76,
    timeLeft: '2д 9г',
    participants: 1203
  },
  {
    id: 3,
    title: 'Google Pixel 8 Pro',
    description: '256GB Obsidian з AI функціями',
    image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400&h=300&fit=crop',
    ticketPrice: 90,
    progress: 65,
    timeLeft: '3д 16г',
    participants: 789
  },
  {
    id: 4,
    title: 'Xiaomi 14 Ultra',
    description: '512GB з професійною камерою Leica',
    image: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=400&h=300&fit=crop',
    ticketPrice: 85,
    progress: 52,
    timeLeft: '4д 7г',
    participants: 567
  },
  {
    id: 5,
    title: 'OnePlus 12',
    description: '256GB з швидкою зарядкою 100W',
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=300&fit=crop',
    ticketPrice: 75,
    progress: 93,
    timeLeft: '6г 30хв',
    participants: 934
  },
  {
    id: 6,
    title: 'iPhone 15 Plus',
    description: '128GB Pink з USB-C',
    image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=300&fit=crop',
    ticketPrice: 100,
    progress: 41,
    timeLeft: '5д 14г',
    participants: 445
  }
];

const Smartphones = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="py-16 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Смартфони
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Виграйте найновіші смартфони від провідних світових брендів
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {smartphoneItems.map((item) => (
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
                  <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 rounded-xl transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
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

export default Smartphones;