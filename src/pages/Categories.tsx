import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoriesCarousel from '@/components/CategoriesCarousel';
import { Button } from '@/components/ui/button';

const Categories = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      
      {/* Back Button */}
      <div className="container mx-auto px-4 py-4">
        <Button
          onClick={() => navigate(-1)}
          variant="outline"
          className="flex items-center space-x-2 hover:bg-teal-50 border-teal-200"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Назад</span>
        </Button>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-teal-800 mb-4">Категорії призів</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Оберіть категорію, яка вас цікавить, та візьміть участь у розіграшах дивовижних призів
          </p>
        </div>

        {/* Categories Grid */}
        <CategoriesCarousel />
      </div>

      <Footer />
    </div>
  );
};

export default Categories;