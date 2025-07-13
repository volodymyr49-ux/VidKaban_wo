import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Timer, Users, Ticket } from 'lucide-react';

const toolsItems = [
  {
    id: 1,
    title: 'Набір інструментів Bosch',
    description: 'Професійний набір інструментів 108 предметів',
    image: 'https://images.unsplash.com/photo-1530563307094-5a74394b78c4?w=400&h=300&fit=crop',
    ticketPrice: 200,
    progress: 71,
    timeLeft: '3д 5г',
    participants: 234
  },
  {
    id: 2,
    title: 'Дриль Makita',
    description: 'Акумуляторний дриль-шуруповерт 18V',
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&h=300&fit=crop',
    ticketPrice: 120,
    progress: 86,
    timeLeft: '1д 14г',
    participants: 456
  },
  {
    id: 3,
    title: 'Циркулярна пила DeWalt',
    description: 'Професійна циркулярна пила 1600W',
    image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=400&h=300&fit=crop',
    ticketPrice: 180,
    progress: 58,
    timeLeft: '4д 9г',
    participants: 189
  },
  {
    id: 4,
    title: 'Лазерний рівень Stanley',
    description: 'Професійний лазерний рівень з тринагою',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=300&fit=crop',
    ticketPrice: 150,
    progress: 93,
    timeLeft: '7г 45хв',
    participants: 567
  },
  {
    id: 5,
    title: 'Верстак з тисками',
    description: 'Столярний верстак з професійними тисками',
    image: 'https://images.unsplash.com/photo-1609205807107-665f0c5b4b49?w=400&h=300&fit=crop',
    ticketPrice: 300,
    progress: 42,
    timeLeft: '5д 18г',
    participants: 123
  },
  {
    id: 6,
    title: 'Мультитул Leatherman',
    description: 'Професійний мультитул Wave Plus',
    image: 'https://images.unsplash.com/photo-1609205805850-6285aba85bf6?w=400&h=300&fit=crop',
    ticketPrice: 80,
    progress: 67,
    timeLeft: '2д 20г',
    participants: 345
  }
];

const Tools = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Інструменти
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Професійні інструменти для майстрів та любителів DIY проектів
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toolsItems.map((item) => (
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
                  <Button className="w-full bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-semibold py-3 rounded-xl transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
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

export default Tools;