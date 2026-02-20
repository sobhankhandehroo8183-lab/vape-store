import React from 'react';
import { useAuth } from '../../context/AuthContext';

const Orders = () => {
  const { user } = useAuth();
  
  // سفارشات تستی
  const orders = [
    { id: 1, date: '1403/01/15', total: 850000, status: 'در انتظار تایید' },
    { id: 2, date: '1403/01/10', total: 450000, status: 'تحویل شده' },
    { id: 3, date: '1402/12/25', total: 1250000, status: 'لغو شده' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container-custom">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">سفارشات من</h1>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-right">شماره سفارش</th>
                <th className="px-6 py-3 text-right">تاریخ</th>
                <th className="px-6 py-3 text-right">مبلغ</th>
                <th className="px-6 py-3 text-right">وضعیت</th>
                <th className="px-6 py-3 text-right">عملیات</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-t hover:bg-gray-50">
                  <td className="px-6 py-4">#{order.id}</td>
                  <td className="px-6 py-4">{order.date}</td>
                  <td className="px-6 py-4">{order.total.toLocaleString()} تومان</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      order.status === 'تحویل شده' ? 'bg-green-100 text-green-800' :
                      order.status === 'لغو شده' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-primary-600 hover:underline">
                      جزئیات
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;