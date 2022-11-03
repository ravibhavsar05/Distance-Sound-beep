import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface Styles {
    outer_view: ViewStyle;
    label_text: TextStyle;
    button: ViewStyle;
    input_view: ViewStyle;
    loading: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
    outer_view: {
        flex: 1,
        justifyContent: 'center'
    },
    label_text: {
        fontSize: 18
    },
    button: {
        marginTop: 40,
    },
    input_view: {
        marginHorizontal: 24
    },
    loading: {
        backgroundColor: 'transparent',
      },

});

export default styles;
