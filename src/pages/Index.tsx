
import { useLanguage } from '@/hooks/useLanguage';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CategoryList from '@/components/CategoryList';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';

// Mock data for development
const mockProducts = [
  {
    id: '1',
    title: 'Apple iPhone 14 Pro Max, 256GB, Deep Purple',
    image: 'https://m.media-amazon.com/images/I/61nzPMNY8zL._AC_SX679_.jpg',
    currentPrice: 4399,
    originalPrice: 4999,
    discount: 12,
    bestDeal: true,
    stores: [
      { name: 'Amazon', price: 4399 },
      { name: 'Noon', price: 4499 },
      { name: 'Jumia', price: 4599 }
    ]
  },
  {
    id: '2',
    title: 'Samsung Galaxy S23 Ultra, 512GB, Phantom Black',
    image: 'https://m.media-amazon.com/images/I/71Sa3dqTqzL._AC_SX679_.jpg',
    currentPrice: 4199,
    originalPrice: 4599,
    discount: 9,
    bestDeal: false,
    stores: [
      { name: 'Amazon', price: 4199 },
      { name: 'Noon', price: 4299 }
    ]
  },
  {
    id: '3',
    title: 'Sony WH-1000XM5 Wireless Noise Cancelling Headphones',
    image: 'https://m.media-amazon.com/images/I/61+btxzpfDL._AC_SX679_.jpg',
    currentPrice: 1499,
    originalPrice: 1799,
    discount: 17,
    bestDeal: false,
    stores: [
      { name: 'Amazon', price: 1499 },
      { name: 'Noon', price: 1599 },
      { name: 'Jumia', price: 1699 }
    ]
  },
  {
    id: '4',
    title: 'Apple MacBook Pro 14-inch M3 Pro, 1TB SSD',
    image: 'https://m.media-amazon.com/images/I/61lsexTCOhL._AC_SX679_.jpg',
    currentPrice: 8999,
    originalPrice: 9499,
    discount: 5,
    bestDeal: false,
    stores: [
      { name: 'Amazon', price: 8999 },
      { name: 'Noon', price: 9199 }
    ]
  }
];

const Index = () => {
  const { t, language } = useLanguage();

  return (
    <div className={`min-h-screen flex flex-col ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <CategoryList />
        
        {/* Best Deals Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">{t('bestDeals')}</h2>
              <a href="/deals" className="text-primary hover:text-primary/80 font-medium transition-colors">
                {t('viewAll')}
              </a>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {mockProducts.map(product => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-12 px-4 bg-secondary/30">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
              {language === 'en' ? 'Why Choose PricePanda?' : 'لماذا تختار برايس باندا؟'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="glass p-6 rounded-xl text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="m20 6-8.5 8.5-4-4L3 15"></path>
                    <path d="M16 6h4v4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">
                  {language === 'en' ? 'Real-time Price Updates' : 'تحديثات الأسعار في الوقت الحقيقي'}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'en' 
                    ? 'We update prices every 6 hours to ensure you get the most accurate information.'
                    : 'نقوم بتحديث الأسعار كل 6 ساعات للتأكد من حصولك على أدق المعلومات.'
                  }
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="glass p-6 rounded-xl text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6.3"></path>
                    <path d="M16 2v4"></path>
                    <path d="M8 2v4"></path>
                    <path d="M3 10h18"></path>
                    <circle cx="18" cy="18" r="3"></circle>
                    <path d="m20.2 20.2-1.9-1.9"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">
                  {language === 'en' ? 'Price History & Alerts' : 'سجل الأسعار والتنبيهات'}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'en' 
                    ? 'View price trends and set alerts for when prices drop to your target.'
                    : 'اطلع على اتجاهات الأسعار وضع تنبيهات عندما تنخفض الأسعار إلى هدفك.'
                  }
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="glass p-6 rounded-xl text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                    <line x1="2" x2="22" y1="10" y2="10"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">
                  {language === 'en' ? 'Exclusive Deals & Coupons' : 'صفقات وكوبونات حصرية'}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'en' 
                    ? 'Get access to exclusive deals and promo codes for additional savings.'
                    : 'احصل على صفقات حصرية ورموز ترويجية لتوفير إضافي.'
                  }
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
