import { StyleSheet } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 17,
    fontFamily: theme.font.fontSemiBold,
  },
  icon: {
    width: 18,
    height: 18,
  },
});

export default styles;
