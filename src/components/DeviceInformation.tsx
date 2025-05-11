import { Box, Text } from '@gluestack-ui/themed';
import React from 'react';
import { useAppTheme } from '../themes';
import useDeviceInformation from '../hooks/nativeInfo';

export default function DeviceInformation() {
  const { deviceName, osVersion } = useDeviceInformation();
  const {theme} = useAppTheme();

  return (
    <Box
      backgroundColor={theme.colors.border}
      padding={20}
      borderRadius={12}
      width="100%"
      marginBottom={24}
      maxWidth={400}
    >
      <Text fontSize={18} fontWeight="600" marginBottom={12} color={theme.colors.text}>
        Informações do Dispositivo 📱
      </Text>
      <Text style={{ color: theme.colors.text }}>Nome: {deviceName}</Text>
      {osVersion && <Text style={{ color: theme.colors.text }}>Versão do Sistema: {osVersion}</Text>}
    </Box>
  );
}
