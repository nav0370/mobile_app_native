import { StyleSheet } from 'react-native'

import Colors from 'app/src/Theme/Colors'
import Fonts from 'app/src/Theme/Fonts'

const styles = StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttonLabel: {
      backgroundColor: Colors.transparent,
      width: '100%',
      height: 60,
      paddingHorizontal: 5,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
      marginTop: 0
    },
    buttonText: {
      textAlign: 'center',
      fontSize: Fonts.input,
      color: Colors.darkGrey,
      fontFamily: 'Lato-Regular'
    },
})

export default styles