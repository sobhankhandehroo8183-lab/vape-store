import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../../components/product/ProductCard';
import { useFetch } from '../../hooks/useFetch';

const FeaturedProducts = () => {
  // بعداً با دیتای واقعی جایگزین می‌کنیم
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'پاد ویپ مدل X8',
      price: 850000,
      oldPrice: 950000,
      image: '/products/x8.jpg',
      rating: 4.5,
      inStock: true,
      discount: 10
    },
    {
      id: 2,
      name: 'کویل اورجینال',
      price: 280000,
      image: '/products/coil.jpg',
      rating: 4.8,
      inStock: true
    },
    {
      id: 3,
      name: 'ست کامل ویپ',
      price: 1250000,
      oldPrice: 1450000,
      image: '/products/kit.jpg',
      rating: 4.3,
      inStock: false,
      discount: 15
    },
    {
      id: 4,
      name: 'مایع ویپ توت‌فرنگی',
      price: 180000,
      image: '/products/liquid.jpg',
      rating: 4.6,
      inStock: true
    }
  ]);

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
            محصولات ویژه
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            بهترین و پرفروش‌ترین محصولات رو با تخفیف ویژه می‌تونی اینجا پیدا کنی
          </p>
        </motion.div>

        {/* گرید محصولات */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
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
          <button className="btn-outline">
            مشاهده همه محصولات
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;