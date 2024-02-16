import { createContext, useState, useContext, useEffect, useRef, FunctionComponent, SetStateAction, Dispatch, ReactNode } from 'react';

interface ThemeContextType {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: FunctionComponent<ThemeProviderProps> = (props) => {
  const [theme, setTheme] = useState('daytime');

  // apparemment pour éviter les re-renders inutiles
  const lastSetTimeRef = useRef<number>(0);

  useEffect(() => {
    const hour = new Date().getHours();

    if (Math.abs(hour - lastSetTimeRef.current) > 0.5) {
      lastSetTimeRef.current = hour;

      // mon échelle jour-nuit : true entre 6 heures du matin et 18 heures
      const shouldSetDaytime = hour >= 6 && hour < 17; 
      
      setTheme((prevTheme) => (prevTheme === 'daytime' && !shouldSetDaytime ? 'nighttime' : prevTheme === 'nighttime' && shouldSetDaytime ? 'daytime' : prevTheme));
    }
  }, []);

  const contextValue: ThemeContextType = { theme, setTheme };

  return (
    <ThemeContext.Provider value={contextValue}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
