import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../../components/product/ProductCard';

const LatestProducts = () => {
  const products = [
    {
      id: 101,
      name: 'پاد ویپ مدل 2025',
      price: 1450000,
      image: 'https://via.placeholder.com/300',
      rating: 5,
      inStock: true,
      isNew: true
    },
    {
      id: 102,
      name: 'مایع ویپ طعم جدید',
      price: 220000,
      image: 'https://via.placeholder.com/300',
      rating: 4.5,
      inStock: true,
      isNew: true
    },
    {
      id: 103,
      name: 'کویل نسل 4',
      price: 380000,
      oldPrice: 420000,
      image: 'https://via.placeholder.com/300',
      rating: 4.8,
      inStock: true,
      isNew: true
    },
    {
      id: 104,
      name: 'باتری پیشرفته',
      price: 520000,
      image: 'https://via.placeholder.com/300',
      rating: 4.3,
      inStock: true,
      isNew: true
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            جدیدترین <span className="text-primary-600">محصولات</span>
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            اولین نفری باش که محصولات جدید رو تجربه می‌کنی
          </p>
        </motion.div>

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
      </div>
    </section>
  );
};

export default LatestProducts;