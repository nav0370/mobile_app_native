import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CustomBadge = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginHorizontal: 8,
    color: "#fff",
    fontWeight: "bold",
  },
  container: {
    marginHorizontal: 10,
    borderRadius: 12,
    backgroundColor: "#000000",
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
});

export default CustomBadge;
