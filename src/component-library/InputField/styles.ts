import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface Styles {
    field: ViewStyle;
    control: ViewStyle;
    label: TextStyle;
}

const styles = StyleSheet.create<Styles>({
    control: {
        marginBottom: 32,
    },
    label: {
        color: 'gray',
        textTransform: 'uppercase',
        paddingBottom: 10
    },
    field: {
        width: '100%',
        fontSize: 16,
        lineHeight: 22,
        letterSpacing: 0.36,
        color: 'black',
        borderBottomColor: 'rgba(199, 199, 212, 0.4)',
        borderBottomWidth: 2,
        borderRadius: 1,
        paddingBottom: 6,
    }
});

export default styles;