// Modules
import React, { createContext, ReactNode, useState } from 'react';

type Themes = 'light' | 'dark';

type ThemeContext = {
  theme: Themes;
  setTheme: (currentTheme: Themes) => void;
};

export const ThemeContext = createContext({} as ThemeContext);

type Props = {
  children: ReactNode;
};

export default function ThemeState({ children }: Props) {
  //
  const [currentTheme, setCurrentTheme] = useState<Themes>('light');

  function setTheme(currentTheme: Themes) {
    if (currentTheme === 'dark') setCurrentTheme('light');
    else setCurrentTheme('dark');
  }

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
