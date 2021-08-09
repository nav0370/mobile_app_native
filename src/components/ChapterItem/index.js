import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Time from "app/src/Helpers/Time";

import Colors from "app/src/Theme/Colors";
import G from "app/src/Theme/GlobalStyles";
import styles from "./styles";

const ChapterItem = (props) => {
  const { title, time } = props.data;
  const hour = Time(time).hour;
  const min = Time(time).min;
  const second = Time(time).second;
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: props.selected ? "#FBC168" : "#fff" },
      ]}
      activeOpacity={0.7}
      onPress={() => props.onPress(props.data, props.index)}
    >
      <View style={G.flexRow}>
        <Text
          style={[
            styles.text,
            { color: props.selected ? "#fff" : Colors.darkGrey },
          ]}
        >
          {title}
        </Text>
      </View>
      <Text
        style={[
          styles.text,
          { color: props.selected ? "#fff" : Colors.darkGrey },
        ]}
      >
        {hour}:{min}:{second}
      </Text>
    </TouchableOpacity>
  );
};

export default ChapterItem;
