import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface Styles {
  toolbar: ViewStyle;
  inner: ViewStyle;
  text: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  toolbar: {
    paddingVertical: 15,
    backgroundColor: '#c0c0c0'
  },
  inner: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default styles;
