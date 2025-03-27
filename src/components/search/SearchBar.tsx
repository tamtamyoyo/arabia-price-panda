
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import SearchInput from './SearchInput';
import SearchSourcesDropdown from './SearchSourcesDropdown';
import RecentSearches from './RecentSearches';
import SearchCommandDialog from './SearchCommandDialog';

// Mock recent searches for demo
const recentSearches = [
  "iPhone 15 Pro",
  "Samsung Galaxy S23",
  "AirPods Pro 2",
  "PlayStation 5"
];

// Available search sources
const searchSources = [
  { id: 'amazon', name: 'Amazon', enabled: true },
  { id: 'noon', name: 'Noon', enabled: true },
  { id: 'jumia', name: 'Jumia', enabled: true },
  { id: 'carrefour', name: 'Carrefour', enabled: true },
  { id: 'sharaf', name: 'Sharaf DG', enabled: false },
  { id: 'lulu', name: 'Lulu Hypermarket', enabled: false },
];

const SearchBar = () => {
  const { t, language, theme } = useLanguage();
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);
  const [open, setOpen] = useState(false);
  const [sources, setSources] = useState(searchSources);
  const [showRecent, setShowRecent] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      // Get enabled sources
      const enabledSources = sources.filter(s => s.enabled).map(s => s.id).join(',');
      navigate(`/search?q=${encodeURIComponent(query)}&sources=${enabledSources}`);
      setOpen(false);
      setShowRecent(false);
    }
  };

  const handleSourceToggle = (sourceId: string) => {
    setSources(sources.map(source => 
      source.id === sourceId 
        ? { ...source, enabled: !source.enabled } 
        : source
    ));
  };

  const handleRecentSearch = (term: string) => {
    setQuery(term);
    navigate(`/search?q=${encodeURIComponent(term)}`);
    setOpen(false);
    setShowRecent(false);
  };

  return (
    <>
      <div 
        className={`relative w-full transition-all duration-300 ${
          focused 
            ? 'scale-105 shadow-lg' 
            : 'shadow-md hover:shadow-lg'
        } ${
          theme === 'dark' 
            ? 'glass-dark' 
            : 'glass'
        } rounded-full overflow-hidden`}
      >
        <form onSubmit={handleSearch} className="flex items-center h-14 px-4">
          <SearchInput 
            query={query}
            setQuery={setQuery}
            onFocus={() => {
              setFocused(true);
              setShowRecent(true);
            }}
            onBlur={() => {
              setFocused(false);
              setTimeout(() => setShowRecent(false), 200);
            }}
            focused={focused}
          />
          
          <SearchSourcesDropdown 
            sources={sources}
            onSourceToggle={handleSourceToggle}
          />
          
          <button 
            type="submit" 
            className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-medium transition-colors hover:bg-primary/90"
          >
            {t('search')}
          </button>
        </form>
        
        <RecentSearches 
          recentSearches={recentSearches}
          onSelect={handleRecentSearch}
          show={showRecent}
        />
      </div>

      <SearchCommandDialog 
        open={open}
        setOpen={setOpen}
        query={query}
        setQuery={setQuery}
        recentSearches={recentSearches}
        sources={sources}
        onSearch={handleRecentSearch}
      />
    </>
  );
};

export default SearchBar;
