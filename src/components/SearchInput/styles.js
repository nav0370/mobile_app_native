import { StyleSheet } from "react-native";

import Colors from "app/src/Theme/Colors";
import Fonts from "app/src/Theme/Fonts";

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0,
    width: "100%",
    backgroundColor: Colors.lightGrey,
    paddingHorizontal: 6,
    borderRadius: 4,
  },
  inputWrap: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  iconWrap: {
    justifyContent: "center",
    marginLeft: 10,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  input: {
    flex: 1,
    fontSize: Fonts.regular,
    color: Colors.darkGrey,
    fontFamily: "Lato-Regular",
    padding: 0,
  },
});

export default styles;
