import { StyleSheet, ViewStyle } from 'react-native';

interface Styles {
  loading: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  loading: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 100,
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
