import React from 'react';

interface ThemeContext {
  theme: string;
  toggleTheme?: () => void;
}

export const defaultContext: ThemeContext = {
  theme: 'light',
};

export const ThemeContext = React.createContext<ThemeContext>(defaultContext);
