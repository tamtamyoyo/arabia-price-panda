
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';

const TrendingSection = () => {
  const { language } = useLanguage();

  const trendingSearches = [
    { id: 1, term: 'iPhone 15', searches: 15420 },
    { id: 2, term: 'PS5', searches: 12800 },
    { id: 3, term: 'Air Fryer', searches: 9650 },
    { id: 4, term: 'Samsung S24', searches: 8900 },
    { id: 5, term: 'iPad Air', searches: 7200 },
    { id: 6, term: 'Nintendo Switch', searches: 6800 }
  ];

  return (
    <section className="py-12 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <TrendingUp className="text-primary" size={24} />
          <h2 className="text-2xl md:text-3xl font-bold">
            {language === 'en' ? 'Trending Searches' : 'الأكثر بحثاً'}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {trendingSearches.map(item => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <a href={`/search?q=${encodeURIComponent(item.term)}`} className="block">
                  <span className="block font-medium mb-1">{item.term}</span>
                  <span className="text-sm text-muted-foreground">
                    {new Intl.NumberFormat(language === 'en' ? 'en-US' : 'ar-SA').format(item.searches)}
                    {language === 'en' ? ' searches' : ' بحث'}
                  </span>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
