import { StyleSheet, TextStyle } from 'react-native';

interface Styles {
  button: TextStyle;
  content: TextStyle;
  text: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  button: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.24,
    shadowRadius: 4,
    borderRadius: 2,
    backgroundColor: 'green',
  },
  content: {
    borderRadius: 2,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    marginHorizontal: 24
  },
  text: {
    color: 'white',
    fontWeight: 'bold'
  },
});

export default styles;
