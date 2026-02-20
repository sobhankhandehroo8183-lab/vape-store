import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout'; // اینو اضافه کن
import Home from '../pages/home/Home';
import Shop from '../pages/shop/Shop';
import ProductDetail from '../pages/product/ProductDetail';
import CartPage from '../pages/user/CartPage';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import Profile from '../pages/user/Profile';
import UserOrders from '../pages/user/Orders';
import Dashboard from '../pages/dashboard/Dashboard';
import DashboardOrders from '../pages/dashboard/Orders';
import DashboardProducts from '../pages/dashboard/Products';
import NotFound from '../pages/error/NotFound';
import ProtectedRoute from './ProtectedRoute';

const AppRoutes = () => {
  return (
    <Routes>
      {/* همه مسیرها داخل MainLayout قرار می‌گیرن */}
      <Route element={<MainLayout />}>
        {/* مسیرهای عمومی */}
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
        
        {/* مسیرهای احراز هویت */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* مسیرهای کاربر عادی */}
        <Route path="/profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />
        <Route path="/profile/orders" element={
          <ProtectedRoute>
            <UserOrders />
          </ProtectedRoute>
        } />
        
        {/* مسیرهای ادمین */}
        <Route path="/dashboard" element={
          <ProtectedRoute adminOnly={true}>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/dashboard/orders" element={
          <ProtectedRoute adminOnly={true}>
            <DashboardOrders />
          </ProtectedRoute>
        } />
        <Route path="/dashboard/products" element={
          <ProtectedRoute adminOnly={true}>
            <DashboardProducts />
          </ProtectedRoute>
        } />
      </Route>
      
      {/* مسیر 404 - خارج از layout اصلی */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;