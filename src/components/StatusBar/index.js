import React from 'react'
import {
  View
} from 'react-native'

import styles from './styles'

const StatusBar = props => {
  return (
      <View style={[styles.container, props.style || {}]} />
  )
}
export default StatusBar
