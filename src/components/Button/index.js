import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import theme, { Box } from "../../Theme";

const Button = ({ variant, label, onPress, children, loading, style }) => {
  const backgroundColor =
    variant === "primary"
      ? theme.colors.primary
      : variant === "transparent"
      ? "transparent"
      : theme.colors.grey;
  const color =
    variant === "primary" ? theme.colors.white : theme.colors.secondary;

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor, ...style }]}
      {...{ onPress }}
    >
      <View>
        {children ? (
          children
        ) : (
          <Box justifyContent='center' alignItems='center' flexDirection='row'>
            {loading ? (
              <ActivityIndicator
                size='large'
                color='#ffffff'
                style={styles.spinner}
              />
            ) : (
              <Text style={[styles.label, { color }]}>{label}</Text>
            )}
          </Box>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 15,
    textAlign: "center",
    fontWeight: "800",
  },
  spinner: {
    marginRight: 8,
  },
});
