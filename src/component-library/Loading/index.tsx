import React from 'react';
import { StyleSheet, View, ActivityIndicator, TextStyle } from 'react-native';
import styles from './styles';

export interface Props {
  style?: TextStyle;
  size?: string,
  color?: string
}
function Loading({
  style, size, color
}: Props) {
  return (
    <View style={StyleSheet.flatten([styles.loading, style])}>
      <ActivityIndicator color="#0AA4D8" />
    </View>
  )
};

Loading.defaultProps = {
  size: 'medium',
  color: 'white',
};

export default Loading;