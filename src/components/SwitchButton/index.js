import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import G from "app/src/Theme/GlobalStyles";
import styles from "./styles";

const SwitchButton = (props) => {
  const {
    firstSelected,
    firstLabel,
    secondLabel,
    onSelectFirstOption,
    onSelectedSecondOption,
  } = props;
  return (
    <View style={styles.container}>
      <View style={styles.switchContainer}>
        <TouchableOpacity
          style={firstSelected ? styles.active : styles.inActive}
          activeOpacity={0.7}
          onPress={onSelectFirstOption}
        >
          <Text style={firstSelected ? styles.activeText : styles.inActiveText}>
            {firstLabel}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={!firstSelected ? styles.active : styles.inActive}
          activeOpacity={0.7}
          onPress={onSelectedSecondOption}
        >
          <Text
            style={!firstSelected ? styles.activeText : styles.inActiveText}
          >
            {secondLabel}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SwitchButton;
