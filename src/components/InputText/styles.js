import { StyleSheet, Platform } from 'react-native'

import Colors from 'app/src/Theme/Colors'
import Fonts from 'app/src/Theme/Fonts'

const styles = StyleSheet.create({
    container: {
      borderBottomColor: Colors.grey,
      borderBottomWidth: 1,
      width: '100%',
      paddingBottom: Platform.OS === 'ios' ? 10 : 5,
      marginVertical: 15
    },
    inputWrap: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconWrap: {
        justifyContent: 'center',
        marginRight: 10
    },
    icon: {
        width: 30,
        height: 30,
        resizeMode: 'contain'
    },
    input: {
      flex: 1,
      fontSize: Fonts.input,
      color: Colors.darkGrey,
      fontFamily: 'Lato-Regular',
      padding: 0
    },
})

export default styles