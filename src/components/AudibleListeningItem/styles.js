import { StyleSheet } from 'react-native'

import Colors from 'app/src/Theme/Colors'
import Fonts from 'app/src/Theme/Fonts'

const styles = StyleSheet.create({
    container: {
      marginRight: 15
    },
    imageBackground: {
      height: 200,
      width: 200,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 5
    },
    playWrap: {
      height: 80,
      width: 80,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.lightGrey,
      opacity: 0.7,
      paddingLeft: 10,
      borderRadius: 40
    },
    play: {
      width: 40,
      height: 40
    },
    time: {
      color: Colors.darkGrey,
      fontFamily: 'Lato-Regular',
      fontSize: Fonts.medium,
      marginTop: 5
    }
})

export default styles