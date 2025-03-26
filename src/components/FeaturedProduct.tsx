
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star, Clock } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface FeaturedProductProps {
  id: string;
  title: string;
  titleAr: string;
  image: string;
  price: number;
  rating: number;
  discount?: number;
  timeLeft?: string;
}

const FeaturedProduct = () => {
  const { language, theme } = useLanguage();
  
  const product: FeaturedProductProps = {
    id: 'featured-1',
    title: 'PlayStation 5 Digital Edition',
    titleAr: 'بلايستيشن 5 - النسخة الرقمية',
    image: 'https://m.media-amazon.com/images/I/51QKwnj+HXL._AC_SX679_.jpg',
    price: 1999,
    rating: 4.8,
    discount: 15,
    timeLeft: '2d 14h',
  };

  return (
    <section className={`py-12 ${theme === 'dark' ? 'bg-gray-900/50' : 'bg-blue-50/50'} rounded-2xl my-8`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="w-full lg:w-1/2">
            <AspectRatio ratio={1} className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-8 shadow-xl">
              <img 
                src={product.image} 
                alt={language === 'en' ? product.title : product.titleAr}
                className="w-full h-full object-contain mix-blend-multiply animate-float" 
              />
            </AspectRatio>
          </div>
          
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="destructive" className="animate-pulse">
                  {language === 'en' ? 'Featured Deal' : 'صفقة مميزة'}
                </Badge>
                {product.discount && (
                  <Badge variant="outline" className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                    {product.discount}% {language === 'en' ? 'OFF' : 'خصم'}
                  </Badge>
                )}
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                {language === 'en' ? product.title : product.titleAr}
              </h2>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center text-yellow-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} size={18} />
                  ))}
                  <span className="ml-2">{product.rating}</span>
                </div>
                
                {product.timeLeft && (
                  <div className="flex items-center text-rose-500 dark:text-rose-400">
                    <Clock size={16} className="mr-1" />
                    <span className="text-sm font-medium">
                      {language === 'en' ? `Ends in ${product.timeLeft}` : `ينتهي في ${product.timeLeft}`}
                    </span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="text-4xl font-bold text-primary">
              {new Intl.NumberFormat(language === 'en' ? 'en-US' : 'ar-SA', { 
                style: 'currency', 
                currency: 'SAR',
                maximumFractionDigits: 0
              }).format(product.price)}
              
              {product.discount && (
                <span className="ml-3 text-lg text-muted-foreground line-through">
                  {new Intl.NumberFormat(language === 'en' ? 'en-US' : 'ar-SA', { 
                    style: 'currency', 
                    currency: 'SAR',
                    maximumFractionDigits: 0
                  }).format(product.price * (1 + product.discount/100))}
                </span>
              )}
            </div>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              {language === 'en' 
                ? 'Experience lightning-fast loading with an ultra-high-speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio.'
                : 'استمتع بتحميل سريع كالبرق مع قرص SSD فائق السرعة، وانغماس أعمق مع دعم التغذية الاهتزازية، والمشغلات التكيفية، والصوت ثلاثي الأبعاد.'
              }
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-lg">
                {language === 'en' ? 'Buy Now' : 'اشتر الآن'}
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                {language === 'en' ? 'Compare Prices' : 'قارن الأسعار'}
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
