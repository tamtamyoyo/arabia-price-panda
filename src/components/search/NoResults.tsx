
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';

const NoResults = () => {
  const { language } = useLanguage();
  
  return (
    <div className="text-center py-12">
      <p className="text-lg font-medium mb-2">
        {language === 'en' ? 'No products found' : 'لم يتم العثور على منتجات'}
      </p>
      <p className="text-muted-foreground">
        {language === 'en' 
          ? 'Try adjusting your search or filter to find what you are looking for.' 
          : 'حاول تعديل البحث أو الفلتر للعثور على ما تبحث عنه.'
        }
      </p>
    </div>
  );
};

export default NoResults;
