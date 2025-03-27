
import { useLanguage } from '@/hooks/useLanguage';
import { Store } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

const PopularStores = () => {
  const { language, theme } = useLanguage();
  
  const storeLogos = [
    { id: 'amazon', name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { id: 'noon', name: 'Noon', logo: 'https://e7.pngegg.com/pngimages/652/245/png-clipart-noon-hd-logo-thumbnail.png' },
    { id: 'jarir', name: 'Jarir', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e6/Jarir_Bookstore_logo.svg/1200px-Jarir_Bookstore_logo.svg.png' },
    { id: 'extra', name: 'Extra', logo: 'https://upload.wikimedia.org/wikipedia/en/c/cf/United_Electronics_Company_%28eXtra%29_logo.png' },
    { id: 'lulu', name: 'Lulu', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Lulu_Group_Logo.svg/1200px-Lulu_Group_Logo.svg.png' },
    { id: 'namshi', name: 'Namshi', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Namshi_logo.svg/2560px-Namshi_logo.svg.png' },
    { id: 'jumia', name: 'Jumia', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Jumia.png' },
    { id: 'carrefour', name: 'Carrefour', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Carrefour_logo.svg/2560px-Carrefour_logo.svg.png' },
    { id: 'saco', name: 'SACO', logo: 'https://www.saco-ksa.com/skin/frontend/saco/default/images/saco-logo.png' },
    { id: 'ikea', name: 'IKEA', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ikea_logo.svg/2560px-Ikea_logo.svg.png' }
  ];

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Store className="text-primary" size={24} />
            <h2 className="text-2xl md:text-3xl font-bold">
              {language === 'en' ? 'We Compare Prices From' : 'نقارن الأسعار من'}
            </h2>
          </div>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {storeLogos.map((store) => (
              <CarouselItem key={store.id} className="basis-1/3 md:basis-1/5 lg:basis-1/6">
                <div className="p-1">
                  <div className={`h-24 flex items-center justify-center rounded-lg p-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow`}>
                    <img 
                      src={store.logo} 
                      alt={store.name} 
                      className={`max-h-12 max-w-full object-contain ${theme === 'dark' ? 'brightness-0 invert' : ''}`} 
                    />
                  </div>
                </div>
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

export default PopularStores;
