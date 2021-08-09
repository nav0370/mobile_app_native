import React from 'react'
import {
    ScrollView,
    View,
    StyleSheet
} from 'react-native'
import Loader from './index'

import Colors from 'app/src/Theme/Colors'

const AudibleStarLoader = () => {
    return (
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} >
            <View style={styles.container}>
                <Loader
                    style={styles.imageBackground}
                    opacity={300}
                />
                <Loader style={styles.text} />
                <Loader style={styles.text} />
                <Loader style={styles.ratingbar} />
            </View>
            <View style={styles.container}>
                <Loader
                    style={styles.imageBackground}
                    opacity={300}
                />
                <Loader style={styles.text} />
                <Loader style={styles.text} />
                <Loader style={styles.ratingbar} />
            </View>
            <View style={styles.container}>
                <Loader
                    style={styles.imageBackground}
                    opacity={300}
                />
                <Loader style={styles.text} />
                <Loader style={styles.text} />
                <Loader style={styles.ratingbar} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginRight: 15
    },
    imageBackground: {
        height: 160,
        width: 160,
        backgroundColor: Colors.lightGrey,
        marginBottom: 5
    },
    ratingbar: {
        marginTop: 5,
        height: 7,
        width: 120,
        backgroundColor: Colors.lightGrey,
    },
    text: {
        marginTop: 5,
        height: 10,
        width: 60,
        backgroundColor: Colors.lightGrey,
    }
})

export default AudibleStarLoader