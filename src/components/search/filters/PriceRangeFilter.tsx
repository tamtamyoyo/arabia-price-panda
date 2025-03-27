
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';

interface PriceRangeFilterProps {
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
}

const PriceRangeFilter = ({ priceRange, setPriceRange }: PriceRangeFilterProps) => {
  const { t } = useLanguage();

  return (
    <div className="mb-6">
      <h3 className="text-sm font-medium mb-3">{t('priceRange')}</h3>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">AED {priceRange[0]}</span>
          <span className="text-sm text-muted-foreground">AED {priceRange[1]}</span>
        </div>
        {/* Price range slider */}
        <div className="h-1 bg-secondary rounded-full relative">
          <div 
            className="absolute inset-0 h-full bg-primary rounded-full" 
            style={{ width: '60%' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeFilter;
