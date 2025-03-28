
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { useIsMobile } from '@/hooks/use-mobile';

interface CheckboxFilterProps {
  title: string;
  options: string[];
  selectedOptions: string[];
  onToggleOption: (option: string) => void;
}

const CheckboxFilter = ({ 
  title, 
  options, 
  selectedOptions, 
  onToggleOption 
}: CheckboxFilterProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`mb-${isMobile ? '4' : '6'}`}>
      <h3 className="text-sm font-medium mb-3">{title}</h3>
      <div className={`${isMobile ? 'grid grid-cols-2 gap-2' : 'space-y-3'}`}>
        {options.map((option) => (
          <label key={option} className="flex items-center gap-2 cursor-pointer">
            <Checkbox 
              id={`checkbox-${option}`} 
              checked={selectedOptions.includes(option)}
              onCheckedChange={() => onToggleOption(option)}
            />
            <span className="text-sm truncate">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CheckboxFilter;
