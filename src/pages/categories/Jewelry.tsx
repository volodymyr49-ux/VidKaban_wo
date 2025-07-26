import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Timer, Users, Ticket } from 'lucide-react';

const jewelryItems = [
  {
    id: 1,
    title: 'Діамантова каблучка',
    description: 'Золота каблучка з діамантом 1 карат',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=300&fit=crop',
    ticketPrice: 200,
    progress: 67,
    timeLeft: '3д 12г',
    participants: 234
  },
  {
    id: 2,
    title: 'Перлинне намисто',
    description: 'Намисто з натуральних перлин Akoya',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop',
    ticketPrice: 150,
    progress: 82,
    timeLeft: '1д 18г',
    participants: 345
  },
  {
    id: 3,
    title: 'Золоті сережки',
    description: 'Елегантні сережки з смарагдами',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=300&fit=crop',
    ticketPrice: 120,
    progress: 45,
    timeLeft: '4д 20г',
    participants: 189
  },
  {
    id: 4,
    title: 'Чоловічий годинник Rolex',
    description: 'Submariner з автоматичним механізмом',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=300&fit=crop',
    ticketPrice: 500,
    progress: 91,
    timeLeft: '14г 25хв',
    participants: 567
  },
  {
    id: 5,
    title: 'Браслет з сапфірами',
    description: 'Платиновий браслет з синіми сапфірами',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=300&fit=crop',
    ticketPrice: 300,
    progress: 38,
    timeLeft: '5д 9г',
    participants: 123
  },
  {
    id: 6,
    title: 'Жіночий годинник Cartier',
    description: 'Класичний годинник з діамантовим безелем',
    image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=400&h=300&fit=crop',
    ticketPrice: 400,
    progress: 73,
    timeLeft: '2д 15г',
    participants: 298
  }
];

const Jewelry = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="py-16 bg-gradient-to-br from-pink-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Ювелірні вироби
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Розкішні прикраси та годинники від світових ювелірних будинків
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jewelryItems.map((item) => (
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
                        <span className="text-2xl font-bold text-pink-600">{item.ticketPrice} ₴</span>
                        <span className="text-sm text-gray-500 ml-1">/ квиток</span>
                      </div>
                      <Button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-2 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all duration-300">
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

export default Jewelry;