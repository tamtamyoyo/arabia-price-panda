
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { useIsMobile } from '@/hooks/use-mobile';

const NoResults = () => {
  const { language } = useLanguage();
  const isMobile = useIsMobile();
  
  return (
    <div className={`text-center py-${isMobile ? '8' : '12'}`}>
      <p className={`${isMobile ? 'text-base' : 'text-lg'} font-medium mb-2`}>
        {language === 'en' ? 'No products found' : 'لم يتم العثور على منتجات'}
      </p>
      <p className="text-muted-foreground text-sm">
        {language === 'en' 
          ? 'Try adjusting your search or filter to find what you are looking for.' 
          : 'حاول تعديل البحث أو الفلتر للعثور على ما تبحث عنه.'
        }
      </p>
    </div>
  );
};

export default NoResults;
