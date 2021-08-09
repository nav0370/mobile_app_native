import React from 'react'
import {
    ScrollView,
    View,
    StyleSheet
} from 'react-native'
import Loader from './index'

import Colors from 'app/src/Theme/Colors'

const AudibleLoader = () => {
    return (
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} >
            <View style={styles.container}>
                <Loader
                    style={styles.imageBackground}
                    opacity={300}
                />
            </View>
            <View style={styles.container}>
                <Loader
                    style={styles.imageBackground}
                    opacity={300}
                />
            </View>
            <View style={styles.container}>
                <Loader
                    style={styles.imageBackground}
                    opacity={300}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginRight: 15
    },
    imageBackground: {
        height: 200,
        width: 200,
        backgroundColor: Colors.lightGrey,
        marginBottom: 5
    }
})

export default AudibleLoader