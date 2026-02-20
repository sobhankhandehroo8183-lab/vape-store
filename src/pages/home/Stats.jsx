import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBagIcon, UserGroupIcon, TruckIcon, StarIcon } from '@heroicons/react/24/outline';

const Stats = () => {
  const stats = [
    { icon: ShoppingBagIcon, value: '۱۵۰۰+', label: 'محصول متنوع', color: 'from-blue-500 to-blue-600' },
    { icon: UserGroupIcon, value: '۵۰۰۰+', label: 'مشتری راضی', color: 'from-green-500 to-green-600' },
    { icon: TruckIcon, value: 'ارسال سریع', label: 'به سراسر ایران', color: 'from-purple-500 to-purple-600' },
    { icon: StarIcon, value: '۴.۸', label: 'امتیاز مشتریان', color: 'from-yellow-500 to-yellow-600' },
  ];

  return (
    <div className="bg-gradient-to-r from-primary-600 to-primary-800 py-16">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className={`inline-block p-4 rounded-2xl bg-gradient-to-br ${stat.color} mb-4 shadow-xl`}>
                  <Icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats;