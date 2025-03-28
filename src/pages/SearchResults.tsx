
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { useIsMobile } from '@/hooks/use-mobile';
import { Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchBar from '@/components/search/SearchBar';
import FilterSidebar from '@/components/search/filters/FilterSidebar';
import MobileFilterSidebar from '@/components/search/filters/MobileFilterSidebar';
import SortOptions, { SortOption } from '@/components/search/SortOptions';
import ProductGrid from '@/components/search/ProductGrid';

// Mock data for development
const mockProducts = [
  {
    id: '1',
    title: 'Apple iPhone 14 Pro Max, 256GB, Deep Purple',
    image: 'https://m.media-amazon.com/images/I/61nzPMNY8zL._AC_SX679_.jpg',
    currentPrice: 4399,
    originalPrice: 4999,
    discount: 12,
    bestDeal: true,
    stores: [
      { name: 'Amazon', price: 4399 },
      { name: 'Noon', price: 4499 },
      { name: 'Jumia', price: 4599 }
    ]
  },
  {
    id: '2',
    title: 'Samsung Galaxy S23 Ultra, 512GB, Phantom Black',
    image: 'https://m.media-amazon.com/images/I/71Sa3dqTqzL._AC_SX679_.jpg',
    currentPrice: 4199,
    originalPrice: 4599,
    discount: 9,
    bestDeal: false,
    stores: [
      { name: 'Amazon', price: 4199 },
      { name: 'Noon', price: 4299 }
    ]
  },
  {
    id: '3',
    title: 'Sony WH-1000XM5 Wireless Noise Cancelling Headphones',
    image: 'https://m.media-amazon.com/images/I/61+btxzpfDL._AC_SX679_.jpg',
    currentPrice: 1499,
    originalPrice: 1799,
    discount: 17,
    bestDeal: false,
    stores: [
      { name: 'Amazon', price: 1499 },
      { name: 'Noon', price: 1599 },
      { name: 'Jumia', price: 1699 }
    ]
  },
  {
    id: '4',
    title: 'Apple MacBook Pro 14-inch M3 Pro, 1TB SSD',
    image: 'https://m.media-amazon.com/images/I/61lsexTCOhL._AC_SX679_.jpg',
    currentPrice: 8999,
    originalPrice: 9499,
    discount: 5,
    bestDeal: false,
    stores: [
      { name: 'Amazon', price: 8999 },
      { name: 'Noon', price: 9199 }
    ]
  },
  {
    id: '5',
    title: 'Apple AirPods Pro (2nd Generation)',
    image: 'https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_SX679_.jpg',
    currentPrice: 899,
    originalPrice: 999,
    discount: 10,
    bestDeal: false,
    stores: [
      { name: 'Amazon', price: 899 },
      { name: 'Noon', price: 949 }
    ]
  },
  {
    id: '6',
    title: 'Dyson V15 Detect Absolute Cordless Vacuum Cleaner',
    image: 'https://m.media-amazon.com/images/I/61oqkEcTh9L._AC_SX679_.jpg',
    currentPrice: 2799,
    originalPrice: 3199,
    discount: 13,
    bestDeal: false,
    stores: [
      { name: 'Amazon', price: 2799 },
      { name: 'Noon', price: 2899 }
    ]
  }
];

const SearchResults = () => {
  const location = useLocation();
  const { t, language } = useLanguage();
  const isMobile = useIsMobile();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState<SortOption>('popularity');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  
  // Filter states
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [selectedStores, setSelectedStores] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Parse search query from URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('q') || '';
    setSearchTerm(query);
    
    // Here you would normally fetch products based on the query
    // For now, we'll just filter our mock data
    filterProducts(query);
  }, [location.search]);

  // Filter products based on search term
  const filterProducts = (query: string) => {
    if (!query.trim()) {
      setFilteredProducts(mockProducts);
      return;
    }
    
    const filtered = mockProducts.filter(product => 
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    
    setFilteredProducts(filtered);
  };

  // Sort products
  const sortProducts = (products: typeof mockProducts, option: SortOption) => {
    const sorted = [...products];
    
    switch (option) {
      case 'price_asc':
        return sorted.sort((a, b) => a.currentPrice - b.currentPrice);
      case 'price_desc':
        return sorted.sort((a, b) => b.currentPrice - a.currentPrice);
      case 'discount':
        return sorted.sort((a, b) => (b.discount || 0) - (a.discount || 0));
      case 'popularity':
      default:
        return sorted; // Assuming original order is by popularity
    }
  };

  // Handle sort change
  const handleSortChange = (option: SortOption) => {
    setSortOption(option);
    setFilteredProducts(sortProducts(filteredProducts, option));
  };

  // Apply filters
  const applyFilters = () => {
    // Here you would apply all filters - just a placeholder for now
    console.log('Applying filters:', {
      priceRange,
      selectedStores,
      selectedCategories
    });
  };

  return (
    <div className={`min-h-screen flex flex-col ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <Header />
      
      <main className="flex-grow pt-20 px-4">
        <div className="container mx-auto py-8">
          {/* Search Header */}
          <div className="mb-6 md:mb-8">
            <h1 className={`${isMobile ? 'text-xl' : 'text-2xl md:text-3xl'} font-bold mb-4`}>
              {searchTerm ? (
                <>
                  {language === 'en' ? 'Search results for: ' : 'نتائج البحث عن: '}
                  <span className="text-primary">"{searchTerm}"</span>
                </>
              ) : (
                t('allProducts')
              )}
            </h1>
            <div className="w-full md:max-w-xl">
              <SearchBar />
            </div>
          </div>

          {/* Filters and Results */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar Filters - Desktop */}
            <div className="hidden lg:block w-64 sticky top-24">
              <FilterSidebar 
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                selectedStores={selectedStores}
                setSelectedStores={setSelectedStores}
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                applyFilters={applyFilters}
              />
            </div>

            {/* Mobile Filter Button */}
            <div className="lg:hidden sticky top-20 z-30 bg-background py-2">
              <Button 
                variant="outline" 
                className="w-full flex items-center justify-center gap-2"
                onClick={() => setIsFilterOpen(true)}
              >
                <Filter size={18} />
                {t('filter')}
              </Button>
            </div>

            {/* Mobile Filter Sidebar */}
            <MobileFilterSidebar 
              isOpen={isFilterOpen}
              onClose={() => setIsFilterOpen(false)}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              selectedStores={selectedStores}
              setSelectedStores={setSelectedStores}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              applyFilters={applyFilters}
            />

            {/* Results */}
            <div className="flex-1">
              {/* Sort Options */}
              <SortOptions 
                sortOption={sortOption}
                onSortChange={handleSortChange}
                resultsCount={filteredProducts.length}
              />
              
              {/* Product Grid */}
              <ProductGrid products={filteredProducts} />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SearchResults;
