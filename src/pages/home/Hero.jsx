import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: 'تخفیف ویژه پاد ویپ‌ها',
      subtitle: 'تا ۴۰٪ تخفیف روی جدیدترین مدل‌ها',
      description: 'بهترین کیفیت، مناسب‌ترین قیمت',
      image: 'https://via.placeholder.com/1920x800/0ea5e9/ffffff?text=Hero+1',
      color: 'from-primary-600 to-primary-800',
      btnText: 'مشاهده محصولات',
      btnLink: '/shop?category=pods'
    },
    {
      id: 2,
      title: 'مایع ویپ اصل',
      subtitle: 'انواع طعم‌های میوه‌ای و کلاسیک',
      description: 'با ضمانت اصالت کالا',
      image: 'https://via.placeholder.com/1920x800/8b5cf6/ffffff?text=Hero+2',
      color: 'from-purple-600 to-purple-800',
      btnText: 'مشاهده مایعات',
      btnLink: '/shop?category=liquids'
    },
    {
      id: 3,
      title: 'کویل اورجینال',
      subtitle: 'بهترین برندهای دنیا',
      description: 'افزایش طول عمر ویپ شما',
      image: 'https://via.placeholder.com/1920x800/ec4899/ffffff?text=Hero+3',
      color: 'from-pink-600 to-pink-800',
      btnText: 'مشاهده کویل‌ها',
      btnLink: '/shop?category=coils'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen max-h-[800px] min-h-[600px] overflow-hidden">
      {/* اسلایدر */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          {/* تصویر پس زمینه */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            {/* اویرلای گرادینت */}
            <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].color} opacity-90`}></div>
          </div>

          {/* محتوا */}
          <div className="absolute inset-0 flex items-center">
            <div className="container-custom">
              <div className="max-w-3xl text-white">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                >
                  {slides[currentSlide].title}
                </motion.h1>
                
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-3xl md:text-4xl font-light mb-4"
                >
                  {slides[currentSlide].subtitle}
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="text-xl md:text-2xl mb-8 opacity-90"
                >
                  {slides[currentSlide].description}
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="flex gap-4"
                >
                  <Button 
                    size="lg" 
                    className="bg-white text-gray-900 hover:bg-gray-100"
                    onClick={() => navigate(slides[currentSlide].btnLink)}
                  >
                    {slides[currentSlide].btnText}
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-white text-white hover:bg-white/10"
                  >
                    تخفیف‌های ویژه
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* دکمه‌های ناوبری */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors z-10"
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors z-10"
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>

      {/* نقاط اسلایدر */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide 
                ? 'w-8 bg-white' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      {/* موج پایین */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" fillOpacity="0.1"/>
        </svg>
      </div>
    </div>
  );
};

export default Hero;