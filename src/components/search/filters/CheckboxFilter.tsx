
import React from 'react';

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
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option} className="flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              className="rounded text-primary mr-2"
              checked={selectedOptions.includes(option)}
              onChange={() => onToggleOption(option)}
            />
            <span className="text-sm">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CheckboxFilter;
