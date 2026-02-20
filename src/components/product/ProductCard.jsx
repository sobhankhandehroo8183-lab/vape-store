import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HeartIcon, ShoppingBagIcon, StarIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const ProductCard = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const {
    id,
    name,
    price,
    oldPrice,
    image,
    rating,
    inStock,
    discount,
    brand,
    soldCount
  } = product;

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (!inStock) {
      toast.error('متاسفانه این محصول موجود نیست');
      return;
    }
    addToCart({ ...product, quantity: 1 });
    toast.success('به سبد خرید اضافه شد');
  };

  const handleLike = (e) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
    if (!isLiked) {
      toast.success('به علاقه‌مندی‌ها اضافه شد');
    }
  };

  const discountAmount = oldPrice ? oldPrice - price : 0;
  const discountPercent = discount ? discount : (oldPrice ? Math.round((discountAmount / oldPrice) * 100) : 0);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
      onClick={() => navigate(`/product/${id}`)}
    >
      {/* برچسب‌ها */}
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
        {discountPercent > 0 && (
          <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
            {discountPercent}% تخفیف
          </div>
        )}
        {!inStock && (
          <div className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
            ناموجود
          </div>
        )}
      </div>

      {/* دکمه علاقه‌مندی */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleLike}
        className="absolute top-4 left-4 z-10 p-2 bg-white/90 rounded-full hover:bg-white transition-colors shadow-lg"
      >
        {isLiked ? (
          <HeartSolidIcon className="w-5 h-5 text-red-500" />
        ) : (
          <HeartIcon className="w-5 h-5 text-gray-600" />
        )}
      </motion.button>

      {/* تصویر محصول */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* اویرلای اطلاعات سریع */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4"
        >
          <button className="bg-white text-gray-900 p-3 rounded-full hover:bg-primary-600 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>
        </motion.div>

        {/* نشان برند */}
        {brand && (
          <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-700">
            {brand}
          </div>
        )}
      </div>

      {/* اطلاعات محصول */}
      <div className="p-4">
        {/* نام محصول */}
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">
          {name}
        </h3>

        {/* امتیاز و فروش */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-current text-yellow-400' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500 mr-1">({rating})</span>
          </div>
          {soldCount && (
            <span className="text-xs text-gray-500">
              {soldCount.toLocaleString()} فروش
            </span>
          )}
        </div>

        {/* قیمت */}
        <div className="flex items-end justify-between mb-4">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-primary-600">
                {price.toLocaleString()}
              </span>
              <span className="text-xs text-gray-500">تومان</span>
            </div>
            {oldPrice && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400 line-through">
                  {oldPrice.toLocaleString()} تومان
                </span>
                <span className="text-xs text-green-600 font-bold">
                  سود شما: {discountAmount.toLocaleString()} تومان
                </span>
              </div>
            )}
          </div>
        </div>

        {/* دکمه خرید */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleAddToCart}
          disabled={!inStock}
          className={`w-full py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all ${
            inStock
              ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          <ShoppingBagIcon className="w-5 h-5" />
          {inStock ? 'افزودن به سبد خرید' : 'ناموجود'}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;