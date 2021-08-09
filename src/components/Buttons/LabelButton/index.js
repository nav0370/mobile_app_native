import React from 'react'
import {
  TouchableOpacity,
  View,
  ActivityIndicator,
  Text
} from 'react-native'

import Colors from 'app/src/Theme/Colors'

import styles from './styles'

const LabelButton = props => {
  const {
    loading,
    label,
    disabled,
    onTap
  } = props
  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={disabled}
        style={styles.buttonLabel}
        onPress={onTap}
      >
        {loading ? (
          <ActivityIndicator color={Colors.primary} />
        ) : (
          <Text style={styles.buttonText}>{label}</Text>
        )}
      </TouchableOpacity>
    </View>
  )
}

export default LabelButton