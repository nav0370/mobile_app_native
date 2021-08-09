import React from "react";
import {
  TouchableOpacity,
  View,
  Image,
  Text,
  ImageBackground,
} from "react-native";

import TimeBar from "app/src/Components/TimeBar";
import Time from "app/src/Helpers/Time";

import Images from "app/src/Theme/Images";
import styles from "./styles";

const AudibleListeningItem = (props) => {
  const { image, chapters } = props.data;

  const formatRemaingTime = (seconds) => {
    return seconds > 3600
      ? [
          parseInt(seconds / 60 / 60) + " hrs",
          parseInt((seconds / 60) % 60) + " min",
          parseInt(seconds % 60) + " sec",
        ]
          .join(",")
          .replace(/\b(\d)\b/g, "0$1")
      : [
          parseInt((seconds / 60) % 60) + " min",
          parseInt(seconds % 60) + " sec",
        ]
          .join(",")
          .replace(/\b(\d)\b/g, "0$1");
  };
  let time_left = props.data.listnings[props.user.uid].time;
  let total = props.data.listnings[props.user.uid].total;
  var bar = 200 - (200 / total) * time_left;
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={props.onPress}
    >
      <ImageBackground
        style={styles.imageBackground}
        source={{ uri: image }}
        resizeMode="contain"
      >
        <View style={styles.playWrap}>
          <Image style={styles.play} source={Images.playIcon} />
        </View>
      </ImageBackground>
      <TimeBar progress={bar} />
      <Text style={styles.time}>{`${formatRemaingTime(time_left)} left`}</Text>
    </TouchableOpacity>
  );
};
export default AudibleListeningItem;
