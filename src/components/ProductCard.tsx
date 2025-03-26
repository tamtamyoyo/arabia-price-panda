
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  id: string;
  title: string;
  image: string;
  currentPrice: number;
  originalPrice?: number;
  discount?: number;
  bestDeal?: boolean;
  stores: {
    name: string;
    price: number;
  }[];
}

const ProductCard = ({
  id,
  title,
  image,
  currentPrice,
  originalPrice,
  discount,
  bestDeal = false,
  stores,
}: ProductCardProps) => {
  const { t, language } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  // Format price with proper currency (AED for UAE)
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(language === 'en' ? 'en-AE' : 'ar-AE', {
      style: 'currency',
      currency: 'AED',
    }).format(price);
  };

  return (
    <div 
      className="glass rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Best Deal Badge */}
      {bestDeal && (
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-full">
            Best Deal
          </span>
        </div>
      )}

      {/* Wishlist Button */}
      <button 
        className="absolute top-3 right-3 z-10 p-1.5 bg-white/80 backdrop-blur-sm rounded-full text-muted-foreground hover:text-primary transition-colors"
        aria-label="Add to wishlist"
      >
        <Heart size={18} />
      </button>

      {/* Product Image */}
      <Link to={`/product/${id}`} className="block relative pt-[100%] bg-white">
        <img 
          src={image} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-contain p-6 transition-transform duration-500 ease-out transform-gpu"
          style={{
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          }}
        />
      </Link>

      {/* Product Details */}
      <div className="p-4 flex flex-col flex-grow">
        <Link to={`/product/${id}`} className="block">
          <h3 className="font-medium text-balance line-clamp-2 mb-2 hover:text-primary transition-colors">
            {title}
          </h3>
        </Link>

        {/* Price */}
        <div className="mb-3">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-primary">{formatPrice(currentPrice)}</span>
            {originalPrice && originalPrice > currentPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(originalPrice)}
              </span>
            )}
          </div>
          {discount && (
            <span className="text-sm text-green-600 font-medium">
              {discount}% off
            </span>
          )}
        </div>

        {/* Available Stores */}
        <div className="mb-4 mt-auto">
          <p className="text-sm text-muted-foreground mb-1">{t('availableAt')}:</p>
          <div className="flex flex-wrap gap-2">
            {stores.map((store, index) => (
              <span key={index} className="text-xs bg-secondary px-2 py-1 rounded-full">
                {store.name}
              </span>
            ))}
          </div>
        </div>

        {/* Button */}
        <Link to={`/product/${id}`} className="mt-auto">
          <Button variant="outline" className="w-full group">
            <ShoppingCart size={16} className="mr-2 group-hover:text-primary" />
            {t('compare')}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
