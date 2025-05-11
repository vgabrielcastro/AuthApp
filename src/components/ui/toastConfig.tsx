import React from 'react';
import { BaseToast, ErrorToast } from 'react-native-toast-message';
import { toastStyles } from './toast.styles';

export const toastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      style={[toastStyles.toastBase, toastStyles.toastSuccess]}
      contentContainerStyle={toastStyles.contentContainer}
      text1Style={toastStyles.text1}
      text2Style={toastStyles.text2}
    />
  ),
  error: (props: any) => (
    <ErrorToast
      {...props}
      style={[toastStyles.toastBase, toastStyles.toastError]}
      contentContainerStyle={toastStyles.contentContainer}
      text1Style={toastStyles.text1}
      text2Style={toastStyles.text2}
    />
  ),
  info: (props: any) => (
    <BaseToast
      {...props}
      style={[toastStyles.toastBase, toastStyles.toastInfo]}
      contentContainerStyle={toastStyles.contentContainer}
      text1Style={toastStyles.text1}
      text2Style={toastStyles.text2}
    />
  ),
};
