/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { Box, Text } from "../../Theme";
import Icon from "react-native-vector-icons/AntDesign";

const RoundedIcon = ({ name, size, color, backgroundColor }) => {
  const iconSize = size * 0.6;

  return (
    <Box
      marginRight='s'
      style={{ borderRadius: size / 2 }}
      height={size}
      width={size}
      {...{ backgroundColor }}
      justifyContent='center'
      alignItems='center'
    >
      <Text style={{ width: iconSize, height: iconSize }} {...{ color }}>
        <Icon size={iconSize} {...{ name }} style={{ textAlign: "center" }} />
      </Text>
    </Box>
  );
};

export default RoundedIcon;
