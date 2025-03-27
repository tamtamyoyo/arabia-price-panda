
import React from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import FilterSidebar from './FilterSidebar';

interface MobileFilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  selectedStores: string[];
  setSelectedStores: (stores: string[]) => void;
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
  applyFilters: () => void;
}

const MobileFilterSidebar = ({
  isOpen,
  onClose,
  priceRange,
  setPriceRange,
  selectedStores,
  setSelectedStores,
  selectedCategories,
  setSelectedCategories,
  applyFilters
}: MobileFilterSidebarProps) => {
  const { t } = useLanguage();

  if (!isOpen) return null;

  const handleApplyFilters = () => {
    applyFilters();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="fixed inset-y-0 right-0 w-80 glass shadow-lg animate-slide-in p-4 overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-medium">{t('filter')}</h2>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-secondary/80"
          >
            <X size={20} />
          </button>
        </div>
        
        <FilterSidebar
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          selectedStores={selectedStores}
          setSelectedStores={setSelectedStores}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          applyFilters={handleApplyFilters}
        />
      </div>
    </div>
  );
};

export default MobileFilterSidebar;
