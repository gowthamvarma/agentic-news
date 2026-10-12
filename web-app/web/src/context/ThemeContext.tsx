import React, { createContext, useContext, useState, useEffect } from 'react';

export interface ThemeOption {
  id: string;
  name: string;
  icon: string;
}

export const DAISY_THEMES: ThemeOption[] = [
  { id: 'dark', name: 'Dark', icon: '🌙' },
  { id: 'night', name: 'Night', icon: '🌃' },
  { id: 'dim', name: 'Dim', icon: '🌘' },
  { id: 'sunset', name: 'Sunset', icon: '🌆' },
  { id: 'synthwave', name: 'Synthwave', icon: '🌆' },
  { id: 'cyberpunk', name: 'Cyberpunk', icon: '⚡' },
  { id: 'dracula', name: 'Dracula', icon: '🧛' },
  { id: 'luxury', name: 'Luxury', icon: '💎' },
  { id: 'black', name: 'Black', icon: '⬛' },
  { id: 'coffee', name: 'Coffee', icon: '☕' },
  { id: 'forest', name: 'Forest', icon: '🌲' },
  { id: 'halloween', name: 'Halloween', icon: '🎃' },
  { id: 'business', name: 'Business', icon: '💼' },
  { id: 'aqua', name: 'Aqua', icon: '🌊' },
  { id: 'emerald', name: 'Emerald', icon: '💚' },
  { id: 'corporate', name: 'Corporate', icon: '🏢' },
  { id: 'nord', name: 'Nord', icon: '❄️' },
  { id: 'winter', name: 'Winter', icon: '⛄' },
  { id: 'light', name: 'Light', icon: '☀️' },
  { id: 'cupcake', name: 'Cupcake', icon: '🧁' },
  { id: 'bumblebee', name: 'Bumblebee', icon: '🐝' },
  { id: 'retro', name: 'Retro', icon: '📻' },
  { id: 'valentine', name: 'Valentine', icon: '💖' },
  { id: 'garden', name: 'Garden', icon: '🌻' },
  { id: 'lofi', name: 'Lofi', icon: '🎧' },
  { id: 'pastel', name: 'Pastel', icon: '🎨' },
  { id: 'fantasy', name: 'Fantasy', icon: '🦄' },
  { id: 'wireframe', name: 'Wireframe', icon: '📐' },
  { id: 'cmyk', name: 'CMYK', icon: '🖨️' },
  { id: 'autumn', name: 'Autumn', icon: '🍂' },
  { id: 'acid', name: 'Acid', icon: '🧪' },
  { id: 'lemonade', name: 'Lemonade', icon: '🍋' },
];

interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  setTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<string>(() => {
    return localStorage.getItem('agentic_news_theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('agentic_news_theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export const isDarkTheme = (theme: string): boolean => {
  const darkThemes = [
    'dark',
    'night',
    'dim',
    'sunset',
    'synthwave',
    'cyberpunk',
    'dracula',
    'luxury',
    'black',
    'coffee',
    'forest',
    'halloween',
    'business',
    'aqua',
  ];
  return darkThemes.includes(theme);
};
