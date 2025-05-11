import { StyleSheet } from 'react-native';

export const toastStyles = StyleSheet.create({
  toastBase: {
    borderLeftWidth: 6,
    borderRadius: 8,
  },
  toastSuccess: {
    borderLeftColor: '#22c55e',
  },
  toastError: {
    borderLeftColor: '#ef4444',
  },
  toastInfo: {
    borderLeftColor: '#3b82f6',
  },
  contentContainer: {
    paddingHorizontal: 16,
  },
  text1: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  text2: {
    fontSize: 14,
    color: '#4b5563',
  },
});
