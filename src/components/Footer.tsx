
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';

const Footer = () => {
  const { t, language } = useLanguage();
  
  return (
    <footer className="bg-secondary/50 pt-12 pb-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gradient">PricePanda</h3>
            <p className="text-muted-foreground mb-4">
              {language === 'en' 
                ? 'Find the best prices across top e-commerce stores in the UAE and save on your purchases.'
                : 'ابحث عن أفضل الأسعار عبر أهم متاجر التجارة الإلكترونية في الإمارات ووفر في مشترياتك.'
              }
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4">{language === 'en' ? 'Quick Links' : 'روابط سريعة'}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('categories')}
                </Link>
              </li>
              <li>
                <Link to="/search" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('search')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  {language === 'en' ? 'About Us' : 'من نحن'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-medium mb-4">{language === 'en' ? 'Categories' : 'التصنيفات'}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/category/electronics" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('electronics')}
                </Link>
              </li>
              <li>
                <Link to="/category/fashion" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('fashion')}
                </Link>
              </li>
              <li>
                <Link to="/category/home" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('homeAppliances')}
                </Link>
              </li>
              <li>
                <Link to="/category/beauty" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('beauty')}
                </Link>
              </li>
              <li>
                <Link to="/category/grocery" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('grocery')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium mb-4">{language === 'en' ? 'Contact Us' : 'اتصل بنا'}</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                {language === 'en' ? 'Email: ' : 'البريد الإلكتروني: '}
                <a href="mailto:support@pricepanda.ae" className="hover:text-primary transition-colors">
                  support@pricepanda.ae
                </a>
              </li>
              <li className="text-muted-foreground">
                {language === 'en' ? 'Location: Dubai, UAE' : 'الموقع: دبي، الإمارات العربية المتحدة'}
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 mt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} PricePanda. {language === 'en' ? 'All rights reserved.' : 'جميع الحقوق محفوظة.'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
