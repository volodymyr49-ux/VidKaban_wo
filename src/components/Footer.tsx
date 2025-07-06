
import React from 'react';
import { Trophy, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
                LuckyFate
              </h3>
            </div>
            <p className="text-teal-200 leading-relaxed">
              Ваш шанс змінити життя! Беріть участь у лотереях та купуйте товари за найкращими цінами.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 cursor-pointer">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 cursor-pointer">
                <Twitter className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-yellow-400 mb-4">Швидкі посилання</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-teal-200 hover:text-yellow-400 transition-colors">Про нас</a></li>
              <li><a href="#" className="text-teal-200 hover:text-yellow-400 transition-colors">Як це працює</a></li>
              <li><a href="#" className="text-teal-200 hover:text-yellow-400 transition-colors">Наші переможці</a></li>
              <li><a href="#" className="text-teal-200 hover:text-yellow-400 transition-colors">Правила</a></li>
              <li><a href="#" className="text-teal-200 hover:text-yellow-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold text-yellow-400 mb-4">Правова інформація</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-teal-200 hover:text-yellow-400 transition-colors">Політика конфіденційності</a></li>
              <li><a href="#" className="text-teal-200 hover:text-yellow-400 transition-colors">Умови використання</a></li>
              <li><a href="#" className="text-teal-200 hover:text-yellow-400 transition-colors">Повернення коштів</a></li>
              <li><a href="#" className="text-teal-200 hover:text-yellow-400 transition-colors">Ліцензія</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-yellow-400 mb-4">Контакти</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400" />
                <span className="text-teal-200">+380 44 123 45 67</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400" />
                <span className="text-teal-200">info@luckyfate.ua</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400" />
                <span className="text-teal-200">Київ, Україна</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-teal-700 mt-8 pt-8 text-center">
          <p className="text-teal-300">
            © 2024 LuckyFate. Всі права захищені. | Ліцензія на проведення лотерей №123456
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
