import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  // Initialize theme after mount to avoid hydration mismatch
  useEffect(() => {
    // Check localStorage first
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') {
      setTheme(stored);
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(stored);
      localStorage.setItem('theme', stored);
    } else {
      // Default to dark mode
      setTheme('dark');
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }

    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Update document class and localStorage when theme changes after mount
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
    console.log('[ThemeContext] Theme changed to:', theme, '- class applied to document');
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      console.log('[ThemeContext] Toggle clicked - changing from', prev, 'to', newTheme);
      return newTheme;
    });
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
