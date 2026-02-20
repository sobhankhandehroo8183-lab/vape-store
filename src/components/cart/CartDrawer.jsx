import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';

const CartDrawer = () => {
  const { cart, isOpen, setIsOpen, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* اویرلی */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 z-50"
          />

          {/* کشو */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed top-0 left-0 h-full w-full max-w-md bg-white shadow-2xl z-50 overflow-hidden"
          >
            {/* هدر */}
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-2">
                <ShoppingBagIcon className="w-6 h-6 text-primary-600" />
                <h2 className="text-xl font-bold">سبد خرید</h2>
                <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded-full text-sm">
                  {totalItems}
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            {/* محتوای سبد خرید */}
            <div className="flex-1 overflow-y-auto p-4" style={{ height: 'calc(100vh - 180px)' }}>
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-500">
                  <ShoppingBagIcon className="w-20 h-20 mb-4 opacity-20" />
                  <p className="text-lg">سبد خرید خالی است</p>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      navigate('/shop');
                    }}
                    className="mt-4 text-primary-600 hover:text-primary-700"
                  >
                    ادامه خرید
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex gap-4 p-3 bg-gray-50 rounded-lg"
                    >
                      {/* تصویر */}
                      <img
                        src={item.image || 'https://via.placeholder.com/80'}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />

                      {/* اطلاعات */}
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900">{item.name}</h3>
                        <p className="text-primary-600 font-bold mt-1">
                          {item.price.toLocaleString()} تومان
                        </p>

                        {/* کنترل تعداد */}
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300"
                          >
                            -
                          </button>
                          <span className="w-8 text-center font-bold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300"
                          >
                            +
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="mr-auto text-red-500 hover:text-red-700 text-sm"
                          >
                            حذف
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* فوتر - جمع کل و دکمه تسویه */}
            {cart.length > 0 && (
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">جمع کل:</span>
                  <span className="text-2xl font-bold text-primary-600">
                    {totalPrice.toLocaleString()} تومان
                  </span>
                </div>
                <Button
                  className="w-full"
                  size="lg"
                  onClick={() => {
                    setIsOpen(false);
                    navigate('/cart');
                  }}
                >
                  ثبت سفارش
                </Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;