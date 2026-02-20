import React from 'react';
import { motion } from 'framer-motion';
import { HeartIcon as HeartOutlineIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline'; // InstagramIcon رو پاک کردیم
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';

const InstagramFeed = () => {
  const posts = [
    { id: 1, image: 'https://via.placeholder.com/400x400/0ea5e9/ffffff?text=Post+1', likes: 234, comments: 18 },
    { id: 2, image: 'https://via.placeholder.com/400x400/f97316/ffffff?text=Post+2', likes: 456, comments: 32 },
    { id: 3, image: 'https://via.placeholder.com/400x400/22c55e/ffffff?text=Post+3', likes: 789, comments: 45 },
    { id: 4, image: 'https://via.placeholder.com/400x400/a855f7/ffffff?text=Post+4', likes: 123, comments: 12 },
    { id: 5, image: 'https://via.placeholder.com/400x400/ec4899/ffffff?text=Post+5', likes: 567, comments: 28 },
    { id: 6, image: 'https://via.placeholder.com/400x400/eab308/ffffff?text=Post+6', likes: 890, comments: 56 },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* عنوان بخش */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            {/* به جای آیکون اینستاگرام از یه المان ساده استفاده می‌کنیم */}
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-xs font-bold">
              IG
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              اینستاگرام ما
            </h2>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            جدیدترین محصولات و تخفیف‌ها رو در اینستاگرام ما دنبال کنید
          </p>
        </motion.div>

        {/* گرید تصاویر */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="relative group cursor-pointer aspect-square overflow-hidden rounded-lg"
            >
              {/* تصویر */}
              <img
                src={post.image}
                alt={`Instagram post ${post.id}`}
                className="w-full h-full object-cover"
              />

              {/* اویرلای */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                  <div className="flex items-center justify-center gap-3 text-sm">
                    <div className="flex items-center gap-1">
                      <HeartOutlineIcon className="w-4 h-4" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ChatBubbleLeftIcon className="w-4 h-4" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* دکمه دنبال کردن */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-bold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105"
          >
            {/* آیکون ساده به جای InstagramIcon */}
            <span className="text-lg">📷</span>
            دنبال کردن در اینستاگرام
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramFeed;