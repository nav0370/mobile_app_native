import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from "../../Theme";

const ShowValidation = ({ show, error }) => {
  return show ? <Text style={styles.text}>{error}</Text> : null;
};

const styles = StyleSheet.create({
  text: {
    color: theme.colors.danger,
    fontWeight: "500",
    fontFamily: theme.font.fontRegular,
  },
});

export default ShowValidation;
