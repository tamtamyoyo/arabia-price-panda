
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { useIsMobile } from '@/hooks/use-mobile';
import { SearchX } from 'lucide-react';

const NoResults = () => {
  const { language } = useLanguage();
  const isMobile = useIsMobile();
  
  return (
    <div className={`text-center py-${isMobile ? '8' : '12'} flex flex-col items-center gap-3`}>
      <SearchX className="text-muted-foreground h-12 w-12 mb-2" />
      <p className={`${isMobile ? 'text-lg' : 'text-xl'} font-medium mb-2`}>
        {language === 'en' ? 'No products found' : 'لم يتم العثور على منتجات'}
      </p>
      <p className="text-muted-foreground text-sm max-w-md mx-auto">
        {language === 'en' 
          ? 'Try adjusting your search or filter to find what you are looking for.' 
          : 'حاول تعديل البحث أو الفلتر للعثور على ما تبحث عنه.'
        }
      </p>
    </div>
  );
};

export default NoResults;
