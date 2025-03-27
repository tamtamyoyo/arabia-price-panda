
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Smartphone, CheckCircle } from 'lucide-react';

const AppDownload = () => {
  const { language, theme } = useLanguage();

  const features = [
    language === 'en' ? 'Scan barcodes to compare prices instantly' : 'مسح الباركود لمقارنة الأسعار على الفور',
    language === 'en' ? 'Get notified about price drops on the go' : 'احصل على إشعارات بانخفاض الأسعار أثناء التنقل',
    language === 'en' ? 'Save your favorite products to watch' : 'احفظ منتجاتك المفضلة للمتابعة',
    language === 'en' ? 'Share deals with friends & family' : 'شارك العروض مع الأصدقاء والعائلة'
  ];

  return (
    <section className={`py-16 px-4 ${theme === 'dark' ? 'bg-gray-900/50' : 'bg-gradient-to-r from-blue-50 to-purple-50'} rounded-3xl my-8`}>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-lg opacity-30 animate-pulse"></div>
              <img 
                src="/lovable-uploads/7c00be5c-6b89-4791-b61a-64220f1b5b53.png" 
                alt="Mobile App" 
                className="relative rounded-3xl shadow-xl max-w-[300px] z-10" 
              />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 space-y-6 lg:order-1">
            <div className="inline-flex p-2 rounded-full bg-primary/10 text-primary mb-4">
              <Smartphone size={24} />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold">
              {language === 'en' 
                ? 'Take Price Comparison With You Everywhere' 
                : 'خذ مقارنة الأسعار معك في كل مكان'
              }
            </h2>
            
            <p className="text-lg text-muted-foreground">
              {language === 'en'
                ? 'Download our mobile app to compare prices while shopping in-store and never miss a deal'
                : 'قم بتنزيل تطبيقنا للجوال لمقارنة الأسعار أثناء التسوق في المتجر ولا تفوت أي صفقة'
              }
            </p>
            
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={18} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="h-14 px-6">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" 
                  alt="Get it on Google Play" 
                  className="h-10" 
                />
              </Button>
              <Button className="h-14 px-6">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" 
                  alt="Download on the App Store" 
                  className="h-10" 
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
