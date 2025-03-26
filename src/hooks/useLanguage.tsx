
import { useState, useEffect, createContext, useContext, ReactNode } from 'react';

type Language = 'en' | 'ar';
type Theme = 'light' | 'dark';

interface LanguageContextType {
  language: Language;
  theme: Theme;
  toggleLanguage: () => void;
  toggleTheme: () => void;
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
    'hotDeals': 'Hot Deals',
    'todayDeals': "Today's Deals",
    'weekDeals': 'This Week Deals',
    'trendingSearches': 'Trending Searches',
    'searches': 'searches',
    'darkMode': 'Dark Mode',
    'lightMode': 'Light Mode'
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
    'hotDeals': 'أفضل العروض',
    'todayDeals': 'عروض اليوم',
    'weekDeals': 'عروض الأسبوع',
    'trendingSearches': 'الأكثر بحثاً',
    'searches': 'بحث',
    'darkMode': 'الوضع الداكن',
    'lightMode': 'الوضع الفاتح'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ar');
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    // Apply language settings to document
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    document.body.className = language === 'ar' ? 'rtl font-arabic' : 'ltr';
    
    // Check for saved preferences
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
    
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    // Apply theme settings
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Save preferences
    localStorage.setItem('language', language);
    localStorage.setItem('theme', theme);
  }, [language, theme]);

  const toggleLanguage = () => {
    setLanguage(prev => {
      const newLang = prev === 'en' ? 'ar' : 'en';
      localStorage.setItem('language', newLang);
      return newLang;
    });
  };

  const toggleTheme = () => {
    setTheme(prev => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, theme, toggleLanguage, toggleTheme, t }}>
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
