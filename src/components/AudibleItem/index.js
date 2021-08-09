import React, { useState } from "react";
import { TouchableOpacity, Image, Text, View } from "react-native";
import { Rating } from "react-native-ratings";
import theme from "../../theme";

import styles from "./styles";

const AudibleItem = (props) => {
  const { cover, name, author, rating, totalRating } = props.data;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={props.onPress}
    >
      <Image
        style={styles.imageBackground}
        source={{
          uri: cover,
        }}
      />
      <View style={{ marginHorizontal: 10 }}>
        <Text
          style={{
            fontFamily: theme.font.fontSemiBold,
            fontSize: 12,
            marginTop: 6,
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            fontFamily: theme.font.fontRegular,
            fontSize: 12,
          }}
        >
          By: {author}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Rating
            type="custom"
            editable={false}
            jumpValue={3}
            readonly
            imageSize={16}
            startingValue={rating || 0}
            ratingCount={5}
            defaultRating={4}
            style={{
              paddingVertical: 6,
              flexDirection: "row",
              alignContent: "flex-start",
            }}
          />
          <Text
            style={{
              fontFamily: theme.font.fontRegular,
              fontSize: 12,
              marginLeft: 5,
            }}
          >
            ({totalRating || 0})
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default AudibleItem;
