import { useThemeStore } from '../store/themeStore';
import { darkTheme } from './dark';
import { lightTheme } from './light';

export function useAppTheme() {
  const {isDark} = useThemeStore();

  return {
    theme: isDark ? darkTheme : lightTheme,
  };
}
