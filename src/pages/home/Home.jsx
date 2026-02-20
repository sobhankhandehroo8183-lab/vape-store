import React from 'react';
import Hero from './Hero';
import Categories from './Categories';
import FeaturedProducts from './FeaturedProducts';
import BestSellers from './BestSellers';
import SpecialOffers from './SpecialOffers';
import Brands from './Brands';
import WhyUs from './WhyUs';
import Testimonials from './Testimonials';
import BlogSection from './BlogSection';
import InstagramFeed from './InstagramFeed';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Categories />
      <FeaturedProducts />
      <BestSellers />
      <SpecialOffers />
      <Brands />
      <WhyUs />
      <Testimonials />
      <BlogSection />
      <InstagramFeed />
      
      {/* دکمه بازگشت به بالا */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 left-8 bg-primary-600 text-white p-3 rounded-full shadow-lg hover:bg-primary-700 transition-colors z-50"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </div>
  );
};

export default Home;