import Theme from '../styles/theme';
import styles from '../components/Header/header.css';
import confetti from '../elements/Confetti/confettiStyles.css';
import fonts from '../styles/fonts.css';
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'react-feather';

import { createContext } from 'react';

export const ThemeContext = createContext(null);

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState('dark');
  const [loading, setLoading] = useState(true);

  const toggleTheme = () => {
    setTheme((curr) => (curr == 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </ThemeContext.Provider>
  );
}
