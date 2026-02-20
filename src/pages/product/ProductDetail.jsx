import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import Button from '../../components/ui/Button';
import { HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  // دیتای تستی محصول
  const product = {
    id: parseInt(id),
    name: 'پاد ویپ مدل X8',
    price: 850000,
    oldPrice: 950000,
    description: 'پاد ویپ مدل X8 با طراحی زیبا و کارایی بالا، مناسب برای مبتدیان و حرفه‌ای‌ها',
    images: ['https://via.placeholder.com/600', 'https://via.placeholder.com/600', 'https://via.placeholder.com/600'],
    rating: 4.5,
    inStock: true,
    discount: 10,
    features: [
      'باتری 1000 میلی‌آمپر',
      'مخزن 2 میلی‌لیتر',
      'شارژ سریع',
      'طراحی ارگونومیک'
    ]
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    toast.success('به سبد خرید اضافه شد');
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container-custom">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* گالری تصاویر */}
            <div>
              <div className="bg-gray-100 rounded-xl overflow-hidden mb-4">
                <img 
                  src={product.images[0]} 
                  alt={product.name}
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((img, index) => (
                  <div key={index} className="bg-gray-100 rounded-lg overflow-hidden cursor-pointer">
                    <img src={img} alt="" className="w-full h-24 object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* اطلاعات محصول */}
            <div>
              {product.discount && (
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold mb-4 inline-block">
                  {product.discount}% تخفیف ویژه
                </span>
              )}

              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              {/* امتیاز */}
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400 ml-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-600">{product.rating} از ۵</span>
              </div>

              {/* قیمت */}
              <div className="mb-6">
                {product.oldPrice && (
                  <span className="text-gray-400 line-through text-lg ml-3">
                    {product.oldPrice.toLocaleString()} تومان
                  </span>
                )}
                <span className="text-3xl font-bold text-primary-600">
                  {product.price.toLocaleString()} تومان
                </span>
              </div>

              {/* وضعیت موجودی */}
              <div className="mb-6">
                {product.inStock ? (
                  <span className="text-green-600 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    موجود در انبار
                  </span>
                ) : (
                  <span className="text-red-600">ناموجود</span>
                )}
              </div>

              {/* ویژگی‌ها */}
              <div className="mb-6">
                <h3 className="font-bold text-gray-900 mb-3">ویژگی‌ها:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              {/* توضیحات */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* انتخاب تعداد */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-gray-700">تعداد:</span>
                <div className="flex items-center border rounded-lg">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* دکمه‌ها */}
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  className="flex-1 flex items-center justify-center gap-2"
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                >
                  <ShoppingBagIcon className="w-5 h-5" />
                  افزودن به سبد خرید
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="px-6"
                >
                  <HeartIcon className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;