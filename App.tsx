import { GluestackUIProvider } from '@gluestack-ui/themed';
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import Toast from 'react-native-toast-message';
import { toastConfig } from './src/components/ui/toastConfig';
import { AuthProvider } from './src/context/AuthContext';
import { useThemeStore } from './src/hooks/themeStore';
import AppRoutes from './src/routes/AppRoutes';
import { useAppTheme } from './src/themes';
import SplashScreen from 'react-native-splash-screen';

function App(): React.JSX.Element {
  const {theme} = useAppTheme();
  const {isDark} = useThemeStore();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <GluestackUIProvider config={theme}>
      <AuthProvider>
        <StatusBar
          barStyle={isDark ? 'light-content' : 'dark-content'}
          backgroundColor={theme.colors.background}
        />
        <AppRoutes />
        <Toast
          config={toastConfig}
          position="top"
          topOffset={50}
          bottomOffset={30}
        />
      </AuthProvider>
    </GluestackUIProvider>
  );
}

export default App;
