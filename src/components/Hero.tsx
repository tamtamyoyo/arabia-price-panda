
import { useLanguage } from '@/hooks/useLanguage';
import SearchBar from './SearchBar';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const Hero = () => {
  const { t, language } = useLanguage();
  const Arrow = language === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4">
      <div className="container mx-auto max-w-5xl relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/80 to-background rounded-3xl opacity-70 blur-3xl"></div>
        
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-balance">
            <span className="text-gradient">{t('compareFrom')}</span>
            <br className="md:hidden" />
            <span> {t('topStores')}</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Find the best deals across Amazon, Noon, Carrefour, Jumia and more. Save money on your next purchase.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <SearchBar />
          </div>
        </div>

        {/* Trusted Stores */}
        <div className="mt-12 md:mt-16">
          <p className="text-sm text-center text-muted-foreground mb-4">TRUSTED STORES</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
            <div className="w-20 h-12 bg-secondary rounded-md flex items-center justify-center">
              <span className="font-bold text-primary">Amazon</span>
            </div>
            <div className="w-20 h-12 bg-secondary rounded-md flex items-center justify-center">
              <span className="font-bold text-primary">Noon</span>
            </div>
            <div className="w-20 h-12 bg-secondary rounded-md flex items-center justify-center">
              <span className="font-bold text-primary">Jumia</span>
            </div>
            <div className="w-20 h-12 bg-secondary rounded-md flex items-center justify-center">
              <span className="font-bold text-primary">Carrefour</span>
            </div>
          </div>
        </div>

        {/* View All Categories Button */}
        <div className="mt-12 text-center">
          <a href="/categories" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
            <span className="font-medium">{t('viewAll')}</span>
            <Arrow size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
