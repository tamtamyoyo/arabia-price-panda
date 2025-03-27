
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Store } from 'lucide-react';

const StoresSection = () => {
  const { language, theme } = useLanguage();
  
  const stores = [
    { 
      id: 'amazon', 
      name: 'Amazon', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg', 
      products: 12564,
      offers: 487,
      rating: 4.8
    },
    { 
      id: 'noon', 
      name: 'Noon', 
      logo: 'https://e7.pngegg.com/pngimages/652/245/png-clipart-noon-hd-logo-thumbnail.png', 
      products: 10872,
      offers: 412,
      rating: 4.6
    },
    { 
      id: 'jarir', 
      name: 'Jarir', 
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e6/Jarir_Bookstore_logo.svg/1200px-Jarir_Bookstore_logo.svg.png', 
      products: 9231,
      offers: 328,
      rating: 4.7
    },
    { 
      id: 'extra', 
      name: 'Extra', 
      logo: 'https://upload.wikimedia.org/wikipedia/en/c/cf/United_Electronics_Company_%28eXtra%29_logo.png', 
      products: 8765,
      offers: 296,
      rating: 4.5
    },
    { 
      id: 'lulu', 
      name: 'Lulu', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Lulu_Group_Logo.svg/1200px-Lulu_Group_Logo.svg.png', 
      products: 7432,
      offers: 256,
      rating: 4.4
    },
    { 
      id: 'namshi', 
      name: 'Namshi', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Namshi_logo.svg/2560px-Namshi_logo.svg.png', 
      products: 6985,
      offers: 276,
      rating: 4.3
    }
  ];

  return (
    <section className={`py-12 px-4 ${theme === 'dark' ? 'bg-gray-900/50' : 'bg-blue-50'}`}>
      <div className="container mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <Store className="text-primary" size={24} />
          <h2 className="text-2xl md:text-3xl font-bold">
            {language === 'en' ? 'Popular Stores' : 'المتاجر الشائعة'}
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {stores.map(store => (
            <Card 
              key={store.id} 
              className={`hover:shadow-lg transition-all duration-200 ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'hover:bg-white'}`}
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <a href={`/store/${store.id}`} className="block">
                  <div className="h-12 flex items-center justify-center mb-4">
                    <img 
                      src={store.logo} 
                      alt={store.name} 
                      className={`h-full max-h-12 object-contain ${theme === 'dark' ? 'brightness-0 invert' : ''}`} 
                    />
                  </div>
                  <h3 className="font-medium mb-2">{store.name}</h3>
                  <div className="text-sm text-muted-foreground mb-2">
                    {store.products.toLocaleString(language === 'en' ? 'en-US' : 'ar-SA')} {language === 'en' ? 'Products' : 'منتج'}
                  </div>
                  <Badge variant="outline" className="bg-primary/10 text-primary font-normal">
                    {store.offers} {language === 'en' ? 'Offers' : 'عرض'}
                  </Badge>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoresSection;
