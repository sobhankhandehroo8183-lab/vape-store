import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '../../components/product/ProductCard';
import { FunnelIcon, XMarkIcon } from '@heroicons/react/24/outline';

const Shop = () => {
  const [filters, setFilters] = useState({
    category: 'all',
    priceRange: 'all',
    sort: 'newest'
  });
  const [showFilters, setShowFilters] = useState(false);
  const [loading, setLoading] = useState(false);

  // دیتای تستی محصولات
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'پاد ویپ مدل X8',
      price: 850000,
      oldPrice: 950000,
      image: 'https://via.placeholder.com/300',
      rating: 4.5,
      inStock: true,
      discount: 10,
      category: 'pods',
      brand: 'SMOK',
      soldCount: 245
    },
    {
      id: 2,
      name: 'کویل اورجینال',
      price: 280000,
      image: 'https://via.placeholder.com/300',
      rating: 4.8,
      inStock: true,
      category: 'coils',
      brand: 'Vaporesso',
      soldCount: 567
    },
    {
      id: 3,
      name: 'ست کامل ویپ',
      price: 1250000,
      oldPrice: 1450000,
      image: 'https://via.placeholder.com/300',
      rating: 4.3,
      inStock: false,
      discount: 15,
      category: 'kits',
      brand: 'GeekVape',
      soldCount: 89
    },
    {
      id: 4,
      name: 'مایع ویپ توت‌فرنگی',
      price: 180000,
      image: 'https://via.placeholder.com/300',
      rating: 4.6,
      inStock: true,
      category: 'liquids',
      brand: 'Nasty Juice',
      soldCount: 432
    },
    {
      id: 5,
      name: 'پاد ویپ مدل X9',
      price: 950000,
      image: 'https://via.placeholder.com/300',
      rating: 4.7,
      inStock: true,
      category: 'pods',
      brand: 'Voopoo',
      soldCount: 178
    },
    {
      id: 6,
      name: 'باتری 18650',
      price: 320000,
      image: 'https://via.placeholder.com/300',
      rating: 4.4,
      inStock: true,
      category: 'accessories',
      brand: 'Sony',
      soldCount: 654
    },
    {
      id: 7,
      name: 'کویل CERBERUS',
      price: 250000,
      oldPrice: 280000,
      image: 'https://via.placeholder.com/300',
      rating: 4.9,
      inStock: true,
      discount: 10,
      category: 'coils',
      brand: 'GeekVape',
      soldCount: 321
    },
    {
      id: 8,
      name: 'مایع ویپ موز',
      price: 165000,
      image: 'https://via.placeholder.com/300',
      rating: 4.2,
      inStock: true,
      category: 'liquids',
      brand: 'Dinner Lady',
      soldCount: 287
    }
  ]);

  // فیلتر کردن محصولات
  const filteredProducts = products.filter(product => {
    if (filters.category !== 'all' && product.category !== filters.category) {
      return false;
    }
    return true;
  });

  // مرتب‌سازی محصولات
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (filters.sort) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'popular':
        return b.soldCount - a.soldCount;
      default:
        return b.id - a.id; // جدیدترین
    }
  });

  // آمار محصولات
  const categoryCounts = products.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container-custom">
        {/* هدر صفحه با انیمیشن */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            فروشگاه تخصصی ویپ و پاد
          </h1>
          <p className="text-gray-600 text-lg">
            {sortedProducts.length} محصول از {products.length} محصول موجود
          </p>
        </motion.div>

        {/* هدر موبایل - دکمه فیلتر */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="w-full bg-white rounded-lg shadow-md p-4 flex items-center justify-between"
          >
            <span className="flex items-center gap-2">
              <FunnelIcon className="w-5 h-5 text-primary-600" />
              فیلترها
            </span>
            <span className="text-sm text-gray-500">
              {Object.values(filters).filter(v => v !== 'all').length} فیلتر فعال
            </span>
          </button>
        </div>

        {/* فیلترها و محصولات */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* سایدبار فیلتر - موبایل */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden w-full overflow-hidden"
              >
                <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-lg">فیلترها</h3>
                    <button onClick={() => setShowFilters(false)}>
                      <XMarkIcon className="w-5 h-5" />
                    </button>
                  </div>
                  {/* فیلترهای موبایل */}
                  <FilterSection
                    filters={filters}
                    setFilters={setFilters}
                    categoryCounts={categoryCounts}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* سایدبار فیلتر - دسکتاپ */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="font-bold text-lg mb-4">فیلترها</h3>
              <FilterSection
                filters={filters}
                setFilters={setFilters}
                categoryCounts={categoryCounts}
              />
            </div>
          </div>

          {/* بخش محصولات */}
          <div className="flex-1">
            {/* نوار مرتب‌سازی */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-gray-600 whitespace-nowrap">مرتب‌سازی:</span>
                  <select
                    className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
                    value={filters.sort}
                    onChange={(e) => setFilters({...filters, sort: e.target.value})}
                  >
                    <option value="newest">جدیدترین</option>
                    <option value="price-asc">ارزان‌ترین</option>
                    <option value="price-desc">گران‌ترین</option>
                    <option value="popular">محبوب‌ترین</option>
                  </select>
                </div>

                {/* برچسب‌های فیلتر فعال */}
                <div className="flex flex-wrap gap-2">
                  {filters.category !== 'all' && (
                    <span className="bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                      {filters.category === 'pods' && 'پاد ویپ'}
                      {filters.category === 'coils' && 'کویل'}
                      {filters.category === 'liquids' && 'مایع ویپ'}
                      {filters.category === 'kits' && 'ست کامل'}
                      {filters.category === 'accessories' && 'لوازم جانبی'}
                      <button
                        onClick={() => setFilters({...filters, category: 'all'})}
                        className="mr-1 hover:text-primary-800"
                      >
                        <XMarkIcon className="w-4 h-4" />
                      </button>
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* گرید محصولات با انیمیشن */}
            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white rounded-lg shadow-md p-12 text-center"
              >
                <div className="text-6xl mb-4">😕</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  محصولی یافت نشد
                </h3>
                <p className="text-gray-600 mb-4">
                  با فیلترهای انتخاب شده محصولی وجود ندارد
                </p>
                <button
                  onClick={() => setFilters({ category: 'all', priceRange: 'all', sort: 'newest' })}
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  پاک کردن همه فیلترها
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// کامپوننت جداگانه برای بخش فیلتر
const FilterSection = ({ filters, setFilters, categoryCounts }) => {
  return (
    <div className="space-y-6">
      {/* دسته‌بندی */}
      <div>
        <h4 className="font-medium text-gray-900 mb-3">دسته‌بندی</h4>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'همه محصولات' },
            { value: 'pods', label: 'پاد ویپ' },
            { value: 'coils', label: 'کویل' },
            { value: 'liquids', label: 'مایع ویپ' },
            { value: 'kits', label: 'ست کامل' },
            { value: 'accessories', label: 'لوازم جانبی' }
          ].map(cat => (
            <label key={cat.value} className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="category"
                  value={cat.value}
                  checked={filters.category === cat.value}
                  onChange={(e) => setFilters({...filters, category: e.target.value})}
                  className="w-4 h-4 text-primary-600"
                />
                <span className="text-gray-700">{cat.label}</span>
              </div>
              {cat.value !== 'all' && (
                <span className="text-sm text-gray-500">{categoryCounts[cat.value] || 0}</span>
              )}
            </label>
          ))}
        </div>
      </div>

      {/* محدوده قیمت (برای بعد) */}
      <div>
        <h4 className="font-medium text-gray-900 mb-3">محدوده قیمت</h4>
        <div className="space-y-2">
          <input
            type="range"
            min="0"
            max="2000000"
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>0 تومان</span>
            <span>۲ میلیون تومان</span>
          </div>
        </div>
      </div>

      {/* دکمه پاک کردن فیلترها */}
      <button
        onClick={() => setFilters({ category: 'all', priceRange: 'all', sort: 'newest' })}
        className="text-primary-600 hover:text-primary-700 text-sm font-medium"
      >
        پاک کردن همه
      </button>
    </div>
  );
};

export default Shop;