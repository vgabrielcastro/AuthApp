import { GluestackUIProvider } from '@gluestack-ui/themed';
import React from 'react';
import { StatusBar } from 'react-native';
import { useThemeStore } from './src/store/themeStore';
import { useAppTheme } from './src/themes';

function App(): React.JSX.Element {
  const {theme} = useAppTheme();
  const {isDark} = useThemeStore();

  return (
    <GluestackUIProvider config={theme}>
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor={theme.colors.background}
      />
    </GluestackUIProvider>
  );
}

export default App;
