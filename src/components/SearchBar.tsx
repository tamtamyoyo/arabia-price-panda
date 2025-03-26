
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const SearchBar = () => {
  const { t, language } = useLanguage();
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form 
      onSubmit={handleSearch} 
      className="relative w-full glass rounded-full overflow-hidden transition-all duration-300 hover:shadow-md focus-within:shadow-md"
    >
      <div className="flex items-center h-14 px-4">
        <Search size={20} className={`text-muted-foreground ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t('searchPlaceholder')}
          className={`flex-1 bg-transparent border-none focus:outline-none text-foreground placeholder:text-muted-foreground ${
            language === 'ar' ? 'text-right' : 'text-left'
          }`}
        />
        <button 
          type="submit" 
          className="ml-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium transition-colors hover:bg-primary/90"
        >
          {t('search')}
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
