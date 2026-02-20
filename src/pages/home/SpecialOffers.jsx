import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ClockIcon, TagIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

const SpecialOffers = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  // تایمر شمارش معکوس
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const offers = [
    {
      id: 1,
      name: 'پاد ویپ X8 + کویل اضافه',
      price: 980000,
      oldPrice: 1350000,
      discount: 27,
      image: 'https://via.placeholder.com/600x400/0ea5e9/ffffff?text=Special+Bundle',
      endDate: '۲ روز دیگر',
      stock: 15
    },
    {
      id: 2,
      name: 'پک مایع ویپ ۳ تایی',
      price: 450000,
      oldPrice: 600000,
      discount: 25,
      image: 'https://via.placeholder.com/600x400/a855f7/ffffff?text=Liquid+Pack',
      endDate: '۱ روز دیگر',
      stock: 8
    },
    {
      id: 3,
      name: 'ست شارژر همراه با باتری',
      price: 380000,
      oldPrice: 520000,
      discount: 26,
      image: 'https://via.placeholder.com/600x400/f97316/ffffff?text=Charger+Kit',
      endDate: '۳ روز دیگر',
      stock: 12
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* پس زمینه با افکت */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://via.placeholder.com/1920x1080')] bg-cover bg-center"></div>
      </div>

      {/* گرادینت اویرلای */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 to-purple-600/90"></div>

      <div className="container-custom relative z-10">
        {/* عنوان بخش */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <TagIcon className="w-8 h-8 text-yellow-300" />
            <h2 className="text-3xl md:text-4xl font-bold">
              پیشنهادات ویژه و تخفیف‌ها
            </h2>
          </div>
          <p className="text-xl opacity-90 mb-8">
            فرصت رو از دست نده! این تخفیف‌ها موقتی هستن
          </p>

          {/* تایمر شمارش معکوس */}
          <div className="flex justify-center gap-4 mb-8">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="text-center">
                <div className="bg-white/20 backdrop-blur-lg rounded-lg p-4 min-w-[100px]">
                  <div className="text-4xl font-bold text-yellow-300">
                    {value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-sm mt-2 opacity-80">
                    {unit === 'hours' ? 'ساعت' : unit === 'minutes' ? 'دقیقه' : 'ثانیه'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* کارت‌های پیشنهادات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => navigate(`/product/${offer.id}`)}
            >
              {/* تصویر */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* برچسب تخفیف */}
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {offer.discount}% تخفیف
                </div>

                {/* موجودی */}
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  تنها {offer.stock} عدد باقی‌مانده
                </div>
              </div>

              {/* محتوا */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{offer.name}</h3>
                
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-3xl font-bold text-yellow-300">
                    {offer.price.toLocaleString()}
                  </span>
                  <span className="text-gray-400 line-through">
                    {offer.oldPrice.toLocaleString()}
                  </span>
                  <span className="text-sm">تومان</span>
                </div>

                {/* تاریخ انقضا */}
                <div className="flex items-center gap-2 text-sm opacity-80 mb-4">
                  <ClockIcon className="w-4 h-4" />
                  <span>پایان: {offer.endDate}</span>
                </div>

                {/* دکمه خرید */}
                <button className="w-full bg-yellow-400 text-gray-900 py-2 rounded-lg font-bold hover:bg-yellow-300 transition-colors">
                  خرید با تخفیف ویژه
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* دکمه بیشتر */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            onClick={() => navigate('/shop?discount=true')}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-lg text-white px-8 py-3 rounded-lg font-bold hover:bg-white/30 transition-all"
          >
            <ArrowPathIcon className="w-5 h-5" />
            مشاهده همه تخفیف‌ها
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialOffers;