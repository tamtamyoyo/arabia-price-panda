
import { useLanguage } from '@/hooks/useLanguage';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CategoryList from '@/components/CategoryList';
import DealsSection from '@/components/DealsSection';
import TrendingSection from '@/components/TrendingSection';
import Footer from '@/components/Footer';

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
        <div className="relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/10 to-primary/5 -z-10 rounded-[50%] blur-3xl transform translate-x-1/2"></div>
          <DealsSection />
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-l from-secondary/20 to-primary/10 -skew-y-3 -z-10 transform-gpu"></div>
          <TrendingSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
