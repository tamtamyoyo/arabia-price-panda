
import { useLanguage } from '@/hooks/useLanguage';
import { Sparkles } from 'lucide-react';
import ProductCard from './ProductCard';

const RecommendedProducts = () => {
  const { language, t, theme } = useLanguage();

  // Recommended products data - in production, this would come from an API
  const recommendedProducts = [
    {
      id: '10',
      title: 'Nintendo Switch OLED',
      image: 'https://m.media-amazon.com/images/I/51yJ+OqktYL._AC_SX679_.jpg',
      currentPrice: 1499,
      originalPrice: 1699,
      discount: 12,
      bestDeal: true,
      stores: [
        { name: 'Amazon', price: 1499 },
        { name: 'Noon', price: 1550 }
      ]
    },
    {
      id: '11',
      title: 'Dell XPS 13',
      image: 'https://m.media-amazon.com/images/I/71w-TovowjL._AC_SX679_.jpg',
      currentPrice: 4999,
      originalPrice: 5499,
      discount: 9,
      bestDeal: false,
      stores: [
        { name: 'Amazon', price: 4999 },
        { name: 'Noon', price: 5200 }
      ]
    },
    {
      id: '12',
      title: 'Dyson V15 Absolute',
      image: 'https://m.media-amazon.com/images/I/61UhpfLx0kL._AC_SX679_.jpg',
      currentPrice: 2699,
      originalPrice: 2999,
      discount: 10,
      bestDeal: false,
      stores: [
        { name: 'Amazon', price: 2699 },
        { name: 'Noon', price: 2799 }
      ]
    },
    {
      id: '13',
      title: 'Samsung 55" OLED TV',
      image: 'https://m.media-amazon.com/images/I/81U9ZrTdJuL._AC_SX679_.jpg',
      currentPrice: 4499,
      originalPrice: 4999,
      discount: 10,
      bestDeal: true,
      stores: [
        { name: 'Amazon', price: 4499 },
        { name: 'Noon', price: 4699 }
      ]
    }
  ];

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <Sparkles className="text-amber-500" size={24} />
          <h2 className="text-2xl md:text-3xl font-bold">
            {language === 'en' ? 'Recommended For You' : 'موصى به لك'}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendedProducts.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedProducts;
