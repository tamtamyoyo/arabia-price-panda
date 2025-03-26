
import React, { ReactNode } from 'react';
import { useLanguage } from '@/hooks/useLanguage';

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { theme } = useLanguage();
  
  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      {children}
    </div>
  );
};

export default ThemeProvider;
