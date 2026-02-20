import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary-600 mb-4">404</h1>
        <p className="text-2xl text-gray-700 mb-8">صفحه مورد نظر یافت نشد</p>
        <Link 
          to="/" 
          className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
        >
          بازگشت به خانه
        </Link>
      </div>
    </div>
  );
};

export default NotFound;