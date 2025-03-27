
import { Store } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuCheckboxItem
} from "@/components/ui/dropdown-menu";

interface SearchSource {
  id: string;
  name: string;
  enabled: boolean;
}

interface SearchSourcesDropdownProps {
  sources: SearchSource[];
  onSourceToggle: (sourceId: string) => void;
}

const SearchSourcesDropdown = ({ sources, onSourceToggle }: SearchSourcesDropdownProps) => {
  const { t, language } = useLanguage();

  return (
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
            onCheckedChange={() => onSourceToggle(source.id)}
          >
            {source.name}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SearchSourcesDropdown;
