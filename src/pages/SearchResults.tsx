
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import SearchBar from '@/components/search/SearchBar';
import { Filter, SortAsc, SortDesc, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

// Sort options
type SortOption = 'price_asc' | 'price_desc' | 'discount' | 'popularity';

const SearchResults = () => {
  const location = useLocation();
  const { t, language } = useLanguage();
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

  return (
    <div className={`min-h-screen flex flex-col ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <Header />
      
      <main className="flex-grow pt-20 px-4">
        <div className="container mx-auto py-8">
          {/* Search Header */}
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              {searchTerm ? (
                <>
                  {language === 'en' ? 'Search results for: ' : 'نتائج البحث عن: '}
                  <span className="text-primary">"{searchTerm}"</span>
                </>
              ) : (
                t('allProducts')
              )}
            </h1>
            <div className="max-w-xl">
              <SearchBar />
            </div>
          </div>

          {/* Filters and Results */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar Filters - Desktop */}
            <aside className="hidden lg:block w-64 glass rounded-xl p-4 h-fit sticky top-24">
              <h2 className="font-medium mb-4">{t('filter')}</h2>
              
              {/* Price Range */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">{t('priceRange')}</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">AED {priceRange[0]}</span>
                    <span className="text-sm text-muted-foreground">AED {priceRange[1]}</span>
                  </div>
                  {/* Here would be a slider component for price range */}
                  <div className="h-1 bg-secondary rounded-full relative">
                    <div className="absolute inset-0 h-full bg-primary rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>
              
              {/* Stores */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">{t('stores')}</h3>
                <div className="space-y-2">
                  {['Amazon', 'Noon', 'Jumia', 'Carrefour'].map(store => (
                    <label key={store} className="flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="rounded text-primary mr-2"
                        checked={selectedStores.includes(store)}
                        onChange={() => {
                          if (selectedStores.includes(store)) {
                            setSelectedStores(selectedStores.filter(s => s !== store));
                          } else {
                            setSelectedStores([...selectedStores, store]);
                          }
                        }}
                      />
                      <span className="text-sm">{store}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Categories */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">{t('categories')}</h3>
                <div className="space-y-2">
                  {['Electronics', 'Smartphones', 'Audio', 'Laptops', 'Accessories'].map(category => (
                    <label key={category} className="flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="rounded text-primary mr-2"
                        checked={selectedCategories.includes(category)}
                        onChange={() => {
                          if (selectedCategories.includes(category)) {
                            setSelectedCategories(selectedCategories.filter(c => c !== category));
                          } else {
                            setSelectedCategories([...selectedCategories, category]);
                          }
                        }}
                      />
                      <span className="text-sm">{category}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Apply Filters Button */}
              <Button className="w-full">
                {t('applyFilters')}
              </Button>
            </aside>

            {/* Mobile Filter Button */}
            <div className="lg:hidden sticky top-20 z-30 bg-background py-2">
              <Button 
                variant="outline" 
                className="w-full flex items-center justify-center"
                onClick={() => setIsFilterOpen(true)}
              >
                <Filter size={16} className="mr-2" />
                {t('filter')}
              </Button>
            </div>

            {/* Mobile Filter Sidebar */}
            {isFilterOpen && (
              <div className="lg:hidden fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
                <div className="fixed inset-y-0 right-0 w-80 glass shadow-lg animate-slide-in p-4 overflow-y-auto">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-medium">{t('filter')}</h2>
                    <button 
                      onClick={() => setIsFilterOpen(false)}
                      className="p-1 rounded-full hover:bg-secondary/80"
                    >
                      <X size={20} />
                    </button>
                  </div>
                  
                  {/* Mobile filters content - same as desktop */}
                  {/* ... */}
                  
                  {/* Apply Filters Button */}
                  <div className="mt-auto pt-4">
                    <Button 
                      className="w-full"
                      onClick={() => setIsFilterOpen(false)}
                    >
                      {t('applyFilters')}
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Results */}
            <div className="flex-1">
              {/* Sort Options */}
              <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
                <p className="text-sm text-muted-foreground">
                  {language === 'en' 
                    ? `Showing ${filteredProducts.length} results` 
                    : `عرض ${filteredProducts.length} نتيجة`
                  }
                </p>
                
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium">{t('sortBy')}:</span>
                  <div className="flex space-x-1">
                    <Button 
                      variant={sortOption === 'popularity' ? 'default' : 'outline'} 
                      size="sm"
                      onClick={() => handleSortChange('popularity')}
                    >
                      {language === 'en' ? 'Popularity' : 'الشعبية'}
                    </Button>
                    <Button 
                      variant={sortOption === 'price_asc' ? 'default' : 'outline'} 
                      size="sm"
                      onClick={() => handleSortChange('price_asc')}
                    >
                      <SortAsc size={14} className="mr-1" />
                      {language === 'en' ? 'Price' : 'السعر'}
                    </Button>
                    <Button 
                      variant={sortOption === 'price_desc' ? 'default' : 'outline'} 
                      size="sm"
                      onClick={() => handleSortChange('price_desc')}
                    >
                      <SortDesc size={14} className="mr-1" />
                      {language === 'en' ? 'Price' : 'السعر'}
                    </Button>
                    <Button 
                      variant={sortOption === 'discount' ? 'default' : 'outline'} 
                      size="sm"
                      onClick={() => handleSortChange('discount')}
                    >
                      {language === 'en' ? 'Discount' : 'الخصم'}
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Product Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              ) : (
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
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SearchResults;
