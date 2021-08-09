import React from 'react'
import {
    View,
    Text
} from 'react-native'
import styles from './styles'

const Title = props => {
    return (
        <View>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

export default Title