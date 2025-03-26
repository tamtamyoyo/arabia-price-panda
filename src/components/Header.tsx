
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, Heart, User, X, Sun, Moon } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';

const Header = () => {
  const { t, language, theme, toggleLanguage, toggleTheme } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 ${
        isScrolled 
          ? theme === 'dark' 
            ? 'py-2 glass-dark shadow-sm' 
            : 'py-2 glass shadow-sm' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center"
          >
            <span className={`text-2xl font-bold text-gradient ${language === 'ar' ? 'ml-2' : 'mr-2'}`}>
              PricePanda
            </span>
            {language === 'ar' && <span className="text-sm text-primary font-arabic">مقارنة الأسعار</span>}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="nav-link hover:text-primary transition-colors">
              {t('home')}
            </Link>
            <Link to="/categories" className="nav-link hover:text-primary transition-colors">
              {t('categories')}
            </Link>
            <Link to="/search" className="nav-link hover:text-primary transition-colors">
              {t('search')}
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center">
            {/* Theme Toggle */}
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleTheme}
              className="text-sm font-medium p-2 rounded-full hover:bg-secondary transition-colors"
              aria-label={theme === 'dark' ? t('lightMode') : t('darkMode')}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
            
            {/* Language Toggle */}
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleLanguage}
              className="text-sm font-medium mr-2"
            >
              {language === 'en' ? 'العربية' : 'English'}
            </Button>
            
            {/* Icons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/search" className="p-2 rounded-full hover:bg-secondary transition-colors">
                <Search size={20} />
              </Link>
              <Link to="/wishlist" className="p-2 rounded-full hover:bg-secondary transition-colors">
                <Heart size={20} />
              </Link>
              <Link to="/account" className="p-2 rounded-full hover:bg-secondary transition-colors">
                <User size={20} />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="p-2 md:hidden rounded-full hover:bg-secondary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="p-2 hover:bg-secondary rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('home')}
              </Link>
              <Link 
                to="/categories" 
                className="p-2 hover:bg-secondary rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('categories')}
              </Link>
              <Link 
                to="/search" 
                className="p-2 hover:bg-secondary rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('search')}
              </Link>
              <Link 
                to="/wishlist" 
                className="p-2 hover:bg-secondary rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('wishlist')}
              </Link>
              <Link 
                to="/account" 
                className="p-2 hover:bg-secondary rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('account')}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
