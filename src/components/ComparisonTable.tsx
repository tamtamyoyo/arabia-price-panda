
import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { ExternalLink, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Store {
  id: string;
  name: string;
  logo: string;
  price: number;
  shipping: number;
  inStock: boolean;
  affiliateLink: string;
}

interface ComparisonTableProps {
  stores: Store[];
}

const ComparisonTable = ({ stores }: ComparisonTableProps) => {
  const { t, language } = useLanguage();
  const [sortBy, setSortBy] = useState<'price' | 'total'>('total');
  
  // Sort stores by the selected criteria
  const sortedStores = [...stores].sort((a, b) => {
    if (sortBy === 'price') {
      return a.price - b.price;
    } else {
      return (a.price + a.shipping) - (b.price + b.shipping);
    }
  });

  // Format price with currency
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(language === 'en' ? 'en-AE' : 'ar-AE', {
      style: 'currency',
      currency: 'AED',
    }).format(price);
  };

  return (
    <div className="w-full overflow-hidden glass rounded-xl">
      <div className="overflow-x-auto">
        <table className="w-full min-w-full table-auto">
          <thead>
            <tr className="bg-secondary/50 text-left">
              <th className="py-4 px-6 font-medium text-sm text-muted-foreground">
                {t('store')}
              </th>
              <th 
                className={`py-4 px-6 font-medium text-sm text-muted-foreground cursor-pointer hover:text-primary transition-colors ${sortBy === 'price' ? 'text-primary' : ''}`}
                onClick={() => setSortBy('price')}
              >
                {t('price')}
              </th>
              <th className="py-4 px-6 font-medium text-sm text-muted-foreground">
                {t('shipping')}
              </th>
              <th 
                className={`py-4 px-6 font-medium text-sm text-muted-foreground cursor-pointer hover:text-primary transition-colors ${sortBy === 'total' ? 'text-primary' : ''}`}
                onClick={() => setSortBy('total')}
              >
                {t('total')}
              </th>
              <th className="py-4 px-6 font-medium text-sm text-muted-foreground">
                {t('availability')}
              </th>
              <th className="py-4 px-6 font-medium text-sm text-muted-foreground">
                {t('action')}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {sortedStores.map((store, index) => (
              <tr key={store.id} className={index === 0 ? "bg-primary/5" : ""}>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center overflow-hidden">
                      <img src={store.logo} alt={store.name} className="w-8 h-8 object-contain" />
                    </div>
                    <span className="font-medium">{store.name}</span>
                    {index === 0 && (
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                        Best Price
                      </span>
                    )}
                  </div>
                </td>
                <td className="py-4 px-6 font-medium">
                  {formatPrice(store.price)}
                </td>
                <td className="py-4 px-6">
                  {store.shipping === 0 ? (
                    <span className="text-sm text-green-600">{t('freeShipping')}</span>
                  ) : (
                    formatPrice(store.shipping)
                  )}
                </td>
                <td className="py-4 px-6 font-bold">
                  {formatPrice(store.price + store.shipping)}
                </td>
                <td className="py-4 px-6">
                  {store.inStock ? (
                    <div className="flex items-center text-green-600">
                      <Check size={16} className="mr-1" />
                      <span className="text-sm">{t('inStock')}</span>
                    </div>
                  ) : (
                    <div className="flex items-center text-red-500">
                      <X size={16} className="mr-1" />
                      <span className="text-sm">{t('outOfStock')}</span>
                    </div>
                  )}
                </td>
                <td className="py-4 px-6">
                  <a href={store.affiliateLink} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className={index === 0 ? "bg-primary hover:bg-primary/90" : ""}>
                      {t('buyNow')}
                      <ExternalLink size={14} className="ml-1" />
                    </Button>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonTable;
