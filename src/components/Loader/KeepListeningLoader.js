import React from 'react'
import {
    ScrollView,
    View,
    StyleSheet
} from 'react-native'
import Loader from './index'

import Colors from 'app/src/Theme/Colors'

const KeepListeningLoader = () => {
    return (
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} >
            <View style={styles.container}>
                <Loader
                    style={styles.imageBackground}
                    opacity={300}
                />
                <Loader style={styles.timebar} />
                <Loader style={styles.time} />
            </View>
            <View style={styles.container}>
                <Loader
                    style={styles.imageBackground}
                    opacity={300}
                />
                <Loader style={styles.timebar} />
                <Loader style={styles.time} />
            </View>
            <View style={styles.container}>
                <Loader
                    style={styles.imageBackground}
                    opacity={300}
                />
                <Loader style={styles.timebar} opacity={300}/>
                <Loader style={styles.time} opacity={300} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginRight: 15,
        backgroundColor: Colors.lightGrey,
    },
    imageBackground: {
        height: 200,
        width: 200,
        backgroundColor: Colors.darkGrey,
        marginBottom: 5
    },
    timebar: {
        height: 7,
        width: 200,
        backgroundColor: Colors.darkGrey,
    },
    time: {
        marginTop: 5,
        height: 10,
        width: 60,
        backgroundColor: Colors.darkGrey,
    }
})

export default KeepListeningLoader