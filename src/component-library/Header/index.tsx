import React, { memo } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import styles from './styles';

export interface Props {
  title?: String;
}


function Header({ title }: Props) {

  return (
    <View style={StyleSheet.flatten([styles.toolbar, styles.inner])}>
        <Text style={styles.text}>{title}</Text>
    </View>
  );
}

Header.defaultProps = {
  back: true,
};

export default memo(Header);
