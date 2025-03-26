
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Settings, Store } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { 
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuCheckboxItem
} from "@/components/ui/dropdown-menu";

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
          <Search 
            size={20} 
            className={`text-primary ${language === 'ar' ? 'ml-2' : 'mr-2'}`}
            onClick={() => setOpen(true)}
          />
          
          <Input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => {
              setFocused(true);
              setShowRecent(true);
            }}
            onBlur={() => {
              setFocused(false);
              setTimeout(() => setShowRecent(false), 200);
            }}
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
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button type="button" className={`text-muted-foreground hover:text-foreground ${language === 'ar' ? 'ml-2 mr-1' : 'mr-2 ml-1'}`}>
                <Store size={18} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>{t('searchSources')}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {sources.map((source) => (
                <DropdownMenuCheckboxItem
                  key={source.id}
                  checked={source.enabled}
                  onCheckedChange={() => handleSourceToggle(source.id)}
                >
                  {source.name}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <button 
            type="submit" 
            className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-medium transition-colors hover:bg-primary/90"
          >
            {t('search')}
          </button>
        </form>
        
        {/* Recent searches dropdown */}
        {showRecent && recentSearches.length > 0 && (
          <div className="absolute mt-2 w-full left-0 bg-background rounded-lg shadow-lg border border-border z-50">
            <div className="py-2">
              <div className="px-4 py-1 text-xs font-semibold text-muted-foreground">{t('recentSearches')}</div>
              {recentSearches.map((term, index) => (
                <div 
                  key={index}
                  className="px-4 py-2 text-sm hover:bg-accent/50 cursor-pointer flex items-center"
                  onClick={() => handleRecentSearch(term)}
                >
                  <Search size={14} className="text-muted-foreground mr-2" />
                  {term}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command className="rounded-lg border shadow-md">
          <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <CommandInput 
              placeholder={t('searchPlaceholder')} 
              value={query}
              onValueChange={setQuery}
              className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <CommandList>
            <CommandEmpty>{t('noResults')}</CommandEmpty>
            <CommandGroup heading={t('recentSearches')}>
              {recentSearches.map((search, index) => (
                <CommandItem 
                  key={index}
                  onSelect={() => handleRecentSearch(search)}
                >
                  <Search className="mr-2 h-4 w-4" />
                  {search}
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandGroup heading={t('trendingSearches')}>
              <CommandItem onSelect={() => handleRecentSearch("iPhone 15")}>
                <span className="text-primary mr-2">1</span>
                iPhone 15
              </CommandItem>
              <CommandItem onSelect={() => handleRecentSearch("Samsung TV")}>
                <span className="text-primary mr-2">2</span>
                Samsung TV
              </CommandItem>
              <CommandItem onSelect={() => handleRecentSearch("PlayStation 5")}>
                <span className="text-primary mr-2">3</span>
                PlayStation 5
              </CommandItem>
            </CommandGroup>
          </CommandList>
          <div className="border-t p-2 flex justify-between items-center text-xs text-muted-foreground">
            <span>
              {t('searchingIn')}: {sources.filter(s => s.enabled).map(s => s.name).join(', ')}
            </span>
            <div className="flex items-center">
              <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                <span className="text-xs">⌘</span>K
              </kbd>
            </div>
          </div>
        </Command>
      </CommandDialog>
    </>
  );
};

export default SearchBar;
