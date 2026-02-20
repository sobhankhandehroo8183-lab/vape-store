import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const MobileMenu = ({ isOpen, onClose }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const menuItems = [
    { title: 'خانه', path: '/' },
    { title: 'فروشگاه', path: '/shop' },
    { title: 'محصولات ویژه', path: '/featured' },
    { title: 'درباره ما', path: '/about' },
    { title: 'تماس با ما', path: '/contact' },
  ];

  const handleLogout = () => {
    logout();
    onClose();
    navigate('/');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50"
          />
          
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50"
          >
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-bold">منو</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            <div className="p-4">
              {user && (
                <div className="mb-4 p-3 bg-primary-50 rounded-lg">
                  <p className="font-bold text-primary-700">{user.name}</p>
                  <p className="text-sm text-primary-600">{user.phone}</p>
                </div>
              )}

              <nav className="space-y-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={onClose}
                    className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}

                {user ? (
                  <>
                    <Link
                      to="/profile"
                      onClick={onClose}
                      className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors"
                    >
                      پروفایل
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-right px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      خروج
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      onClick={onClose}
                      className="block px-4 py-2 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                    >
                      ورود
                    </Link>
                    <Link
                      to="/register"
                      onClick={onClose}
                      className="block px-4 py-2 bg-primary-600 text-white hover:bg-primary-700 rounded-lg transition-colors text-center"
                    >
                      ثبت‌نام
                    </Link>
                  </>
                )}
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;