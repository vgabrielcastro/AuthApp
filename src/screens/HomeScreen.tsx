import {
  Box,
  Button,
  ButtonText,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Text,
} from '@gluestack-ui/themed';
import React from 'react';

import { Platform } from 'react-native';
import { useAuth } from '../context/AuthContext';

import Toast from 'react-native-toast-message';
import DeviceInformation from '../components/DeviceInformation';
import MoreInfo from '../components/MoreInfo';
import ThemeInfo from '../components/ThemeInfo';
import ThemeToggleButton from '../components/ThemeToggleButton';
import { useAppTheme } from '../themes';

export default function HomeScreen() {
  const {user, logout} = useAuth();
  const {theme} = useAppTheme();

  const today = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const handleLogout = async () => {
    Toast.show({
      type: 'info',
      text1: 'Até logo! 👋 ',
      text2: 'Saindo...',
    });
    logout();
  };

  return (
    <SafeAreaView flex={1} backgroundColor={theme.colors.background}>
      <KeyboardAvoidingView
        flex={1}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView
          flex={1}
          backgroundColor={theme.colors.background}
          keyboardShouldPersistTaps="handled"
          contentInsetAdjustmentBehavior="automatic">
          <Box
            flex={1}
            justifyContent={'flex-start'}
            alignItems={'center'}
            backgroundColor={theme.colors.background}
            padding={24}>
            <Box marginTop={50} marginBottom={32} alignItems={'center'}>
              <Text
                fontSize={32}
                fontWeight={'bold'}
                color={theme.colors.text}
                textAlign={'center'}>
                Olá{user?.name ? `, ${user.name}` : ''} 😊
              </Text>
              <Text
                fontSize={20}
                fontWeight={'bold'}
                color={theme.colors.text}
                textAlign={'center'}
                marginTop={8}>
                Bem-vindo ao app de teste com React Native!
              </Text>
              <Text
                fontSize={16}
                fontWeight={'bold'}
                color={theme.colors.text}
                textAlign={'center'}
                marginTop={12}
                opacity={0.7}>
                Hoje é {today}
              </Text>
            </Box>

            <MoreInfo />
            <DeviceInformation />
            <ThemeInfo />
            <ThemeToggleButton />

            <Box
              padding={16}
              width={'100%'}
              maxWidth={400}
              marginTop={24}
              opacity={0.7}>
              <Button
                onPress={handleLogout}
                backgroundColor={theme.colors.black}
                height={46}
                borderRadius={22}
                justifyContent={'center'}>
                <ButtonText
                  color={theme.colors.textButton}
                  fontSize={16}
                  borderRadius={22}
                  justifyContent={'center'}
                  fontWeight={'bold'}
                  textAlign={'center'}>
                  Sair
                </ButtonText>
              </Button>
            </Box>
          </Box>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
