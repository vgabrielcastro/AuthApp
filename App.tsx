import { GluestackUIProvider } from '@gluestack-ui/themed';
import { ToastProvider } from '@gluestack-ui/toast';
import React from 'react';
import { StatusBar } from 'react-native';
import { AuthProvider } from './src/context/AuthContext';
import { useThemeStore } from './src/hooks/themeStore';
import AppRoutes from './src/routes/AppRoutes';
import { useAppTheme } from './src/themes';

function App(): React.JSX.Element {
  const {theme} = useAppTheme();
  const {isDark} = useThemeStore();

  return (
    <GluestackUIProvider config={theme}>
      <ToastProvider>
        <AuthProvider>
          <StatusBar
            barStyle={isDark ? 'light-content' : 'dark-content'}
            backgroundColor={theme.colors.background}
          />
          <AppRoutes />
        </AuthProvider>
      </ToastProvider>
    </GluestackUIProvider>
  );
}

export default App;
