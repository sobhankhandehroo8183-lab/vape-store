import React, { createContext, useState, useContext, useEffect } from 'react';
import toast from 'react-hot-toast';

// ایجاد context
export const AuthContext = createContext();

// hook سفارشی useAuth
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

// Provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // چک کردن وضعیت احراز هویت در اولین لود
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  // تابع ورود
  const login = async (email, password) => {
    try {
      setLoading(true);
      // TODO: اینجا API واقعی رو بزن
      // برای الان یه کاربر تستی برمی‌گردونیم
      const mockUser = {
        id: 1,
        name: 'کاربر تستی',
        email: email,
        phone: '09123456789',
        address: 'تهران'
      };
      
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      toast.success('با موفقیت وارد شدید');
      return { success: true };
    } catch (error) {
      toast.error('خطا در ورود');
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  };

  // تابع ثبت‌نام
  const register = async (userData) => {
    try {
      setLoading(true);
      // TODO: اینجا API واقعی رو بزن
      const mockUser = {
        id: Date.now(),
        ...userData
      };
      
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      toast.success('ثبت‌نام با موفقیت انجام شد');
      return { success: true };
    } catch (error) {
      toast.error('خطا در ثبت‌نام');
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  };

  // تابع خروج
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    toast.success('از حساب خود خارج شدید');
  };

  // مقادیری که می‌خوایم در سراسر برنامه در دسترس باشه
  const value = {
    user,
    loading,
    login,
    register,
    logout,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};