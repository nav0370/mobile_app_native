import React from "react";
import { View, Animated } from "react-native";

import styles from "./styles";

const TimeBar = (props) => {
  const { progress, bufferBar } = props;
  let width = progress;
  let width1 = bufferBar;
  return (
    <View style={styles.container}>
      <Animated.View
      noShadow 
        style={[styles.progress, { width: width1, backgroundColor: "#c2c4c6" }]}
      />
      <Animated.View style={[styles.progress, { width: width }]} />
    </View>
  );
};
export default TimeBar;
