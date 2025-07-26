import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Timer, Users, Ticket } from 'lucide-react';

const serviceItems = [
  {
    id: 1,
    title: 'Організація весілля',
    description: 'Повна організація весілля мрії на 50 гостей',
    image: 'https://images.unsplash.com/photo-1519167758481-83f29da78b61?w=400&h=300&fit=crop',
    ticketPrice: 300,
    progress: 73,
    timeLeft: '3д 8г',
    participants: 234
  },
  {
    id: 2,
    title: 'Дизайн інтер\'єру',
    description: 'Професійний дизайн-проект квартири',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
    ticketPrice: 200,
    progress: 85,
    timeLeft: '1д 14г',
    participants: 345
  },
  {
    id: 3,
    title: 'Ремонт квартири',
    description: 'Євроремонт квартири під ключ',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop',
    ticketPrice: 500,
    progress: 58,
    timeLeft: '4д 12г',
    participants: 189
  },
  {
    id: 4,
    title: 'Персональний стиліст',
    description: 'Консультація стиліста + новий гардероб',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop',
    ticketPrice: 150,
    progress: 91,
    timeLeft: '9г 30хв',
    participants: 456
  },
  {
    id: 5,
    title: 'Фотосесія з професіоналом',
    description: 'Професійна фотосесія + обробка фото',
    image: 'https://images.unsplash.com/photo-1554048612-b6ebae92138d?w=400&h=300&fit=crop',
    ticketPrice: 80,
    progress: 67,
    timeLeft: '2д 18г',
    participants: 567
  },
  {
    id: 6,
    title: 'Юридичні послуги',
    description: 'Повний пакет юридичного супроводу',
    image: 'https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?w=400&h=300&fit=crop',
    ticketPrice: 250,
    progress: 42,
    timeLeft: '5д 6г',
    participants: 123
  }
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="py-16 bg-gradient-to-br from-violet-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Послуги
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Професійні послуги від експертів для покращення вашого життя
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceItems.map((item) => (
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
                        <span className="text-2xl font-bold text-violet-600">{item.ticketPrice} ₴</span>
                        <span className="text-sm text-gray-500 ml-1">/ квиток</span>
                      </div>
                      <Button className="bg-gradient-to-r from-violet-500 to-violet-600 hover:from-violet-600 hover:to-violet-700 text-white px-6 py-2 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all duration-300">
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

export default Services;