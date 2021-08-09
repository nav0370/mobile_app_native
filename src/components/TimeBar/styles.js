import { StyleSheet } from 'react-native'
import Colors from 'app/src/Theme/Colors'

const styles = StyleSheet.create({
  container: {
    height: 7,
    width: '100%',
    backgroundColor: Colors.lightGrey,
  },
  progress: {
    backgroundColor: Colors.primary,
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  }
})

export default styles