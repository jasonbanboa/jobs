enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
};

export const useTheme = () => useState<string>('theme', () => Theme.LIGHT);

export const toggleTheme = () => {
  const theme = useTheme();
  theme.value = 
    theme.value === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
};