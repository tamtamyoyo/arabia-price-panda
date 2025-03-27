
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

const Testimonials = () => {
  const { language, theme } = useLanguage();
  
  const testimonials = [
    {
      id: 1,
      name: language === 'en' ? 'Ahmed Ali' : 'أحمد علي',
      avatar: 'A',
      role: language === 'en' ? 'Tech Enthusiast' : 'مهتم بالتكنولوجيا',
      content: language === 'en' 
        ? 'This price comparison tool saved me over 1,500 SAR on my new laptop purchase. I never knew there could be such price differences between stores!'
        : 'وفرت لي أداة مقارنة الأسعار هذه أكثر من 1500 ريال عند شراء اللابتوب الجديد. لم أكن أعلم أنه يمكن أن تكون هناك فروق كبيرة في الأسعار بين المتاجر!',
      rating: 5
    },
    {
      id: 2,
      name: language === 'en' ? 'Fatima Ahmed' : 'فاطمة أحمد',
      avatar: 'F',
      role: language === 'en' ? 'Regular Shopper' : 'متسوقة دائمة',
      content: language === 'en'
        ? 'The price history feature is amazing! I waited for a month based on the price trend and got my iPhone for 20% less than the usual price.'
        : 'ميزة سجل الأسعار رائعة! انتظرت شهرًا بناءً على اتجاه الأسعار وحصلت على جهاز iPhone بسعر أقل بنسبة 20٪ من السعر المعتاد.',
      rating: 5
    },
    {
      id: 3,
      name: language === 'en' ? 'Mohammed Khalid' : 'محمد خالد',
      avatar: 'M',
      role: language === 'en' ? 'Gadget Collector' : 'هاوي الأجهزة',
      content: language === 'en'
        ? 'I love the price alert feature! Set it up for a gaming console and got notified within a week about a flash sale. Saved me a lot of time constantly checking prices.'
        : 'أحب ميزة تنبيه الأسعار! قمت بإعدادها لوحدة ألعاب وتم إخطاري في غضون أسبوع بعرض مفاجئ. وفرت لي الكثير من الوقت في التحقق المستمر من الأسعار.',
      rating: 4
    },
    {
      id: 4,
      name: language === 'en' ? 'Sara Abdullah' : 'سارة عبدالله',
      avatar: 'S',
      role: language === 'en' ? 'Smart Shopper' : 'متسوقة ذكية',
      content: language === 'en'
        ? 'The verified reviews helped me choose the right product. Other sites had mixed reviews, but here I could see genuine feedback from real buyers. Highly recommended!'
        : 'ساعدتني التقييمات المُتحقق منها في اختيار المنتج المناسب. كانت لدى المواقع الأخرى تقييمات مختلطة، ولكن هنا يمكنني رؤية ملاحظات حقيقية من المشترين الحقيقيين. أوصي بشدة!',
      rating: 5
    }
  ];

  return (
    <section className={`py-16 px-4 ${theme === 'dark' ? 'bg-gradient-to-b from-gray-900 to-gray-800' : 'bg-gradient-to-b from-blue-50 to-white'}`}>
      <div className="container mx-auto">
        <div className="mb-10 text-center">
          <div className="inline-flex p-2 rounded-full bg-primary/10 text-primary mb-4">
            <Quote size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'en' ? 'What Our Users Say' : 'ماذا يقول مستخدمونا'}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Join thousands of satisfied users who save money every day using our price comparison service'
              : 'انضم إلى آلاف المستخدمين الراضين الذين يوفرون المال كل يوم باستخدام خدمة مقارنة الأسعار لدينا'
            }
          </p>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                <Card className={`h-full ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          fill={i < testimonial.rating ? "currentColor" : "none"} 
                          className="text-yellow-500" 
                          size={16} 
                        />
                      ))}
                    </div>
                    <p className="mb-6 italic">{testimonial.content}</p>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6">
            <CarouselPrevious className="relative static translate-y-0 mx-2" />
            <CarouselNext className="relative static translate-y-0 mx-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
