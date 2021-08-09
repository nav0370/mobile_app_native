import { StyleSheet, Dimensions } from "react-native";

import Colors from "app/src/Theme/Colors";
import Fonts from "app/src/Theme/Fonts";
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
  imageBackground: {
    height: width * 0.22,
    width: width * 0.22,
    borderRadius: 10,
  },
  information: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 10,
  },
  dotIcon: {
    width: 28,
    height: 28,
    resizeMode: "contain",
  },
  title: {
    color: Colors.primary,
    fontFamily: "Lato-Regular",
    fontSize: Fonts.mlarge,
    marginBottom: 4,
  },
  text: {
    color: Colors.darkGrey,
    fontFamily: "Lato-Regular",
    fontSize: Fonts.medium,
  },
  time: {
    color: Colors.darkGrey,
    fontFamily: "Lato-Regular",
    fontSize: Fonts.small,
  },
});

export default styles;
