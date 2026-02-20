import React from 'react';
import { motion } from 'framer-motion';

const BrandSlider = () => {
  const brands = [
    { id: 1, name: 'SMOK', logo: 'https://via.placeholder.com/200x100', color: 'from-blue-500' },
    { id: 2, name: 'Voopoo', logo: 'https://via.placeholder.com/200x100', color: 'from-green-500' },
    { id: 3, name: 'GeekVape', logo: 'https://via.placeholder.com/200x100', color: 'from-purple-500' },
    { id: 4, name: 'Vaporesso', logo: 'https://via.placeholder.com/200x100', color: 'from-red-500' },
    { id: 5, name: 'Uwell', logo: 'https://via.placeholder.com/200x100', color: 'from-yellow-500' },
    { id: 6, name: 'Innokin', logo: 'https://via.placeholder.com/200x100', color: 'from-indigo-500' },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            برندهای <span className="text-primary-400">معتبر</span>
          </h2>
          <p className="text-gray-400">همکاری با بهترین برندهای دنیا</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className={`bg-gradient-to-br ${brand.color} to-gray-800 rounded-xl p-6 backdrop-blur-lg bg-white/10 border border-white/20`}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-full h-auto filter brightness-0 invert opacity-50 hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSlider;