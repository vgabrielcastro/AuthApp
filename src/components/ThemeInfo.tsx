import { Box, Text } from '@gluestack-ui/themed';
import React from 'react';
import { useThemeStore } from '../hooks/themeStore';
import { useAppTheme } from '../themes';

export default function ThemeInfo() {
  const {isDark} = useThemeStore();
  const {theme} = useAppTheme();

  return (
    <Box
      backgroundColor={theme.colors.border}
      padding={20}
      borderRadius={12}
      width={'100%'}
      marginBottom={24}>
      <Text fontSize={16} color={theme.colors.text} marginBottom={6}>
        Thema atual:{' '}
        <Text fontWeight={'bold'}>{isDark ? 'Escuro 🌙' : 'Claro ☀️'}</Text>
      </Text>
      <Text color={theme.colors.text}>
        Você pode alternar o tema usando o botão abaixo.
      </Text>
    </Box>
  );
}
