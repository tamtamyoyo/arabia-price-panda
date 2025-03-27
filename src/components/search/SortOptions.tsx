
import React from 'react';
import { SortAsc, SortDesc } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';

export type SortOption = 'popularity' | 'price_asc' | 'price_desc' | 'discount';

interface SortOptionsProps {
  sortOption: SortOption;
  onSortChange: (option: SortOption) => void;
  resultsCount: number;
}

const SortOptions = ({ sortOption, onSortChange, resultsCount }: SortOptionsProps) => {
  const { t, language } = useLanguage();

  return (
    <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
      <p className="text-sm text-muted-foreground">
        {language === 'en' 
          ? `Showing ${resultsCount} results` 
          : `عرض ${resultsCount} نتيجة`
        }
      </p>
      
      <div className="flex items-center space-x-2">
        <span className="text-sm font-medium">{t('sortBy')}:</span>
        <div className="flex space-x-1">
          <Button 
            variant={sortOption === 'popularity' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => onSortChange('popularity')}
          >
            {language === 'en' ? 'Popularity' : 'الشعبية'}
          </Button>
          <Button 
            variant={sortOption === 'price_asc' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => onSortChange('price_asc')}
          >
            <SortAsc size={14} className="mr-1" />
            {language === 'en' ? 'Price' : 'السعر'}
          </Button>
          <Button 
            variant={sortOption === 'price_desc' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => onSortChange('price_desc')}
          >
            <SortDesc size={14} className="mr-1" />
            {language === 'en' ? 'Price' : 'السعر'}
          </Button>
          <Button 
            variant={sortOption === 'discount' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => onSortChange('discount')}
          >
            {language === 'en' ? 'Discount' : 'الخصم'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SortOptions;
