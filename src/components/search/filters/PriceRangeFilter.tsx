
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { useIsMobile } from '@/hooks/use-mobile';
import { Slider } from '@/components/ui/slider';

interface PriceRangeFilterProps {
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
}

const PriceRangeFilter = ({ priceRange, setPriceRange }: PriceRangeFilterProps) => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  const handlePriceChange = (value: number[]) => {
    setPriceRange([value[0], value[1]]);
  };

  return (
    <div className={`mb-${isMobile ? '4' : '6'}`}>
      <h3 className="text-sm font-medium mb-3">{t('priceRange')}</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">AED {priceRange[0]}</span>
          <span className="text-sm text-muted-foreground">AED {priceRange[1]}</span>
        </div>
        
        <Slider
          defaultValue={[priceRange[0], priceRange[1]]}
          max={10000}
          step={100}
          onValueChange={handlePriceChange}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default PriceRangeFilter;
