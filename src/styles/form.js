import {StyleSheet} from 'react-native'
import colors from './colors'

const formStyles = StyleSheet.create({
    input:{
        marginBottom: 20,
        backgroundColor: colors.primary,
        color: colors.fontLight,
        fontSize: 16
    },
    primaryBtn: {
        backgroundColor: colors.lightDark,
        padding: 10,
        marginTop: 20,
        color: colors.fontLight
    },
    secondaryBtn: {
        marginTop: 30,
        color: colors.lightDark,
        padding: 10,
    }
});

export default formStyles;