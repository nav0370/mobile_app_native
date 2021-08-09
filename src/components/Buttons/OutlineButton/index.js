import React from 'react'
import {
  TouchableOpacity,
  View,
  ActivityIndicator,
  Text
} from 'react-native'

import Colors from 'app/src/Theme/Colors'
import Icon from "react-native-vector-icons/AntDesign";
import styles from './styles'

const OutlineButton = props => {
  const {
    loading,
    label,
    disabled,
    onTap,
    icon
  } = props
  return (
    <View style={styles.buttonLabel}>
      <TouchableOpacity
        disabled={disabled || loading}
        style={styles.container}
        onPress={onTap}
      >
        {icon && <Icon name={icon} size={26} color={Colors.primary} style={{position: 'absolute',left: 10}}/>}
        {loading ? (
          <ActivityIndicator color={Colors.primary} size={40}/>
        ) : (
          <Text style={styles.buttonText}>{label}</Text>
        )}
      </TouchableOpacity>
    </View>
  )
}

export default OutlineButton