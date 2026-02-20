import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../../components/product/ProductCard';
import { useNavigate } from 'react-router-dom';
import { FireIcon } from '@heroicons/react/24/solid';

const BestSellers = () => {
  const navigate = useNavigate();

  const bestSellers = [
    {
      id: 1,
      name: 'پاد ویپ X8 پرو',
      price: 950000,
      oldPrice: 1150000,
      image: 'https://via.placeholder.com/300/0ea5e9/ffffff?text=X8+Pro',
      rating: 4.9,
      inStock: true,
      discount: 17,
      brand: 'SMOK',
      soldCount: 1250
    },
    {
      id: 2,
      name: 'کویل QF',
      price: 320000,
      oldPrice: 380000,
      image: 'https://via.placeholder.com/300/f97316/ffffff?text=QF+Coil',
      rating: 4.8,
      inStock: true,
      discount: 15,
      brand: 'Vaporesso',
      soldCount: 2340
    },
    {
      id: 3,
      name: 'مایع ویپ بری میکس',
      price: 195000,
      image: 'https://via.placeholder.com/300/a855f7/ffffff?text=Berry+Mix',
      rating: 4.7,
      inStock: true,
      brand: 'Nasty Juice',
      soldCount: 3450
    },
    {
      id: 4,
      name: 'ست کامل Aegis',
      price: 2150000,
      oldPrice: 2650000,
      image: 'https://via.placeholder.com/300/22c55e/ffffff?text=Aegis',
      rating: 5.0,
      inStock: true,
      discount: 18,
      brand: 'GeekVape',
      soldCount: 890
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50 relative overflow-hidden">
      {/* المان‌های تزیینی */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* عنوان بخش با المان آتش */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <FireIcon className="w-8 h-8 text-orange-500 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              پرفروش‌ترین محصولات
            </h2>
            <FireIcon className="w-8 h-8 text-orange-500 animate-pulse" />
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            محصولاتی که همه مشتری‌ها عاشقشون شدن
          </p>
        </motion.div>

        {/* گرید محصولات */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              {/* نشان پرفروش */}
              <div className="absolute -top-3 -right-3 z-20">
                <div className="relative">
                  <div className="absolute inset-0 bg-orange-500 rounded-full animate-ping opacity-75"></div>
                  <div className="relative bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    #{index + 1} پرفروش
                  </div>
                </div>
              </div>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        {/* دکمه مشاهده همه */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            onClick={() => navigate('/shop?sort=popular')}
            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-lg font-bold hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105"
          >
            <span>مشاهده همه پرفروش‌ها</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BestSellers;