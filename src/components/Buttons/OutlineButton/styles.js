import { StyleSheet } from 'react-native'

import Colors from 'app/src/Theme/Colors'
import Fonts from 'app/src/Theme/Fonts'

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
    },
    buttonLabel: {
      backgroundColor: Colors.transparent,
      width: '100%',
      height: 60,
      paddingHorizontal: 5,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 0,
      borderColor: Colors.primary,
      borderWidth: 2,
      borderRadius: 10,
      marginBottom: 10,
    },
    buttonText: {
      textAlign: 'center',
      fontSize: Fonts.input,
      color: Colors.primary,
      fontFamily: 'Lato-Regular',
    },
})

export default styles