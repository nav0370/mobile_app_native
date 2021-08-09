import { StyleSheet, Dimensions } from "react-native";
import theme from "../../theme";

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    height: height,
    backgroundColor: theme.colors.primary,
    flexDirection: "column",
  },
  logoWrap: {
    height: height / 3,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "33%",
    resizeMode: "contain",
  },
  content: {
    flex: 1,
    padding: 50,
    // backgroundColor: Colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  form: {
    marginTop: 30,
  },
  buttonWrap: {
    marginTop: 30,
  },
  social: {
    marginTop: 0,
  },
  socialButtonWrap: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 5,
  },
  socialText: {
    textAlign: "center",
    // fontSize: Fonts.input,
    // color: Colors.lightGrey,
    fontFamily: "Lato-Regular",
  },
  socialButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  socialImage: {
    width: 56,
    height: 56,
    resizeMode: "contain",
  },
});

export default styles;
