import { StyleSheet } from 'react-native'

import Colors from 'app/src/Theme/Colors'
import Fonts from 'app/src/Theme/Fonts'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        marginTop: 5,
        backgroundColor: Colors.white
    },
    text: {
        fontSize: Fonts.mlarge,
        color: Colors.darkGrey,
        fontFamily: 'Lato-Regular',
    }
})

export default styles