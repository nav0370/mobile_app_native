import React, { useEffect } from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useSelector } from "react-redux";
import theme from "../../../theme";
import NavigationService from "../../../utils/NavigationService";

const CategorySection = (props) => {
  const { categories } = useSelector(({ app_reducer }) => ({
    categories: app_reducer.categories,
  }));

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        paddingHorizontal: 10,
        justifyContent: "space-between",
      }}
    >
      {categories?.categories
        ?.concat({ _id: "all", name: "All Categories" })
        .map((item) => (
          <TouchableOpacity
            onPress={() => {
              console.log("Category");
              if (item?._id === "all") {
                NavigationService.navigate("AllCategories");
              } else {
                NavigationService.navigate("CategoryScreen");
              }
            }}
            key={item?._id}
            activeOpacity={0.8}
            style={{
              width: width * 0.45,
              marginHorizontal: width * 0.01,
              marginBottom: 10,
            }}
          >
            <LinearGradient
              start={{ x: 0.0, y: 0.25 }}
              end={{ x: 0.5, y: 1.0 }}
              colors={["#f5c867", "#FFB71B"]}
              style={styles.lineargradient}
            >
              <Text style={styles.text}>{item.name}</Text>
            </LinearGradient>
          </TouchableOpacity>
        ))}
    </View>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  lineargradient: {
    height: 70,
    padding: 10,
    borderRadius: 10,
    flex: 1,
    justifyContent: "flex-end",
  },
  text: {
    fontFamily: theme.font.fontMedium,
    fontSize: 14,
    marginBottom: 10,
    marginLeft: 5,
  },
});

export default CategorySection;
