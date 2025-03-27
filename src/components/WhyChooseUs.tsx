
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, TrendingUp, Search, Clock, Shield, BadgePercent } from 'lucide-react';

const WhyChooseUs = () => {
  const { language, theme } = useLanguage();

  const features = [
    {
      icon: <Search className="h-10 w-10 text-blue-500" />,
      title: language === 'en' ? 'Search Across All Stores' : 'البحث في جميع المتاجر',
      description: language === 'en' 
        ? 'Find products across multiple online stores in one search'
        : 'ابحث عن المنتجات في متاجر متعددة عبر الإنترنت من خلال بحث واحد'
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-green-500" />,
      title: language === 'en' ? 'Price History' : 'سجل الأسعار',
      description: language === 'en'
        ? 'View price trends to know when to buy at the best time'
        : 'مشاهدة اتجاهات الأسعار لمعرفة أفضل وقت للشراء'
    },
    {
      icon: <BadgePercent className="h-10 w-10 text-purple-500" />,
      title: language === 'en' ? 'Exclusive Deals' : 'عروض حصرية',
      description: language === 'en'
        ? 'Get access to exclusive deals and discount codes'
        : 'الحصول على عروض حصرية ورموز خصم'
    },
    {
      icon: <Clock className="h-10 w-10 text-amber-500" />,
      title: language === 'en' ? 'Price Alerts' : 'تنبيهات الأسعار',
      description: language === 'en'
        ? 'Set alerts and get notified when prices drop'
        : 'ضبط التنبيهات والحصول على إشعارات عند انخفاض الأسعار'
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-indigo-500" />,
      title: language === 'en' ? 'Verified Reviews' : 'تقييمات موثوقة',
      description: language === 'en'
        ? 'Read authentic reviews from verified buyers'
        : 'قراءة تقييمات حقيقية من مشترين حقيقيين'
    },
    {
      icon: <Shield className="h-10 w-10 text-red-500" />,
      title: language === 'en' ? 'Safe Shopping' : 'تسوق آمن',
      description: language === 'en'
        ? 'Shop with confidence with our verified store partners'
        : 'تسوق بثقة مع شركاء المتاجر المعتمدين لدينا'
    }
  ];

  return (
    <section className={`py-16 px-4 ${theme === 'dark' ? 'bg-gradient-to-r from-gray-900/70 to-gray-800/70' : 'bg-gradient-to-r from-blue-50 to-indigo-50'}`}>
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {language === 'en' ? 'Why Choose Us' : 'لماذا تختارنا'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className={`overflow-hidden border-none ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-shadow duration-300`}>
              <CardContent className="p-6">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
