import { StyleSheet, Dimensions } from 'react-native'

import Colors from 'app/src/Theme/Colors'
import Fonts from 'app/src/Theme/Fonts'

const HEIGHT = Dimensions.get("window").height;

const styles = StyleSheet.create({
  tabWrap: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    width: 30,
    height: 30
  },
  img: {
    height: HEIGHT > 740 ? 90 : 80,
    width: HEIGHT > 740 ? 90 : 80,
    resizeMode: 'cover',
    marginTop: -7
  },
  activeText: {
    fontSize: Fonts.medium,
    color: Colors.primary,
    fontFamily: "Lato-Regular",
    paddingTop: 5
  },
  inActiveText: {
    fontSize: Fonts.medium,
    color: Colors.lightGrey,
    fontFamily: "Lato-Regular",
    paddingTop: 5
  },
})

export default styles