
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ArrowLeft, Zap } from 'lucide-react';
import ProductCard from './ProductCard';

const DealsSection = () => {
  const { t, language } = useLanguage();
  const Arrow = language === 'ar' ? ArrowLeft : ArrowRight;

  // Mock deals data - in production, this would come from an API
  const todayDeals = [
    {
      id: '5',
      title: 'Samsung Galaxy Buds2 Pro',
      image: 'https://m.media-amazon.com/images/I/51m4LnFz84L._AC_SX679_.jpg',
      currentPrice: 599,
      originalPrice: 799,
      discount: 25,
      bestDeal: true,
      stores: [
        { name: 'Amazon', price: 599 },
        { name: 'Noon', price: 649 }
      ]
    },
    {
      id: '6',
      title: 'Apple Watch Series 9',
      image: 'https://m.media-amazon.com/images/I/71Us6kR3ZhL._AC_SX679_.jpg',
      currentPrice: 1499,
      originalPrice: 1699,
      discount: 12,
      bestDeal: false,
      stores: [
        { name: 'Amazon', price: 1499 },
        { name: 'Noon', price: 1599 }
      ]
    }
  ];

  const weekDeals = [
    {
      id: '7',
      title: 'LG 55-Inch OLED TV',
      image: 'https://m.media-amazon.com/images/I/71Zs+9PEPEL._AC_SX679_.jpg',
      currentPrice: 2999,
      originalPrice: 3499,
      discount: 14,
      bestDeal: true,
      stores: [
        { name: 'Amazon', price: 2999 },
        { name: 'Noon', price: 3199 }
      ]
    },
    {
      id: '8',
      title: 'Sony PlayStation 5',
      image: 'https://m.media-amazon.com/images/I/51QKwnj+HXL._AC_SX679_.jpg',
      currentPrice: 1899,
      originalPrice: 2099,
      discount: 10,
      bestDeal: false,
      stores: [
        { name: 'Amazon', price: 1899 },
        { name: 'Noon', price: 1999 }
      ]
    }
  ];

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Zap className="text-yellow-500" size={24} />
            <h2 className="text-2xl md:text-3xl font-bold">{t('hotDeals')}</h2>
          </div>
          <a href="/deals" className="text-primary hover:text-primary/80 font-medium transition-colors inline-flex items-center gap-1">
            {t('viewAll')}
            <Arrow size={16} />
          </a>
        </div>

        <Tabs defaultValue="today" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="today">
              {language === 'en' ? "Today's Deals" : 'عروض اليوم'}
            </TabsTrigger>
            <TabsTrigger value="week">
              {language === 'en' ? 'This Week' : 'عروض الأسبوع'}
            </TabsTrigger>
          </TabsList>
          <TabsContent value="today">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {todayDeals.map(deal => (
                <ProductCard key={deal.id} {...deal} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="week">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {weekDeals.map(deal => (
                <ProductCard key={deal.id} {...deal} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default DealsSection;
