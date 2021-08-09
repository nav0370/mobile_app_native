import { StyleSheet, Dimensions } from 'react-native'
import Colors from 'app/src/Theme/Colors'
import Fonts from 'app/src/Theme/Fonts'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    buttonWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        justifyContent: 'center',
        padding: 5
    },
    buttonText: {
        fontFamily: 'Lato-Regular',
        color: Colors.darkGrey,
        fontSize: Fonts.regular
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    month: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    row: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    monthNumber: {
        fontFamily: 'Lato-Regular',
        color: Colors.primary,
        fontSize: 100
    },
    normalText: {
        fontFamily: 'Lato-Regular',
        color: Colors.darkGrey,
        fontSize: Fonts.mlarge
    }
})

export default styles