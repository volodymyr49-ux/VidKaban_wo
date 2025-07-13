import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Timer, Users, Ticket } from 'lucide-react';

const kidsItems = [
  {
    id: 1,
    title: 'iPad для дітей',
    description: 'iPad Air з захисним чохлом та Apple Pencil',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop',
    ticketPrice: 150,
    progress: 78,
    timeLeft: '2д 7г',
    participants: 456
  },
  {
    id: 2,
    title: 'LEGO Technic Set',
    description: 'Великий конструктор LEGO Technic Lamborghini',
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=400&h=300&fit=crop',
    ticketPrice: 80,
    progress: 85,
    timeLeft: '1д 12г',
    participants: 623
  },
  {
    id: 3,
    title: 'Дитячий електромобіль',
    description: 'BMW X6 електромобіль з пультом управління',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop',
    ticketPrice: 200,
    progress: 62,
    timeLeft: '3д 14г',
    participants: 234
  },
  {
    id: 4,
    title: 'Набір для творчості',
    description: 'Професійний набір для малювання Faber-Castell',
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop',
    ticketPrice: 60,
    progress: 91,
    timeLeft: '10г 30хв',
    participants: 567
  },
  {
    id: 5,
    title: 'Дитячий велосипед',
    description: 'Велосипед Trek для дітей 6-10 років',
    image: 'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?w=400&h=300&fit=crop',
    ticketPrice: 120,
    progress: 45,
    timeLeft: '4д 18г',
    participants: 189
  },
  {
    id: 6,
    title: 'Розвиваючий планшет',
    description: 'LeapFrog планшет для навчання',
    image: 'https://images.unsplash.com/photo-1516627145497-ae4df4dfce43?w=400&h=300&fit=crop',
    ticketPrice: 70,
    progress: 73,
    timeLeft: '2д 21г',
    participants: 345
  }
];

const Kids = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="py-16 bg-gradient-to-br from-yellow-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Дитячі товари
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Розвиваючі іграшки, гаджети та товари для щасливого дитинства
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {kidsItems.map((item) => (
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
                  <Button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold py-3 rounded-xl transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
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

export default Kids;