
import React from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import FilterSidebar from './FilterSidebar';
import { 
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose
} from '@/components/ui/sheet';

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
  const { t, language } = useLanguage();

  const handleApplyFilters = () => {
    applyFilters();
    onClose();
  };

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <SheetContent side="right" className={`p-0 w-full max-w-[320px] sm:max-w-md ${language === 'ar' ? 'rtl' : 'ltr'}`}>
        <SheetHeader className="p-4 border-b">
          <SheetTitle>{t('filter')}</SheetTitle>
          <SheetClose className="absolute right-4 top-4">
            <X className="h-4 w-4" />
          </SheetClose>
        </SheetHeader>
        <div className="px-4 py-2 overflow-y-auto h-[calc(100vh-60px)]">
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
      </SheetContent>
    </Sheet>
  );
};

export default MobileFilterSidebar;
