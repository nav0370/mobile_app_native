import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/Ionicons";

const CategoryTitle = (props) => {
  const { title, icon } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {icon && (
        <TouchableOpacity activeOpacity={0.6}>
          <Icon name="md-chevron-forward" size={20} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CategoryTitle;
