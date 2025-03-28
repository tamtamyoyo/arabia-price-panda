
import React from 'react';
import { Filter, X } from 'lucide-react';
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
import { useIsMobile } from '@/hooks/use-mobile';

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
  const isMobile = useIsMobile();

  const handleApplyFilters = () => {
    applyFilters();
    onClose();
  };

  // For smaller mobile devices, use Sheet
  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <SheetContent side="right" className={`p-0 sm:max-w-md ${language === 'ar' ? 'rtl' : 'ltr'}`}>
          <SheetHeader className="p-4 border-b">
            <SheetTitle>{t('filter')}</SheetTitle>
            <SheetClose className="absolute right-4 top-4" />
          </SheetHeader>
          <div className="px-4 py-2 overflow-y-auto max-h-[80vh]">
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
  }

  // For tablets and larger devices, use the existing modal-like UI
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className={`fixed inset-y-0 ${language === 'ar' ? 'left-0' : 'right-0'} w-80 glass shadow-lg animate-slide-in p-4 overflow-y-auto`}>
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
