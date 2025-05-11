import {
  Box,
  HStack,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Text,
} from '@gluestack-ui/themed';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Platform } from 'react-native';
import Toast from 'react-native-toast-message';
import LoginForm from '../components/LoginForm';
import { loginSchema } from '../components/schemas/loginSchema';
import ThemeToggleButton from '../components/ThemeToggleButton';
import { useAuth } from '../context/AuthContext';
import { useAppTheme } from '../themes';
import { LoginFormData } from '../types/interface.login';

export default function LoginScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const {login} = useAuth();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      setIsLoading(true);
      await login(data.email, data.password);

      Toast.show({
        type: 'success',
        text1: 'Login realizado com sucesso',
        text2: 'Você entrou no sistema 🎉',
      });
    } catch (error: any) {
      let errorMessage = 'Erro ao fazer login';

      if (error.message === 'Network Error') {
        errorMessage = 'Erro de conexão. Verifique se o servidor está rodando.';
      } else if (error.message === 'Usuário não encontrado') {
        errorMessage = 'Email não encontrado';
      } else if (error.message === 'Senha incorreta') {
        errorMessage = 'Senha incorreta';
      }

      console.log('Erro completo:', error);
      Toast.show({
        type: 'error',
        text1: 'Erro no login',
        text2: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const {theme} = useAppTheme();
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
          <Box width={'100%'} padding={24} marginTop={100}>
            <Text
              fontSize={24}
              fontWeight={'bold'}
              marginBottom={4}
              color={theme.colors.text}>
              Bem-vindo(a) Auth Native!
            </Text>

            <HStack marginBottom={32}>
              <Text fontSize={18} color={theme.colors.gray}>
                Este é um ambiente de demonstração de habilidades e conhecimento
                em React Native.
              </Text>
            </HStack>

            <LoginForm
              control={control}
              errors={errors}
              isLoading={isLoading}
              onSubmit={handleSubmit(onSubmit)}
            />
          </Box>
        </ScrollView>
      </KeyboardAvoidingView>
      <ThemeToggleButton />
    </SafeAreaView>
  );
}
