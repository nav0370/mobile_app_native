import { StyleSheet, Dimensions } from "react-native";

import Colors from "app/src/Theme/Colors";
import Fonts from "app/src/Theme/Fonts";

const styles = StyleSheet.create({
  container: { padding: 16, justifyContent: "center", alignItems: "center" },
  switchContainer: {
    borderColor: Colors.primary,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
    width: "80%",
  },
  active: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  inActive: {
    flex: 1,
    backgroundColor: Colors.white,
    color: Colors.white,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  activeText: {
    fontSize: Fonts.regular,
    color: Colors.white,
    fontFamily: "Lato-Regular",
  },
  inActiveText: {
    fontSize: Fonts.regular,
    color: Colors.primary,
    fontFamily: "Lato-Regular",
  },
});

export default styles;
