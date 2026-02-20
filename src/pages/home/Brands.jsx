import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Brands = () => {
  const navigate = useNavigate();

  const brands = [
    { id: 1, name: 'SMOK', logo: 'https://via.placeholder.com/200x100/0ea5e9/ffffff?text=SMOK', color: 'from-blue-500' },
    { id: 2, name: 'Vaporesso', logo: 'https://via.placeholder.com/200x100/f97316/ffffff?text=Vaporesso', color: 'from-orange-500' },
    { id: 3, name: 'GeekVape', logo: 'https://via.placeholder.com/200x100/22c55e/ffffff?text=GeekVape', color: 'from-green-500' },
    { id: 4, name: 'Voopoo', logo: 'https://via.placeholder.com/200x100/a855f7/ffffff?text=Voopoo', color: 'from-purple-500' },
    { id: 5, name: 'Uwell', logo: 'https://via.placeholder.com/200x100/ec4899/ffffff?text=Uwell', color: 'from-pink-500' },
    { id: 6, name: 'Aspire', logo: 'https://via.placeholder.com/200x100/eab308/ffffff?text=Aspire', color: 'from-yellow-500' },
    { id: 7, name: 'Innokin', logo: 'https://via.placeholder.com/200x100/14b8a6/ffffff?text=Innokin', color: 'from-teal-500' },
    { id: 8, name: 'Lost Vape', logo: 'https://via.placeholder.com/200x100/8b5cf6/ffffff?text=Lost+Vape', color: 'from-violet-500' },
  ];

  // دو بار تکرار برای اسکرول بی‌نهایت
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        {/* عنوان */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            برندهای معتبر جهانی
          </h2>
          <p className="text-gray-600">
            همکاری با بهترین برندهای دنیا برای ارائه باکیفیت‌ترین محصولات
          </p>
        </motion.div>

        {/* اسکرول افقی برندها */}
        <div className="relative overflow-hidden py-6">
          {/* گرادینت‌های کناری */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* برندها با انیمیشن اسکرول */}
          <motion.div
            animate={{
              x: ['0%', '-50%']
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex gap-8 whitespace-nowrap"
          >
            {duplicatedBrands.map((brand, index) => (
              <motion.div
                key={`${brand.id}-${index}`}
                whileHover={{ scale: 1.05, y: -5 }}
                onClick={() => navigate(`/shop?brand=${brand.name}`)}
                className="inline-flex flex-col items-center cursor-pointer group"
              >
                <div className={`w-32 h-32 rounded-2xl bg-gradient-to-br ${brand.color} to-gray-100 p-1 mb-3 shadow-lg group-hover:shadow-xl transition-shadow`}>
                  <div className="w-full h-full bg-white rounded-xl flex items-center justify-center p-4">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all"
                    />
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-primary-600 transition-colors">
                  {brand.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Brands;