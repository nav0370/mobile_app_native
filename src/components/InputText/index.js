import React, { useState } from "react";
import { View, Image, TextInput, TouchableOpacity } from "react-native";

import Colors from "app/src/Theme/Colors";
import Images from "app/src/Theme/Images";
import styles from "./styles";
import Icon from "react-native-vector-icons/Entypo";
const InputText = (props) => {
  const [secure, setSecure] = useState(props.secureTextEntry);
  const {
    placeholder,
    value,
    onChangeText,
    secureTextEntry,
    keyboardType,
    leftIcon,
    error,
    editable,
    rightIcon,
    color,
  } = props;
  return (
    <View style={styles.container}>
      <View style={styles.inputWrap}>
        {/** Left Icon */}
        {leftIcon && (
          <View style={styles.iconWrap}>
            <Image style={styles.icon} source={Images[leftIcon]} />
          </View>
        )}
        <TextInput
          editable={editable}
          style={[styles.input, { color: color ? color : Colors.darkGrey }]}
          placeholder={placeholder}
          placeholderTextColor={Colors.lightGrey}
          autoCapitalize="none"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secure}
          keyboardType={keyboardType}
        />
        {rightIcon && (
          <TouchableOpacity
            onPress={() => setSecure(!secure)}
            style={styles.iconWrap}
          >
            <Icon
              name={secure ? "eye" : "eye-with-line"}
              size={20}
              color={Colors.darkGrey}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
export default InputText;
