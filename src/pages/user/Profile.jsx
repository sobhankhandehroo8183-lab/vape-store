import React from 'react';
import { useAuth } from '../../context/AuthContext';

const Profile = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container-custom max-w-2xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">پروفایل کاربری</h1>
          
          <div className="space-y-4">
            <div>
              <label className="block text-gray-600 mb-1">نام</label>
              <p className="text-gray-900 font-medium">{user?.name}</p>
            </div>
            
            <div>
              <label className="block text-gray-600 mb-1">ایمیل</label>
              <p className="text-gray-900 font-medium">{user?.email}</p>
            </div>
            
            <div>
              <label className="block text-gray-600 mb-1">تلفن</label>
              <p className="text-gray-900 font-medium">{user?.phone || 'ثبت نشده'}</p>
            </div>
            
            <div>
              <label className="block text-gray-600 mb-1">آدرس</label>
              <p className="text-gray-900 font-medium">{user?.address || 'ثبت نشده'}</p>
            </div>
          </div>
          
          <button
            onClick={logout}
            className="mt-8 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            خروج از حساب
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;