
import { useLanguage } from '@/hooks/useLanguage';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CategoryList from '@/components/CategoryList';
import DealsSection from '@/components/DealsSection';
import BrowseByBrand from '@/components/BrowseByBrand';
import FeaturedProduct from '@/components/FeaturedProduct';
import TrendingSection from '@/components/TrendingSection';
import PriceHistory from '@/components/PriceHistory';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import PopularProducts from '@/components/PopularProducts';
import RecommendedProducts from '@/components/RecommendedProducts';
import StoresSection from '@/components/StoresSection';
import LatestProducts from '@/components/LatestProducts';
import WhyChooseUs from '@/components/WhyChooseUs';
import PopularStores from '@/components/PopularStores';
import Testimonials from '@/components/Testimonials';
import AppDownload from '@/components/AppDownload';

const Index = () => {
  const { language, theme } = useLanguage();

  return (
    <div className={`min-h-screen flex flex-col ${language === 'ar' ? 'rtl' : 'ltr'} ${theme === 'dark' ? 'dark bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100' : 'bg-gradient-to-b from-blue-50/50 to-white'}`}>
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 skew-y-3 -z-10 transform-gpu"></div>
          <CategoryList />
        </div>
        
        <PopularStores />
        
        <div className="container mx-auto px-4">
          <FeaturedProduct />
        </div>
        
        <div className="relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/10 to-primary/5 -z-10 rounded-[50%] blur-3xl transform translate-x-1/2"></div>
          <DealsSection />
        </div>
        
        <PopularProducts />
        
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-blue-500/5 -z-10"></div>
          <RecommendedProducts />
        </div>
        
        <WhyChooseUs />
        
        <BrowseByBrand />
        
        <div className="container mx-auto px-4">
          <PriceHistory />
        </div>
        
        <LatestProducts />
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-l from-secondary/20 to-primary/10 -skew-y-3 -z-10 transform-gpu"></div>
          <TrendingSection />
        </div>
        
        <StoresSection />
        
        <AppDownload />
        
        <Testimonials />
        
        <div className="container mx-auto px-4">
          <Newsletter />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
