
import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { MailCheck, BellRing, BadgePercent, Tag } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Newsletter = () => {
  const { language, theme } = useLanguage();
  const { toast } = useToast();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: language === 'en' ? 'Subscription successful!' : 'تم الاشتراك بنجاح!',
        description: language === 'en' 
          ? 'You will now receive the best deals directly to your inbox' 
          : 'ستتلقى الآن أفضل العروض مباشرة في صندوق البريد الخاص بك',
        variant: 'default',
      });
      setEmail('');
    }, 500);
  };

  const subscriptionOptions = [
    {
      id: 'newsletter',
      icon: <MailCheck size={20} />,
      title: language === 'en' ? 'Newsletter' : 'النشرة الإخبارية',
      description: language === 'en' 
        ? 'Weekly updates with the best deals' 
        : 'تحديثات أسبوعية بأفضل العروض'
    },
    {
      id: 'alerts',
      icon: <BellRing size={20} />,
      title: language === 'en' ? 'Price Alerts' : 'تنبيهات الأسعار',
      description: language === 'en'
        ? 'Get notified when prices drop'
        : 'تلقي إشعارات عند انخفاض الأسعار'
    },
    {
      id: 'deals',
      icon: <BadgePercent size={20} />,
      title: language === 'en' ? 'Flash Deals' : 'عروض سريعة',
      description: language === 'en'
        ? 'Instant alerts for limited-time deals'
        : 'تنبيهات فورية للعروض المحدودة زمنياً'
    }
  ];

  return (
    <section className={`py-16 ${theme === 'dark' ? 'bg-gradient-to-r from-purple-900/20 to-blue-900/20' : 'bg-gradient-to-r from-blue-50 to-indigo-50'} rounded-3xl my-8`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex p-3 rounded-full bg-primary/10 text-primary mb-4">
              <Tag size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'en' 
                ? 'Never Miss the Best Deals' 
                : 'لا تفوت أفضل العروض أبداً'
              }
            </h2>
            <p className="text-lg text-muted-foreground">
              {language === 'en'
                ? 'Subscribe to our newsletter and get personalized deal alerts directly to your inbox.'
                : 'اشترك في نشرتنا الإخبارية واحصل على تنبيهات مخصصة للصفقات مباشرة إلى بريدك الإلكتروني.'
              }
            </p>
          </div>
          
          <div className={`rounded-xl p-6 ${theme === 'dark' ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur-sm shadow-lg`}>
            <Tabs defaultValue="newsletter" className="w-full">
              <TabsList className="grid grid-cols-3 mb-6">
                {subscriptionOptions.map(option => (
                  <TabsTrigger key={option.id} value={option.id} className="flex items-center gap-2">
                    {option.icon}
                    <span className="hidden sm:inline">{option.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {subscriptionOptions.map(option => (
                <TabsContent key={option.id} value={option.id}>
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                    <p className="text-muted-foreground">{option.description}</p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                    <Input
                      type="email"
                      placeholder={language === 'en' ? 'Enter your email' : 'أدخل بريدك الإلكتروني'}
                      className="flex-grow"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button type="submit" size="lg">
                      {language === 'en' ? 'Subscribe' : 'اشترك'}
                    </Button>
                  </form>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
