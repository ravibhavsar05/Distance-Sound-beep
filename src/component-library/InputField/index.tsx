import React, { Ref, forwardRef } from 'react';
import {
  View,
  TextInput as RNTextInput,
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  Text
} from 'react-native';
import styles from './styles';

export interface Props {
  value: any;
  onChange(newValue: any): void;
  placeholder?: string;
  label?: string;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  returnKeyType?: ReturnKeyTypeOptions;
  onKeyPress?(e: NativeSyntheticEvent<TextInputKeyPressEventData>): void;
  style?: any;
  fieldStyle?: any;
}

function Input(
  {
    value,
    onChange,
    label,
    placeholder,
    keyboardType = 'default',
    autoCapitalize,
    returnKeyType = 'done',
    onKeyPress,
    style,
    fieldStyle,
  }: Props,
  ref: Ref<RNTextInput>,
) {

  return (
    <View style={[styles.control, style]}>
      {label && (
        <Text style={styles.label}>{label} </Text>
      )}
      <View style={style}>

        <RNTextInput
          ref={ref}
          style={[
            styles.field,
            fieldStyle,
          ]}
          value={value}
          onChangeText={onChange}
          placeholder={placeholder}
          placeholderTextColor='gray'
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          autoCapitalize={autoCapitalize}
          onKeyPress={onKeyPress}
          allowFontScaling={false}
        />
      </View>
    </View>
  );
}

export default forwardRef(Input);
