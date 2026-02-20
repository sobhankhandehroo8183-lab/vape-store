import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'; // QuoteIcon رو پاک کردیم

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'علی رضایی',
      role: 'مشتری ویژه',
      avatar: 'https://via.placeholder.com/100/0ea5e9/ffffff?text=AR',
      rating: 5,
      comment: 'فروشگاه عالی! محصولات کاملاً اورجینال هستند و کیفیتشون عالیه. من پاد X8 رو خریدم و خیلی راضی‌ام. ارسال هم خیلی سریع بود.',
      date: '۲ هفته پیش'
    },
    {
      id: 2,
      name: 'سارا محمدی',
      role: 'مشتری عادی',
      avatar: 'https://via.placeholder.com/100/a855f7/ffffff?text=SM',
      rating: 5,
      comment: 'اولین باره که از این سایت خرید می‌کنم. خیلی حرفه‌ای و خوش‌برخورد بودن. مایع ویپ توت‌فرنگی که سفارش دادم عالی بود.',
      date: '۳ روز پیش'
    },
    {
      id: 3,
      name: 'مهدی کریمی',
      role: 'مشتری ویژه',
      avatar: 'https://via.placeholder.com/100/f97316/ffffff?text=MK',
      rating: 4,
      comment: 'قیمت‌ها نسبت به بقیه جاها مناسب‌تر بود. کویل‌هایی که خریدم خیلی زود رسیدن و کیفیتشون هم خوب بود. پیشنهاد می‌کنم.',
      date: '۱ هفته پیش'
    },
    {
      id: 4,
      name: 'نسترن احمدی',
      role: 'مشتری جدید',
      avatar: 'https://via.placeholder.com/100/22c55e/ffffff?text=NA',
      rating: 5,
      comment: 'واقعاً از خریدم راضی‌ام. پشتیبانی خیلی خوب و سریع جواب سوالات رو می‌دن. حتماً دوباره خرید می‌کنم.',
      date: '۵ روز پیش'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* پس زمینه با افکت */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://via.placeholder.com/1920x1080')] bg-cover bg-center"></div>
      </div>

      {/* گرادینت اویرلای */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-purple-900"></div>

      <div className="container-custom relative z-10">
        {/* عنوان */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            نظرات مشتریان
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            اونایی که از ما خرید کردن، چی میگن؟
          </p>
        </motion.div>

        {/* اسلایدر نظرات */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* دکمه‌های ناوبری */}
            <button
              onClick={prevTestimonial}
              className="absolute -left-4 md:-left-12 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors z-10"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute -right-4 md:-right-12 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors z-10"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>

            {/* کارت نظر */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12"
              >
                {/* علامت نقل قول - با HTML ساده */}
                <div className="text-8xl text-primary-300/30 font-serif mb-4 leading-none">
                  "
                </div>

                {/* متن نظر */}
                <p className="text-xl md:text-2xl mb-8 leading-relaxed relative z-10">
                  {testimonials[currentIndex].comment}
                </p>

                {/* امتیاز */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`w-6 h-6 ${
                        i < testimonials[currentIndex].rating
                          ? 'text-yellow-400'
                          : 'text-gray-500'
                      }`}
                    />
                  ))}
                </div>

                {/* اطلاعات کاربر */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full border-2 border-white object-cover"
                  />
                  <div>
                    <h4 className="text-xl font-bold">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-300">
                      {testimonials[currentIndex].role} • {testimonials[currentIndex].date}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* نقاط اسلایدر */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-primary-400'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;