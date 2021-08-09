import React from "react";
import { View, Text, Platform, StatusBar, StyleSheet } from "react-native";
import theme from "../../theme";

const Header = ({ title, left, icon }) => {
  return (
    <View style={styles.header}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={styles.left}>{left}</View>
        <Text style={styles.title}>{title}</Text>
        <View>{icon}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  left: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 6,
  },
  header: {
    paddingTop: Platform.OS === "ios" ? 5 : 6,
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 14,
    paddingVertical: 7,
    backgroundColor: theme.colors.white,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.65,
    elevation: 8,
  },
  title: {
    fontFamily: theme.font.fontSemiBold,
    fontSize: 18,
    flex: 1,
    margin: 5,
    textAlign: "center",
  },
});

export default Header;
