import { Box, Text } from '@gluestack-ui/themed';
import React, { useEffect, useState } from 'react';
import { NativeModules } from 'react-native';
import { useAppTheme } from '../themes';

const {DeviceName} = NativeModules;

export default function DeviceInformation() {
  const [deviceName, setDeviceName] = useState('Carregando...');
  const {theme} = useAppTheme();

  useEffect(() => {
    DeviceName.getDeviceName()
      .then((name: string) => setDeviceName(name))
      .catch((err: any) => {
        console.error('Erro ao obter nome:', err);
        setDeviceName('Erro ao obter nome');
      });
  }, []);

  return (
    <Box
      backgroundColor={theme.colors.border}
      padding={20}
      borderRadius={12}
      width={'100%'}
      marginBottom={24}
      maxWidth={400}>
      <Text
        fontSize={18}
        fontWeight={'600'}
        marginBottom={12}
        color={theme.colors.text}>
        Informações do Dispositivo 📱
      </Text>

      <Text style={{color: theme.colors.text}}>{deviceName}</Text>
    </Box>
  );
}
