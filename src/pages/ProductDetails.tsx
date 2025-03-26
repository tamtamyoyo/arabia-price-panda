
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ComparisonTable from '@/components/ComparisonTable';
import { Heart, Share2, Star, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Mock data for development
const mockProduct = {
  id: '1',
  title: 'Apple iPhone 14 Pro Max, 256GB, Deep Purple',
  images: [
    'https://m.media-amazon.com/images/I/61nzPMNY8zL._AC_SX679_.jpg',
    'https://m.media-amazon.com/images/I/71yzJoE7WlL._AC_SX679_.jpg',
    'https://m.media-amazon.com/images/I/7160iErUnlL._AC_SX679_.jpg',
  ],
  description: 'A magical new way to interact with iPhone. A vital safety feature designed to save lives. An innovative 48MP camera for mind-blowing detail. All powered by the ultimate smartphone chip.',
  rating: 4.8,
  reviewCount: 3654,
  specifications: [
    { name: 'Display', value: '6.7-inch Super Retina XDR display' },
    { name: 'Processor', value: 'A16 Bionic chip' },
    { name: 'Storage', value: '256GB' },
    { name: 'Camera', value: '48MP main, 12MP ultra wide, 12MP telephoto' },
    { name: 'Battery', value: 'Up to 29 hours video playback' },
    { name: 'OS', value: 'iOS 16' },
  ],
  stores: [
    { 
      id: 'amazon',
      name: 'Amazon', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png',
      price: 4399,
      shipping: 0,
      inStock: true,
      affiliateLink: 'https://amazon.ae/product/1' 
    },
    { 
      id: 'noon',
      name: 'Noon', 
      logo: 'https://1000logos.net/wp-content/uploads/2020/07/Noon-Logo.png',
      price: 4499,
      shipping: 0,
      inStock: true,
      affiliateLink: 'https://noon.com/product/1' 
    },
    { 
      id: 'jumia',
      name: 'Jumia', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Jumia_logo.png',
      price: 4599,
      shipping: 25,
      inStock: true,
      affiliateLink: 'https://jumia.ae/product/1' 
    },
    { 
      id: 'carrefour',
      name: 'Carrefour', 
      logo: 'https://logos-world.net/wp-content/uploads/2020/11/Carrefour-Logo.png',
      price: 4649,
      shipping: 0,
      inStock: false,
      affiliateLink: 'https://carrefouruae.com/product/1' 
    },
  ]
};

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { t, language } = useLanguage();
  const [activeImage, setActiveImage] = useState(0);
  const Arrow = language === 'ar' ? ArrowLeft : ArrowRight;

  // Format price with proper currency (AED for UAE)
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(language === 'en' ? 'en-AE' : 'ar-AE', {
      style: 'currency',
      currency: 'AED',
    }).format(price);
  };

  // Get the lowest price store
  const lowestPriceStore = [...mockProduct.stores].sort((a, b) => (a.price + a.shipping) - (b.price + b.shipping))[0];

  return (
    <div className={`min-h-screen flex flex-col ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <Header />
      
      <main className="flex-grow pt-20 px-4">
        <div className="container mx-auto py-8">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <nav className="text-sm">
              <ol className="flex items-center flex-wrap">
                <li>
                  <a href="/" className="text-muted-foreground hover:text-primary transition-colors">
                    {t('home')}
                  </a>
                </li>
                <li className="mx-2 text-muted-foreground">
                  <span>/</span>
                </li>
                <li>
                  <a href="/category/electronics" className="text-muted-foreground hover:text-primary transition-colors">
                    {t('electronics')}
                  </a>
                </li>
                <li className="mx-2 text-muted-foreground">
                  <span>/</span>
                </li>
                <li>
                  <span className="text-foreground">
                    {mockProduct.title}
                  </span>
                </li>
              </ol>
            </nav>
          </div>

          {/* Product Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Product Images */}
            <div className="glass rounded-xl p-6 overflow-hidden">
              <div className="relative aspect-square bg-white rounded-lg mb-4 overflow-hidden">
                <img 
                  src={mockProduct.images[activeImage]} 
                  alt={mockProduct.title}
                  className="w-full h-full object-contain animate-fade-in"
                />

                {/* Image Navigation Arrows */}
                <button 
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors disabled:opacity-50"
                  onClick={() => setActiveImage(prev => prev > 0 ? prev - 1 : mockProduct.images.length - 1)}
                >
                  <ArrowLeft size={20} />
                </button>
                <button 
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors disabled:opacity-50"
                  onClick={() => setActiveImage(prev => prev < mockProduct.images.length - 1 ? prev + 1 : 0)}
                >
                  <ArrowRight size={20} />
                </button>
              </div>

              {/* Thumbnail Images */}
              <div className="flex justify-center gap-3">
                {mockProduct.images.map((image, index) => (
                  <button 
                    key={index} 
                    className={`w-16 h-16 border-2 rounded-md overflow-hidden bg-white ${
                      activeImage === index ? 'border-primary' : 'border-transparent'
                    }`}
                    onClick={() => setActiveImage(index)}
                  >
                    <img 
                      src={image} 
                      alt={`Product thumbnail ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-4">
                {mockProduct.title}
              </h1>

              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <span className="ml-1 font-medium">{mockProduct.rating}</span>
                </div>
                <span className="mx-2 text-muted-foreground">|</span>
                <span className="text-muted-foreground">
                  {mockProduct.reviewCount} {language === 'en' ? 'reviews' : 'تقييمات'}
                </span>
              </div>

              {/* Best Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-xl md:text-2xl font-bold text-primary">
                    {formatPrice(lowestPriceStore.price)}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {language === 'en' ? 'at ' : 'في '}
                    <span className="font-medium">{lowestPriceStore.name}</span>
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {language === 'en' 
                    ? 'Prices updated 6 hours ago' 
                    : 'تم تحديث الأسعار قبل 6 ساعات'
                  }
                </p>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h2 className="text-lg font-medium mb-2">
                  {language === 'en' ? 'Description' : 'الوصف'}
                </h2>
                <p className="text-muted-foreground">
                  {mockProduct.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mb-8">
                <a 
                  href={lowestPriceStore.affiliateLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button className="w-full">
                    {t('buyNow')}
                    <Arrow size={16} className="ml-1" />
                  </Button>
                </a>
                <Button variant="outline" size="icon">
                  <Heart size={18} />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 size={18} />
                </Button>
              </div>

              {/* Key Specifications */}
              <div>
                <h2 className="text-lg font-medium mb-3">
                  {language === 'en' ? 'Key Specifications' : 'المواصفات الرئيسية'}
                </h2>
                <ul className="space-y-2">
                  {mockProduct.specifications.slice(0, 4).map((spec, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-1/3 text-sm text-muted-foreground">
                        {spec.name}:
                      </span>
                      <span className="w-2/3 text-sm font-medium">
                        {spec.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Price Comparison */}
          <section className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold mb-6">
              {t('priceComparison')}
            </h2>
            <ComparisonTable stores={mockProduct.stores} />
          </section>

          {/* Specifications */}
          <section className="glass rounded-xl p-6 mb-12">
            <h2 className="text-xl md:text-2xl font-bold mb-6">
              {t('specifications')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {mockProduct.specifications.map((spec, index) => (
                <div key={index} className="py-3 border-b border-border">
                  <div className="flex items-start">
                    <span className="w-1/3 text-muted-foreground">
                      {spec.name}:
                    </span>
                    <span className="w-2/3 font-medium">
                      {spec.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetails;
