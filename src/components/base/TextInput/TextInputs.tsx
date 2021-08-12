import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {FormInputProps} from './Type';
import {Controller} from 'react-hook-form';

const TextInputs: React.FC<FormInputProps> = ({
  name,
  control,
  defaultValue,
  ...props
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: {onChange, onBlur, value, ref},
        fieldState: {error: fieldError},
      }) => (
        <TextInput
          {...props}
          ref={ref}
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
        />
      )}
      defaultValue={defaultValue ? defaultValue : ''}
    />
  );
};

export default TextInputs;
