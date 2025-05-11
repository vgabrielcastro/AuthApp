import { Box, Text } from '@gluestack-ui/themed';
import React from 'react';
import { useAppTheme } from '../themes';

export default function MoreInfo() {
  const {theme} = useAppTheme();

  return (
    <Box padding={20} borderRadius={12} width={'100%'} marginBottom={24}>
      <Text fontSize={15} color={theme.colors.text} lineHeight={22}>
        O Auth Native 🔐 Demonstra autenticação de login com fake token, Aqui
        você pode visualizar:
        {'\n'}• Versão do sistema operacional (iOS)
        {'\n'}• Fabricante e modelo do seu dispositivo (iOS/Android)
        {'\n'}• Data e hora do local
        {'\n'}• E o modo de exibição atual (claro ou escuro)
      </Text>
    </Box>
  );
}
