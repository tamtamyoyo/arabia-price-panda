
import { useState, useEffect, createContext, useContext, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'home': 'Home',
    'search': 'Search',
    'categories': 'Categories',
    'wishlist': 'Wishlist',
    'account': 'Account',
    'searchPlaceholder': 'Search for products...',
    'popularCategories': 'Popular Categories',
    'electronics': 'Electronics',
    'fashion': 'Fashion',
    'homeAppliances': 'Home Appliances',
    'beauty': 'Beauty',
    'grocery': 'Grocery',
    'compareFrom': 'Compare prices from',
    'topStores': 'top stores',
    'bestDeals': 'Best Deals',
    'viewAll': 'View All',
    'buyNow': 'Buy Now',
    'addToWishlist': 'Add to Wishlist',
    'priceComparison': 'Price Comparison',
    'store': 'Store',
    'price': 'Price',
    'shipping': 'Shipping',
    'total': 'Total',
    'reviews': 'Reviews',
    'specifications': 'Specifications',
    'relatedProducts': 'Related Products',
    'priceHistory': 'Price History',
    'sortBy': 'Sort By',
    'filter': 'Filter',
  },
  ar: {
    'home': 'الرئيسية',
    'search': 'بحث',
    'categories': 'التصنيفات',
    'wishlist': 'المفضلة',
    'account': 'الحساب',
    'searchPlaceholder': 'ابحث عن المنتجات...',
    'popularCategories': 'التصنيفات الشائعة',
    'electronics': 'الإلكترونيات',
    'fashion': 'الأزياء',
    'homeAppliances': 'الأجهزة المنزلية',
    'beauty': 'الجمال',
    'grocery': 'البقالة',
    'compareFrom': 'قارن الأسعار من',
    'topStores': 'أفضل المتاجر',
    'bestDeals': 'أفضل العروض',
    'viewAll': 'عرض الكل',
    'buyNow': 'اشتري الآن',
    'addToWishlist': 'أضف إلى المفضلة',
    'priceComparison': 'مقارنة الأسعار',
    'store': 'المتجر',
    'price': 'السعر',
    'shipping': 'الشحن',
    'total': 'المجموع',
    'reviews': 'التقييمات',
    'specifications': 'المواصفات',
    'relatedProducts': 'منتجات ذات صلة',
    'priceHistory': 'تاريخ السعر',
    'sortBy': 'ترتيب حسب',
    'filter': 'تصفية',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Set language direction based on current language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    document.body.className = language === 'ar' ? 'rtl font-arabic' : 'ltr';
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
