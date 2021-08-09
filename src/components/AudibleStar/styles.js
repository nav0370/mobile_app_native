import { StyleSheet, Dimensions } from "react-native";

import Colors from "app/src/Theme/Colors";
import Fonts from "app/src/Theme/Fonts";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    marginRight: 15,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    marginBottom: 4,
    marginTop: 1,
    padding: 8,
  },
  imageBackground: {
    height: height * 0.2,
    width: height * 0.2,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
  },
  information: {
    padding: 10,
    paddingBottom: 0,
  },
  title: {
    color: Colors.darkGrey,
    fontFamily: "Lato-Regular",
    fontSize: Fonts.medium,
  },
  author: {
    color: "#BDBDBD",
    fontFamily: "Lato-Regular",
    fontSize: Fonts.medium,
    marginBottom: 5,
  },
});

export default styles;
