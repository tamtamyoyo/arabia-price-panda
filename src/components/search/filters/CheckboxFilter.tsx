
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';

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
  return (
    <div className="mb-6">
      <h3 className="text-sm font-medium mb-3">{title}</h3>
      <div className="space-y-3">
        {options.map((option) => (
          <label key={option} className="flex items-center gap-2 cursor-pointer">
            <Checkbox 
              id={`checkbox-${option}`} 
              checked={selectedOptions.includes(option)}
              onCheckedChange={() => onToggleOption(option)}
            />
            <span className="text-sm">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CheckboxFilter;
