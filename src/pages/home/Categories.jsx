import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  DevicePhoneMobileIcon, 
  BeakerIcon, 
  FireIcon,
  SparklesIcon,
  BoltIcon,
  CubeIcon 
} from '@heroicons/react/24/outline';

const Categories = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      name: 'پاد ویپ',
      icon: DevicePhoneMobileIcon,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      count: 24,
      image: 'https://via.placeholder.com/400x300/0ea5e9/ffffff?text=Pods'
    },
    {
      id: 2,
      name: 'کویل',
      icon: FireIcon,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      count: 18,
      image: 'https://via.placeholder.com/400x300/f97316/ffffff?text=Coils'
    },
    {
      id: 3,
      name: 'مایع ویپ',
      icon: BeakerIcon,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      count: 32,
      image: 'https://via.placeholder.com/400x300/a855f7/ffffff?text=Liquids'
    },
    {
      id: 4,
      name: 'ست کامل',
      icon: CubeIcon,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      count: 15,
      image: 'https://via.placeholder.com/400x300/22c55e/ffffff?text=Kits'
    },
    {
      id: 5,
      name: 'باتری و شارژر',
      icon: BoltIcon,
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-600',
      count: 12,
      image: 'https://via.placeholder.com/400x300/eab308/ffffff?text=Batteries'
    },
    {
      id: 6,
      name: 'لوازم جانبی',
      icon: SparklesIcon,
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-600',
      count: 28,
      image: 'https://via.placeholder.com/400x300/ec4899/ffffff?text=Accessories'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        {/* عنوان بخش */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            دسته‌بندی محصولات
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            از بین دسته‌بندی‌های متنوع ما، محصول مورد نظرت رو پیدا کن
          </p>
        </motion.div>

        {/* گرید دسته‌بندی‌ها */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => navigate(`/shop?category=${category.name}`)}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              >
                {/* تصویر پس زمینه */}
                <div className="absolute inset-0">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>

                {/* محتوا */}
                <div className="relative p-8 min-h-[300px] flex flex-col justify-end text-white">
                  {/* آیکون */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 ${category.bgColor} rounded-2xl flex items-center justify-center mb-4`}
                  >
                    <Icon className={`w-8 h-8 ${category.textColor}`} />
                  </motion.div>

                  {/* نام دسته‌بندی */}
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  
                  {/* تعداد محصولات */}
                  <p className="text-gray-300 mb-4">
                    {category.count} محصول
                  </p>

                  {/* دکمه مشاهده */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-primary-400 font-medium group-hover:text-primary-300"
                  >
                    مشاهده محصولات
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;