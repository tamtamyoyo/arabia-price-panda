
import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { MailCheck } from 'lucide-react';

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

  return (
    <section className={`py-16 ${theme === 'dark' ? 'bg-gradient-to-r from-purple-900/20 to-blue-900/20' : 'bg-gradient-to-r from-blue-50 to-indigo-50'} rounded-3xl my-8`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex p-3 rounded-full bg-primary/10 text-primary mb-4">
            <MailCheck size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'en' 
              ? 'Never Miss the Best Deals' 
              : 'لا تفوت أفضل العروض أبداً'
            }
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {language === 'en'
              ? 'Subscribe to our newsletter and get personalized deal alerts directly to your inbox.'
              : 'اشترك في نشرتنا الإخبارية واحصل على تنبيهات مخصصة للصفقات مباشرة إلى بريدك الإلكتروني.'
            }
          </p>
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
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
