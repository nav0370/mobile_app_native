import { StyleSheet, Dimensions } from 'react-native'
import Colors from 'app/src/Theme/Colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 50
    },
    pictureWrap: {
        justifyContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    picture: {
        width: 150,
        height: 150,
        borderRadius: 75
    },
    cameraWrap: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary
    },
    cameraIcon: {
        width: 30,
        height: 30
    },
    form: {
        marginVertical: 20
    }
})

export default styles