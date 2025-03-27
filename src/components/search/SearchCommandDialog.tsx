
import { Search } from 'lucide-react';
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

interface SearchSource {
  id: string;
  name: string;
  enabled: boolean;
}

interface SearchCommandDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  query: string;
  setQuery: (query: string) => void;
  recentSearches: string[];
  sources: SearchSource[];
  onSearch: (term: string) => void;
}

const SearchCommandDialog = ({ 
  open, 
  setOpen, 
  query, 
  setQuery, 
  recentSearches, 
  sources, 
  onSearch 
}: SearchCommandDialogProps) => {
  const { t } = useLanguage();

  return (
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
                onSelect={() => onSearch(search)}
              >
                <Search className="mr-2 h-4 w-4" />
                {search}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading={t('trendingSearches')}>
            <CommandItem onSelect={() => onSearch("iPhone 15")}>
              <span className="text-primary mr-2">1</span>
              iPhone 15
            </CommandItem>
            <CommandItem onSelect={() => onSearch("Samsung TV")}>
              <span className="text-primary mr-2">2</span>
              Samsung TV
            </CommandItem>
            <CommandItem onSelect={() => onSearch("PlayStation 5")}>
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
  );
};

export default SearchCommandDialog;
