
import { useLanguage } from '@/hooks/useLanguage';
import SearchBar from './search/SearchBar';
import { ArrowRight, ArrowLeft, Bell, ShoppingBag, Zap } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const Hero = () => {
  const { t, language, theme } = useLanguage();
  const Arrow = language === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-4 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 opacity-70"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto max-w-5xl relative">
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-balance leading-tight">
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">{t('compareFrom')}</span>
            <br className="md:hidden" />
            <span className={theme === 'dark' ? 'text-white' : ''}> {t('topStores')}</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            {t('findBestDeals')}. {t('saveMoney')}.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <SearchBar />
            
            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-2 mt-6 text-sm">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className={`flex items-center px-3 py-1 rounded-full ${theme === 'dark' ? 'bg-white/10 hover:bg-white/15' : 'bg-black/5 hover:bg-black/10'} cursor-pointer transition-colors`}>
                    <ShoppingBag size={14} className={language === 'ar' ? 'ml-1.5' : 'mr-1.5'} />
                    <span>{t('compareNow')}</span>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 p-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">{t('priceComparison')}</h4>
                    <p className="text-sm text-muted-foreground">
                      Compare prices across Amazon, Noon, Jumia, and Carrefour in real-time.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
              
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className={`flex items-center px-3 py-1 rounded-full ${theme === 'dark' ? 'bg-white/10 hover:bg-white/15' : 'bg-black/5 hover:bg-black/10'} cursor-pointer transition-colors`}>
                    <Bell size={14} className={language === 'ar' ? 'ml-1.5' : 'mr-1.5'} />
                    <span>{t('instantPriceAlerts')}</span>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 p-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">{t('getNotified')}</h4>
                    <p className="text-sm text-muted-foreground">
                      Set price alerts and get notified instantly when prices drop on your favorite products.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
              
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className={`flex items-center px-3 py-1 rounded-full ${theme === 'dark' ? 'bg-white/10 hover:bg-white/15' : 'bg-black/5 hover:bg-black/10'} cursor-pointer transition-colors`}>
                    <Zap size={14} className={language === 'ar' ? 'ml-1.5' : 'mr-1.5'} />
                    <span>{t('bestPrice')}</span>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 p-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">{t('bestDeals')}</h4>
                    <p className="text-sm text-muted-foreground">
                      We highlight the best deals and discounts from all major online retailers in one place.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
        </div>

        {/* Trusted Stores */}
        <div className="mt-12 md:mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent rounded-3xl -z-10"></div>
          <p className="text-sm text-center font-medium uppercase tracking-wider text-muted-foreground mb-6">{t('topStores')}</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 rounded-lg blur-sm transition-opacity duration-300"></div>
              <div className="w-24 h-16 bg-card border border-border rounded-lg flex items-center justify-center shadow-sm relative transition-transform duration-300 group-hover:scale-105 group-hover:shadow-md">
                <span className="font-bold text-primary">Amazon</span>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 opacity-0 group-hover:opacity-100 rounded-lg blur-sm transition-opacity duration-300"></div>
              <div className="w-24 h-16 bg-card border border-border rounded-lg flex items-center justify-center shadow-sm relative transition-transform duration-300 group-hover:scale-105 group-hover:shadow-md">
                <span className="font-bold text-primary">Noon</span>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 rounded-lg blur-sm transition-opacity duration-300"></div>
              <div className="w-24 h-16 bg-card border border-border rounded-lg flex items-center justify-center shadow-sm relative transition-transform duration-300 group-hover:scale-105 group-hover:shadow-md">
                <span className="font-bold text-primary">Jumia</span>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 rounded-lg blur-sm transition-opacity duration-300"></div>
              <div className="w-24 h-16 bg-card border border-border rounded-lg flex items-center justify-center shadow-sm relative transition-transform duration-300 group-hover:scale-105 group-hover:shadow-md">
                <span className="font-bold text-primary">Carrefour</span>
              </div>
            </div>
          </div>
        </div>

        {/* View All Categories Button */}
        <div className="mt-12 text-center">
          <a 
            href="/categories" 
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors relative group"
          >
            <span className="relative z-10">
              {t('viewAll')}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </span>
            <Arrow size={16} className={`transition-transform ${language === 'ar' ? 'mr-1 group-hover:-translate-x-1' : 'ml-1 group-hover:translate-x-1'}`} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
