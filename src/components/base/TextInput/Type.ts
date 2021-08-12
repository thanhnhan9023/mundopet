import {Control} from 'react-hook-form';
import {TextInputProps} from 'react-native';

export interface FormInputProps extends TextInputProps {
  name: string;
  control: Control<any>;
  defaultValue?: any;
}
