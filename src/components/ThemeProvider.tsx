
import React, { ReactNode, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { theme } = useLanguage();
  
  useEffect(() => {
    // Apply theme to document element for global CSS variables
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);
  
  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'dark' : ''}`}>
      {children}
    </div>
  );
};

export default ThemeProvider;
