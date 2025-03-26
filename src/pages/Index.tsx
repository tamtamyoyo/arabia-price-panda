
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
    <div className={`min-h-screen flex flex-col ${language === 'ar' ? 'rtl' : 'ltr'} ${theme === 'dark' ? 'dark bg-gray-900 text-gray-100' : ''}`}>
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <CategoryList />
        <DealsSection />
        <TrendingSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
