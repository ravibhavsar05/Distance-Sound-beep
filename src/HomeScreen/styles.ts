import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface Styles {
    outer_view: ViewStyle;
    label_text: TextStyle;
    button: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
    outer_view: {
        flex: 1,
        justifyContent: 'center'
    },
    label_text: {
        textAlign:'center',
        fontSize: 18
    },
    button: {
        marginTop: 40,
    },

});

export default styles;
