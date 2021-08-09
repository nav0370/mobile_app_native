import { StyleSheet, Platform } from 'react-native'

import Colors from 'app/src/Theme/Colors'
import Fonts from 'app/src/Theme/Fonts'

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttonPrimary: {
      backgroundColor: Colors.primary,
      width: '100%',
      height: 60,
      paddingHorizontal: 5,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 0,
      borderRadius: 10,
      marginBottom: 10
    },
    buttonText: {
      textAlign: 'center',
      fontSize: Fonts.input,
      color: Colors.white,
      fontFamily: 'Lato-Regular'
    },
})

export default styles