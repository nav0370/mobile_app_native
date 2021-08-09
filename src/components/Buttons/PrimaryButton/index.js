import React from 'react'
import {
  TouchableOpacity,
  View,
  ActivityIndicator,
  Text
} from 'react-native'

import Colors from 'app/src/Theme/Colors'

import styles from './styles'

const PrimaryButton = props => {
  const {
    loading,
    label,
    disabled,
    onTap
  } = props
  return (
    <View style={!disabled ? styles.buttonPrimary : { opacity: 0.4, ...styles.buttonPrimary }}>
      <TouchableOpacity
        disabled={disabled}
        style={styles.container}
        onPress={onTap}
      >
        {loading ? (
            <ActivityIndicator color={Colors.white} size={40}/>
        ) : (
          <Text style={styles.buttonText}>{label}</Text>
        )}
      </TouchableOpacity>
    </View>
  )
}

export default PrimaryButton