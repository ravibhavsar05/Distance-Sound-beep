import React from 'react';
import { StyleSheet, TextStyle, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export interface Props {
  style?: TextStyle;
  children?: any;
  onPress?: any;
  fontStyle?: any;
  center?: boolean;
}

function Button({
  style,
  children,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      style={StyleSheet.flatten([styles.button, styles.content, style])}
      onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}

export default Button;
