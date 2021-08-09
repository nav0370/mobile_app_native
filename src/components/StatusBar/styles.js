import { StyleSheet, Platform } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height';

const styles = StyleSheet.create({
  container: {
    height: getStatusBarHeight(),
    backgroundColor: 'transparent',
  }
})

export default styles