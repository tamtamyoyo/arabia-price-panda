
import { useLanguage } from '@/hooks/useLanguage';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star, Heart } from 'lucide-react';
import ProductCard from './ProductCard';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

const PopularProducts = () => {
  const { language, t, theme } = useLanguage();

  // Popular products data - in production, this would come from an API
  const popularProducts = [
    {
      id: '1',
      title: 'Apple iPhone 15 Pro',
      image: 'https://m.media-amazon.com/images/I/61oWUdwLmLL._AC_SX679_.jpg',
      currentPrice: 4199,
      originalPrice: 4799,
      discount: 12,
      bestDeal: true,
      stores: [
        { name: 'Amazon', price: 4199 },
        { name: 'Noon', price: 4299 }
      ]
    },
    {
      id: '2',
      title: 'Samsung Galaxy S24 Ultra',
      image: 'https://m.media-amazon.com/images/I/71CXhVqRFNL._AC_SX679_.jpg',
      currentPrice: 4999,
      originalPrice: 5299,
      discount: 6,
      bestDeal: false,
      stores: [
        { name: 'Amazon', price: 4999 },
        { name: 'Noon', price: 5099 }
      ]
    },
    {
      id: '3',
      title: 'MacBook Air M2',
      image: 'https://m.media-amazon.com/images/I/71f5Eu5lJSL._AC_SX679_.jpg',
      currentPrice: 3999,
      originalPrice: 4399,
      discount: 9,
      bestDeal: false,
      stores: [
        { name: 'Amazon', price: 3999 },
        { name: 'Noon', price: 4150 }
      ]
    },
    {
      id: '4',
      title: 'Sony WH-1000XM5',
      image: 'https://m.media-amazon.com/images/I/61+btxzpfDL._AC_SX679_.jpg',
      currentPrice: 1299,
      originalPrice: 1599,
      discount: 19,
      bestDeal: true,
      stores: [
        { name: 'Amazon', price: 1299 },
        { name: 'Noon', price: 1399 }
      ]
    },
    {
      id: '9',
      title: 'iPad Air 5th Gen',
      image: 'https://m.media-amazon.com/images/I/71VbHaAqbML._AC_SX679_.jpg',
      currentPrice: 2199,
      originalPrice: 2499,
      discount: 12,
      bestDeal: false,
      stores: [
        { name: 'Amazon', price: 2199 },
        { name: 'Noon', price: 2299 }
      ]
    }
  ];

  return (
    <section className={`py-12 px-4 ${theme === 'dark' ? 'bg-gray-900/30' : 'bg-blue-50/20'}`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <ShoppingCart className="text-primary" size={24} />
            <h2 className="text-2xl md:text-3xl font-bold">
              {language === 'en' ? 'Popular Products' : 'المنتجات الشائعة'}
            </h2>
          </div>
          <a href="/products/popular" className="text-primary hover:text-primary/80 font-medium transition-colors inline-flex items-center gap-1">
            {t('viewAll')}
            {language === 'ar' ? <Star size={16} /> : <Star size={16} />}
          </a>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {popularProducts.map((product) => (
              <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <ProductCard {...product} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6">
            <CarouselPrevious className="relative static translate-y-0 mx-2" />
            <CarouselNext className="relative static translate-y-0 mx-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default PopularProducts;
