
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { useIsMobile } from '@/hooks/use-mobile';
import PriceRangeFilter from './PriceRangeFilter';
import CheckboxFilter from './CheckboxFilter';

interface FilterSidebarProps {
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  selectedStores: string[];
  setSelectedStores: (stores: string[]) => void;
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
  applyFilters: () => void;
  className?: string;
}

const FilterSidebar = ({
  priceRange,
  setPriceRange,
  selectedStores,
  setSelectedStores,
  selectedCategories,
  setSelectedCategories,
  applyFilters,
  className = "",
}: FilterSidebarProps) => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  
  const handleStoreToggle = (store: string) => {
    if (selectedStores.includes(store)) {
      setSelectedStores(selectedStores.filter(s => s !== store));
    } else {
      setSelectedStores([...selectedStores, store]);
    }
  };

  const handleCategoryToggle = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <aside className={`${isMobile ? '' : 'glass rounded-xl p-4'} h-fit ${className}`}>
      {!isMobile && <h2 className="font-medium mb-4">{t('filter')}</h2>}
      
      {/* Price Range */}
      <PriceRangeFilter 
        priceRange={priceRange} 
        setPriceRange={setPriceRange} 
      />
      
      {/* Stores */}
      <CheckboxFilter
        title={t('stores')}
        options={['Amazon', 'Noon', 'Jumia', 'Carrefour']}
        selectedOptions={selectedStores}
        onToggleOption={handleStoreToggle}
      />
      
      {/* Categories */}
      <CheckboxFilter
        title={t('categories')}
        options={['Electronics', 'Smartphones', 'Audio', 'Laptops', 'Accessories']}
        selectedOptions={selectedCategories}
        onToggleOption={handleCategoryToggle}
      />
      
      {/* Apply Filters Button */}
      <Button 
        className="w-full mt-4" 
        onClick={applyFilters}
      >
        {t('applyFilters')}
      </Button>
    </aside>
  );
};

export default FilterSidebar;
