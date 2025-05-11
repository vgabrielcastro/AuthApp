import {
  Box,
  HStack,
  KeyboardAvoidingView,
  ScrollView,
  Text,
} from '@gluestack-ui/themed';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Platform } from 'react-native';
import LoginForm from '../components/LoginForm';
import { loginSchema } from '../components/schemas/loginSchema';
import ThemeToggleButton from '../components/ThemeToggleButton';
import { useAppTheme } from '../themes';

export default function LoginScreen() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: any) => {
    setIsLoading(true);

    console.log('userData', data);
    setIsLoading(false);
  };

  const {theme} = useAppTheme();
  return (
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
      <ThemeToggleButton />
    </KeyboardAvoidingView>
  );
}
