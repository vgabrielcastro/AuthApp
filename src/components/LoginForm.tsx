import {
  Button,
  ButtonText,
  EyeIcon,
  EyeOffIcon,
  FormControl,
  Icon,
  Input,
  InputField,
  Pressable,
  Spinner,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import React, {useState} from 'react';
import {Controller} from 'react-hook-form';
import {useThemeStore} from '../store/themeStore';
import {useAppTheme} from '../themes';
import {LoginFormProps} from '../types/interface.login';

export default function LoginForm({
  control,
  errors,
  onSubmit,
  isLoading,
}: LoginFormProps) {
  const {theme} = useAppTheme();
  const {isDark} = useThemeStore();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <VStack gap={16}>
      <FormControl isInvalid={!!errors.email}>
        <Controller
          name="email"
          control={control}
          rules={{required: true, pattern: /^\S+@\S+$/i}}
          render={({field: {onChange, value}}) => (
            <Input
              borderWidth={1}
              borderColor={theme.colors.border}
              height={48}
              backgroundColor={theme.colors.inputs}
              borderRadius={8}
              paddingLeft={12}>
              <InputField
                placeholder="E-mail"
                onChangeText={onChange}
                value={value}
                keyboardType="email-address"
                fontSize={15}
                color={theme.colors.text}
                textAlignVertical="center"
                paddingTop={12}
                placeholderTextColor={theme.colors.placeholder}
              />
            </Input>
          )}
        />
        {errors.email && (
          <Text color={theme.colors.error} fontSize={13} marginTop={2}>
            Email inválido
          </Text>
        )}
      </FormControl>

      <FormControl isInvalid={!!errors.password}>
        <Controller
          name="password"
          control={control}
          rules={{required: true}}
          render={({field: {onChange, value}}) => (
            <Input
              borderWidth={1}
              borderColor={theme.colors.border}
              height={48}
              backgroundColor={theme.colors.inputs}
              borderRadius={8}
              paddingLeft={12}
              flexDirection="row"
              alignItems="center">
              <InputField
                placeholder="Senha"
                type={showPassword ? 'text' : 'password'}
                onChangeText={onChange}
                value={value}
                fontSize={15}
                color={theme.colors.text}
                flex={1}
                textAlignVertical="center"
                paddingLeft={0}
                placeholderTextColor={theme.colors.placeholder}
              />
              <Pressable onPress={() => setShowPassword(v => !v)} padding={14}>
                <Icon
                  as={showPassword ? EyeIcon : EyeOffIcon}
                  width={22}
                  height={22}
                  color={
                    isDark ? theme.colors.white : theme.colors.gray
                  }
                />
              </Pressable>
            </Input>
          )}
        />
        {errors.password && (
          <Text color={theme.colors.error} fontSize={13} marginTop={2}>
            Senha obrigatória
          </Text>
        )}
      </FormControl>

      <Button
        onPress={onSubmit}
        backgroundColor={theme.colors.black}
        height={46}
        borderRadius={22}
        marginBottom={4}
        justifyContent="center"
        isDisabled={isLoading}>
        {isLoading ? (
          <Spinner color="#fff" />
        ) : (
          <ButtonText
            color={theme.colors.textButton}
            fontSize={16}
            fontWeight="bold"
            textAlign="center"
            width="100%">
            Login
          </ButtonText>
        )}
      </Button>
    </VStack>
  );
}
