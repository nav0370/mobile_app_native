import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import StarRating from "react-native-star-rating";

import Colors from "app/src/Theme/Colors";
import styles from "./styles";

const AudibleStar = (props) => {
  const { image, title, author, rating } = props.data;
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={props.onPress}
    >
      <Image style={styles.imageBackground} source={{ uri: image }} />
      <View style={styles.information}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.author}>{author}</Text>
        <StarRating
          disabled={true}
          rating={rating}
          starSize={18}
          fullStarColor={Colors.darkGrey}
          emptyStarColor={Colors.darkGrey}
          containerStyle={{
            justifyContent: "flex-start",
          }}
          buttonStyle={{
            marginRight: 2,
          }}
          selectedStar={(rating) => {
            2;
          }}
        />
      </View>
    </TouchableOpacity>
  );
};
export default AudibleStar;
