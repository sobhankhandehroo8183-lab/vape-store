import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  TruckIcon, 
  ShieldCheckIcon, 
  CurrencyDollarIcon,
  ArrowPathIcon,
  HeartIcon,
  StarIcon,
  UsersIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';

const WhyUs = () => {
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 });

  const features = [
    {
      id: 1,
      title: 'ارسال سریع',
      description: 'ارسال به سراسر کشور در کمترین زمان ممکن',
      icon: TruckIcon,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      id: 2,
      title: 'ضمانت اصالت',
      description: 'تمام محصولات با ضمانت اصالت و سلامت فیزیکی',
      icon: ShieldCheckIcon,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      id: 3,
      title: 'بهترین قیمت',
      description: 'تضمین بهترین قیمت در بازار',
      icon: CurrencyDollarIcon,
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-600'
    },
    {
      id: 4,
      title: 'بازگشت کالا',
      description: '۷ روز ضمانت بازگشت کالا',
      icon: ArrowPathIcon,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    },
    {
      id: 5,
      title: 'محصولات اورجینال',
      description: 'فقط محصولات اورجینال و با کیفیت',
      icon: HeartIcon,
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-600'
    },
    {
      id: 6,
      title: 'پشتیبانی ۲۴ ساعته',
      description: 'پاسخگویی سریع به سوالات شما',
      icon: PhoneIcon,
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-600'
    }
  ];

  const stats = [
    { id: 1, value: 15000, label: 'مشتری راضی', icon: UsersIcon, suffix: '+' },
    { id: 2, value: 3500, label: 'سفارش موفق', icon: ShoppingBagIcon, suffix: '+' },
    { id: 3, value: 98, label: 'رضایت مشتریان', icon: StarIcon, suffix: '%' },
    { id: 4, value: 24, label: 'پشتیبانی', icon: ClockIcon, suffix: '/۷' }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* المان‌های تزیینی */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* عنوان */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            چرا ویپ‌استور؟
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            ما اینجا هستیم تا بهترین تجربه خرید رو برات رقم بزنیم
          </p>
        </motion.div>

        {/* آمار */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 text-center"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isStatsInView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.1 + 0.3, type: 'spring' }}
                  className="text-3xl font-bold text-gray-900 mb-1"
                >
                  {stat.value.toLocaleString()}{stat.suffix}
                </motion.div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* ویژگی‌ها */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative bg-white rounded-2xl shadow-lg p-6 overflow-hidden"
              >
                {/* گرادینت پس زمینه */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* آیکون */}
                <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 ${feature.textColor}`} />
                </div>

                {/* عنوان */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {feature.title}
                </h3>

                {/* توضیحات */}
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* خط زیرین */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.color}`}
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ایمپورت‌های اضافی
import { ShoppingBagIcon, ClockIcon } from '@heroicons/react/24/outline';

export default WhyUs;