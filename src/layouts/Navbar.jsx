import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { ShoppingBagIcon, UserIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const { totalItems } = useCart();
  const { user } = useAuth();

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* لوگو */}
          <Link to="/" className="text-2xl font-bold text-primary-600">
            ویپ‌استور
          </Link>

          {/* منوی اصلی */}
          <div className="hidden md:flex space-x-8 space-x-reverse">
            <Link to="/" className="text-gray-700 hover:text-primary-600 transition-colors">
              خانه
            </Link>
            <Link to="/shop" className="text-gray-700 hover:text-primary-600 transition-colors">
              فروشگاه
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary-600 transition-colors">
              درباره ما
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary-600 transition-colors">
              تماس با ما
            </Link>
          </div>

          {/* آیکون‌ها */}
          <div className="flex items-center gap-4">
            {/* سبد خرید */}
            <Link to="/cart" className="relative">
              <ShoppingBagIcon className="w-6 h-6 text-gray-700 hover:text-primary-600" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* پروفایل / ورود */}
            {user ? (
              <Link to="/profile">
                <UserIcon className="w-6 h-6 text-gray-700 hover:text-primary-600" />
              </Link>
            ) : (
              <Link 
                to="/login" 
                className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-primary-700"
              >
                ورود
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;