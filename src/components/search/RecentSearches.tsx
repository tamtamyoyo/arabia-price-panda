
import { Search } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

interface RecentSearchesProps {
  recentSearches: string[];
  onSelect: (term: string) => void;
  show: boolean;
}

const RecentSearches = ({ recentSearches, onSelect, show }: RecentSearchesProps) => {
  const { t } = useLanguage();

  if (!show || recentSearches.length === 0) {
    return null;
  }

  return (
    <div className="absolute mt-2 w-full left-0 bg-background rounded-lg shadow-lg border border-border z-50">
      <div className="py-2">
        <div className="px-4 py-1 text-xs font-semibold text-muted-foreground">{t('recentSearches')}</div>
        {recentSearches.map((term, index) => (
          <div 
            key={index}
            className="px-4 py-2 text-sm hover:bg-accent/50 cursor-pointer flex items-center"
            onClick={() => onSelect(term)}
          >
            <Search size={14} className="text-muted-foreground mr-2" />
            {term}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentSearches;
