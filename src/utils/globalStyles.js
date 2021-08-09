import { StyleSheet, Dimensions, Platform, StatusBar } from "react-native";
import theme from "../theme";

const { height, width } = Dimensions.get("window");

const GlobalStyles = StyleSheet.create({
  flexRow: {
    flexDirection: "row",
  },
  flex1: {
    flex: 1,
  },
  flexStart: {
    justifyContent: "flex-start",
  },
  flexEnd: {
    justifyContent: "flex-end",
  },
  flexBetween: {
    justifyContent: "space-between",
  },
  flexAround: {
    justifyContent: "space-around",
  },
  flexCenter: {
    justifyContent: "center",
  },
  alignCenter: {
    alignItems: "center",
  },
  textCenter: {
    textAlign: "center",
  },
  transparent: {
    backgroundColor: "transparent",
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
  rowFlexCenter: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  content: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    marginTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
  },
});

export default GlobalStyles;
