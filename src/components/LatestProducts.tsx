import { useLanguage } from '@/hooks/useLanguage';
import { Clock } from 'lucide-react';
import ProductCard from './ProductCard';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

const LatestProducts = () => {
  const { language, t, theme } = useLanguage();

  // Latest products data - in production, this would come from an API
  const latestProducts = [
    {
      id: '20',
      title: 'Xbox Series X',
      image: 'https://m.media-amazon.com/images/I/61-jjE67uiL._AC_SX679_.jpg',
      currentPrice: 1999,
      originalPrice: 2199,
      discount: 9,
      bestDeal: true,
      stores: [
        { name: 'Amazon', price: 1999 },
        { name: 'Noon', price: 2050 }
      ]
    },
    {
      id: '21',
      title: 'Canon EOS R5',
      image: 'https://m.media-amazon.com/images/I/71hWiD0C5tL._AC_SX679_.jpg',
      currentPrice: 13999,
      originalPrice: 14999,
      discount: 7,
      bestDeal: false,
      stores: [
        { name: 'Amazon', price: 13999 },
        { name: 'Noon', price: 14299 }
      ]
    },
    {
      id: '22',
      title: 'Bose QuietComfort Earbuds II',
      image: 'https://m.media-amazon.com/images/I/51wpaEV1X5L._AC_SX679_.jpg',
      currentPrice: 999,
      originalPrice: 1199,
      discount: 17,
      bestDeal: true,
      stores: [
        { name: 'Amazon', price: 999 },
        { name: 'Noon', price: 1050 }
      ]
    },
    {
      id: '23',
      title: 'Logitech MX Master 3S',
      image: 'https://m.media-amazon.com/images/I/61ni3t1ryQL._AC_SX679_.jpg',
      currentPrice: 379,
      originalPrice: 429,
      discount: 12,
      bestDeal: false,
      stores: [
        { name: 'Amazon', price: 379 },
        { name: 'Noon', price: 399 }
      ]
    }
  ];

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <Clock className="text-green-600" size={24} />
          <h2 className="text-2xl md:text-3xl font-bold">
            {language === 'en' ? 'Just Arrived' : 'وصل حديثاً'}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestProducts.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;
