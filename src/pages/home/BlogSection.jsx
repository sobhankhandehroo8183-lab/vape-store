import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CalendarIcon, UserIcon, ChatBubbleLeftIcon, ArrowLongRightIcon } from '@heroicons/react/24/outline';

const BlogSection = () => {
  const navigate = useNavigate();

  const posts = [
    {
      id: 1,
      title: 'راهنمای خرید پاد ویپ برای مبتدیان',
      excerpt: 'اگر تازه وارد دنیای ویپ شدید، این مقاله می‌تونه کمکتون کنه بهترین پاد ویپ رو انتخاب کنید...',
      image: 'https://via.placeholder.com/600x400/0ea5e9/ffffff?text=Blog+1',
      author: 'علی رضایی',
      date: '۱۵ فروردین ۱۴۰۴',
      comments: 24,
      category: 'آموزشی',
      readTime: '۵ دقیقه'
    },
    {
      id: 2,
      title: 'مقایسه کویل‌های مختلف؛ کدامیک بهتر است؟',
      excerpt: 'کویل‌ها انواع مختلفی دارن. در این مقاله تفاوت‌های کویل‌های مختلف رو بررسی می‌کنیم...',
      image: 'https://via.placeholder.com/600x400/f97316/ffffff?text=Blog+2',
      author: 'سارا محمدی',
      date: '۱۰ فروردین ۱۴۰۴',
      comments: 18,
      category: 'مقایسه',
      readTime: '۸ دقیقه'
    },
    {
      id: 3,
      title: 'نکات مهم برای افزایش عمر کویل',
      excerpt: 'با رعایت چند نکته ساده می‌تونید عمر کویل ویپ خودتون رو افزایش بدید و هزینه‌هاتون رو کم کنید...',
      image: 'https://via.placeholder.com/600x400/22c55e/ffffff?text=Blog+3',
      author: 'مهدی کریمی',
      date: '۵ فروردین ۱۴۰۴',
      comments: 32,
      category: 'نکات',
      readTime: '۶ دقیقه'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        {/* عنوان بخش */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            آخرین مقالات و اخبار
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            جدیدترین مطالب آموزشی و اخبار دنیای ویپ رو اینجا بخونید
          </p>
        </motion.div>

        {/* گرید مقالات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group"
              onClick={() => navigate(`/blog/${post.id}`)}
            >
              {/* تصویر */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* برچسب دسته‌بندی */}
                <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {post.category}
                </div>

                {/* زمان مطالعه */}
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  {post.readTime}
                </div>
              </div>

              {/* محتوا */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* متا اطلاعات */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <UserIcon className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CalendarIcon className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ChatBubbleLeftIcon className="w-4 h-4" />
                    <span>{post.comments}</span>
                  </div>
                </div>

                {/* لینک ادامه مطلب */}
                <div className="flex items-center text-primary-600 font-medium group/link">
                  <span>ادامه مطلب</span>
                  <ArrowLongRightIcon className="w-5 h-5 mr-2 group-hover/link:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* دکمه مشاهده همه */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            onClick={() => navigate('/blog')}
            className="btn-outline"
          >
            مشاهده همه مقالات
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;