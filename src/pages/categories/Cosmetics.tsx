import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Timer, Users, Ticket } from 'lucide-react';

const cosmeticsItems = [
  {
    id: 1,
    title: 'Набір Chanel',
    description: 'Повний набір косметики Chanel Coco Mademoiselle',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop',
    ticketPrice: 80,
    progress: 85,
    timeLeft: '1д 9г',
    participants: 789
  },
  {
    id: 2,
    title: 'Парфум Dior',
    description: 'Miss Dior Eau de Parfum 100ml',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=300&fit=crop',
    ticketPrice: 60,
    progress: 72,
    timeLeft: '2д 16г',
    participants: 567
  },
  {
    id: 3,
    title: 'Набір догляду Estée Lauder',
    description: 'Advanced Night Repair комплекс',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=300&fit=crop',
    ticketPrice: 70,
    progress: 58,
    timeLeft: '3д 11г',
    participants: 445
  },
  {
    id: 4,
    title: 'Сироватка Lancôme',
    description: 'Advanced Génifique Youth Activating',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=300&fit=crop',
    ticketPrice: 50,
    progress: 93,
    timeLeft: '8г 45хв',
    participants: 678
  },
  {
    id: 5,
    title: 'Палетка MAC',
    description: 'Professional Eye Shadow Palette',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=300&fit=crop',
    ticketPrice: 40,
    progress: 41,
    timeLeft: '4д 19г',
    participants: 234
  },
  {
    id: 6,
    title: 'Крем La Mer',
    description: 'Зволожуючий крем The Moisturizing Cream',
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop',
    ticketPrice: 90,
    progress: 67,
    timeLeft: '2д 22г',
    participants: 356
  }
];

const Cosmetics = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="py-16 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Косметика
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Преміальна косметика та парфумерія від найкращих світових брендів
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cosmeticsItems.map((item) => (
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
                        <span className="text-2xl font-bold text-orange-600">{item.ticketPrice} ₴</span>
                        <span className="text-sm text-gray-500 ml-1">/ квиток</span>
                      </div>
                      <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all duration-300">
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

export default Cosmetics;