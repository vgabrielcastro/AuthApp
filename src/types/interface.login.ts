import { Control } from 'react-hook-form';

export interface LoginFormProps {
  control: Control<any>;
  errors: any;
  onSubmit: () => void;
  isLoading: boolean;
}
