
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BarChart2 } from 'lucide-react';

const BrowseByBrand = () => {
  const { language, t, theme } = useLanguage();
  
  const brands = [
    { id: 'apple', name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg', deals: 156 },
    { id: 'samsung', name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg', deals: 143 },
    { id: 'sony', name: 'Sony', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg', deals: 89 },
    { id: 'lg', name: 'LG', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/LG_symbol.svg/2048px-LG_symbol.svg.png', deals: 76 },
    { id: 'nike', name: 'Nike', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/2048px-Logo_NIKE.svg.png', deals: 68 },
    { id: 'adidas', name: 'Adidas', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png', deals: 62 }
  ];

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <BarChart2 className="text-primary" size={24} />
          <h2 className="text-2xl md:text-3xl font-bold">
            {language === 'en' ? 'Browse by Brand' : 'تصفح حسب العلامة التجارية'}
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {brands.map(brand => (
            <Card 
              key={brand.id} 
              className={`hover:shadow-lg transition duration-300 ${
                theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'hover:bg-slate-50'
              }`}
            >
              <CardContent className="p-6 flex flex-col items-center justify-center">
                <a 
                  href={`/brands/${brand.id}`} 
                  className="block text-center group"
                >
                  <div className="h-12 mb-3 flex items-center justify-center">
                    <img 
                      src={brand.logo} 
                      alt={brand.name} 
                      className={`h-full max-h-12 object-contain transition-transform group-hover:scale-110 ${
                        theme === 'dark' ? 'brightness-0 invert' : ''
                      }`} 
                    />
                  </div>
                  <span className="block font-medium mb-2">{brand.name}</span>
                  <Badge variant="secondary" className="font-normal">
                    {brand.deals} {language === 'en' ? 'deals' : 'صفقات'}
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

export default BrowseByBrand;
