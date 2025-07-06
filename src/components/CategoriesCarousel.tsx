
import React from 'react';
import { Home, Car, Laptop, Smartphone, Diamond, Sparkles, Baby, Dumbbell, Wrench, Plane, Gift, Heart } from 'lucide-react';

const categories = [
  { name: 'Нерухомість', icon: Home, color: 'from-blue-500 to-blue-600', bgColor: 'bg-blue-50' },
  { name: 'Транспорт', icon: Car, color: 'from-red-500 to-red-600', bgColor: 'bg-red-50' },
  { name: 'Електроніка', icon: Laptop, color: 'from-purple-500 to-purple-600', bgColor: 'bg-purple-50' },
  { name: 'Смартфони', icon: Smartphone, color: 'from-green-500 to-green-600', bgColor: 'bg-green-50' },
  { name: 'Ювелірні вироби', icon: Diamond, color: 'from-pink-500 to-pink-600', bgColor: 'bg-pink-50' },
  { name: 'Косметика', icon: Sparkles, color: 'from-orange-500 to-orange-600', bgColor: 'bg-orange-50' },
  { name: 'Дитячі товари', icon: Baby, color: 'from-yellow-500 to-yellow-600', bgColor: 'bg-yellow-50' },
  { name: 'Спорт', icon: Dumbbell, color: 'from-indigo-500 to-indigo-600', bgColor: 'bg-indigo-50' },
  { name: 'Інструменти', icon: Wrench, color: 'from-gray-500 to-gray-600', bgColor: 'bg-gray-50' },
  { name: 'Туризм', icon: Plane, color: 'from-teal-500 to-teal-600', bgColor: 'bg-teal-50' },
  { name: 'Подарунки', icon: Gift, color: 'from-rose-500 to-rose-600', bgColor: 'bg-rose-50' },
  { name: 'Послуги', icon: Heart, color: 'from-violet-500 to-violet-600', bgColor: 'bg-violet-50' },
];

const CategoriesCarousel = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Категорії призів</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Оберіть категорію, яка вас цікавить, та візьміть участь у розіграшах
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.name}
                className="group cursor-pointer transform hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${category.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200`}>
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-center font-semibold text-gray-800 text-sm group-hover:text-gray-900 transition-colors">
                    {category.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesCarousel;
