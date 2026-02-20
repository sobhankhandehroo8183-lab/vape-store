import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import { TrashIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

const CartPage = () => {
  const { cart, totalPrice, updateQuantity, removeFromCart, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCheckout = async () => {
    if (!user) {
      toast.error('لطفا ابتدا وارد حساب کاربری خود شوید');
      navigate('/login', { state: { from: '/cart' } });
      return;
    }

    setIsSubmitting(true);
    
    // اینجا API سفارش رو می‌زنیم
    try {
      // ارسال سفارش به مدیر
      const orderData = {
        user: {
          id: user.id,
          name: user.name,
          phone: user.phone,
          address: user.address
        },
        items: cart,
        totalPrice,
        orderDate: new Date().toISOString(),
        status: 'pending'
      };

      // TODO: ارسال به API
      console.log('سفارش جدید:', orderData);
      
      toast.success('سفارش شما با موفقیت ثبت شد');
      clearCart();
      navigate('/profile/orders');
    } catch (error) {
      toast.error('خطا در ثبت سفارش');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container-custom">
          <div className="text-center py-20 bg-white rounded-2xl shadow-lg">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              سبد خرید شما خالی است
            </h2>
            <p className="text-gray-600 mb-8">
              به نظر می‌رسد هنوز محصولی به سبد خرید خود اضافه نکرده‌اید
            </p>
            <Button onClick={() => navigate('/shop')}>
              مشاهده محصولات
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container-custom">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">سبد خرید</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* لیست محصولات */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-4 flex gap-4"
              >
                <img
                  src={item.image || 'https://via.placeholder.com/120'}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                  <p className="text-primary-600 font-bold mt-1">
                    {item.price.toLocaleString()} تومان
                  </p>
                  
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 bg-gray-100 rounded-full hover:bg-gray-200"
                      >
                        -
                      </button>
                      <span className="w-8 text-center font-bold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 bg-gray-100 rounded-full hover:bg-gray-200"
                      >
                        +
                      </button>
                    </div>
                    
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 flex items-center gap-1"
                    >
                      <TrashIcon className="w-5 h-5" />
                      <span>حذف</span>
                    </button>
                  </div>
                </div>

                <div className="text-left">
                  <div className="text-lg font-bold text-gray-900">
                    {(item.price * item.quantity).toLocaleString()} تومان
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* خلاصه سفارش */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                خلاصه سفارش
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>تعداد کالاها</span>
                  <span>{cart.length} عدد</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>جمع کل</span>
                  <span>{totalPrice.toLocaleString()} تومان</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>هزینه ارسال</span>
                  <span>رایگان</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between font-bold text-lg">
                    <span>مبلغ قابل پرداخت</span>
                    <span className="text-primary-600">
                      {totalPrice.toLocaleString()} تومان
                    </span>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleCheckout}
                isLoading={isSubmitting}
                className="w-full flex items-center justify-center gap-2"
                size="lg"
              >
                <ArrowRightIcon className="w-5 h-5" />
                ثبت سفارش
              </Button>

              <p className="text-sm text-gray-500 text-center mt-4">
                پس از ثبت سفارش، کارشناسان ما با شما تماس خواهند گرفت
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;