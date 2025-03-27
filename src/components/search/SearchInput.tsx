
import React from 'react';
import { Search, X } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { useLanguage } from '@/hooks/useLanguage';

interface SearchInputProps {
  query: string;
  setQuery: (query: string) => void;
  onFocus: () => void;
  onBlur: () => void;
  focused: boolean;
}

const SearchInput = ({ query, setQuery, onFocus, onBlur, focused }: SearchInputProps) => {
  const { t, language } = useLanguage();

  return (
    <div className="flex items-center flex-1">
      <Search 
        size={20} 
        className={`text-primary ${language === 'ar' ? 'ml-2' : 'mr-2'}`}
      />
      
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={t('searchPlaceholder')}
        className={`flex-1 bg-transparent border-none shadow-none focus:outline-none text-foreground placeholder:text-muted-foreground ${
          language === 'ar' ? 'text-right' : 'text-left'
        }`}
      />
      
      {query && (
        <button 
          type="button" 
          onClick={() => setQuery('')}
          className={`text-muted-foreground hover:text-foreground ${language === 'ar' ? 'ml-1' : 'mr-1'}`}
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
};

export default SearchInput;
