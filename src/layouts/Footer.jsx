import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* درباره ما */}
          <div>
            <h3 className="text-xl font-bold mb-4">ویپ‌استور</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              فروشگاه تخصصی پاد و ویپ با بهترین قیمت و اصالت کالا
            </p>
          </div>

          {/* لینک‌های سریع */}
          <div>
            <h4 className="font-bold mb-4">لینک‌های سریع</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/shop" className="hover:text-primary-400">فروشگاه</Link></li>
              <li><Link to="/about" className="hover:text-primary-400">درباره ما</Link></li>
              <li><Link to="/contact" className="hover:text-primary-400">تماس با ما</Link></li>
              <li><Link to="/faq" className="hover:text-primary-400">سوالات متداول</Link></li>
            </ul>
          </div>

          {/* دسترسی سریع */}
          <div>
            <h4 className="font-bold mb-4">دسترسی سریع</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/profile" className="hover:text-primary-400">پروفایل</Link></li>
              <li><Link to="/cart" className="hover:text-primary-400">سبد خرید</Link></li>
              <li><Link to="/login" className="hover:text-primary-400">ورود</Link></li>
              <li><Link to="/register" className="hover:text-primary-400">ثبت‌نام</Link></li>
            </ul>
          </div>

          {/* اطلاعات تماس */}
          <div>
            <h4 className="font-bold mb-4">تماس با ما</h4>
            <ul className="space-y-2 text-gray-400">
              <li>تلفن: ۰۲۱-۱۲۳۴۵۶۷۸</li>
              <li>ایمیل: info@vapestore.com</li>
              <li>آدرس: تهران، خیابان ولیعصر</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>تمامی حقوق محفوظ است © ۱۴۰۴</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;