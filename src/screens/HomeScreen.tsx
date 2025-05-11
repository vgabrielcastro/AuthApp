import { Box, Button, ButtonText, Text } from '@gluestack-ui/themed';
import React from 'react';

import { useAuth } from '../context/AuthContext';

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
    logout();
  };

  return (
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
          Olá{user?.name ? `, ${user.name}` : ''} 👋
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
  );
}
