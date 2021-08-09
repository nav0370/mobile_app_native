import React, { useEffect } from "react";
import { Image, StyleSheet, Text } from "react-native";
import * as Animatable from "react-native-animatable";
import error from "../../../assets/error.png";
import success from "../../../assets/success.png";
import theme from "../../theme";

const CustomSnackBar = ({ snackbar, setSnackbar, time, noduration }) => {
  useEffect(() => {
    if (snackbar?.visible && !noduration) {
      setTimeout(() => {
        setSnackbar({ visible: false, text: "", error: false });
      }, time || 3000);
    }
  }, [snackbar?.visible]);
  if (snackbar.visible) {
    return (
      <Animatable.View
        easing="ease-out"
        animation="bounceIn"
        style={styles.body}
      >
        <Image
          source={snackbar?.error ? error : success}
          style={{ width: 26, height: 26 }}
        />
        <Text
          style={{
            fontFamily: theme.font.fontMedium,
            marginLeft: 10,
            fontSize: 13,
          }}
        >
          {snackbar?.text}
        </Text>
      </Animatable.View>
    );
  }
  return <></>;
};

export default CustomSnackBar;

const styles = StyleSheet.create({
  body: {
    backgroundColor: theme.colors.grey,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
    borderRadius: 30,
  },
});
