import React from "react";
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";
import Header from "../../components/Header";
import GlobalStyles from "../../utils/globalStyles";
import NavigationService from "../../utils/NavigationService";
import theme from "../../theme";

const { width } = Dimensions.get("window");

const AllCategories = () => {
  const { categories } = useSelector(({ app_reducer }) => ({
    categories: app_reducer.categories,
  }));
  console.log(categories, "All categories");
  return (
    <SafeAreaView style={GlobalStyles.content}>
      <Header
        left={
          <TouchableOpacity onPress={() => NavigationService.goBack()}>
            <Ionicons name="arrow-back" size={22} />
          </TouchableOpacity>
        }
        title="All Categories"
      />
      <StatusBar translucent backgroundColor="#fff" barStyle="dark-content" />
      <ScrollView style={{ marginTop: 7 }}>
        {categories?.categories?.map((category) => (
          <TouchableOpacity key={category?._id} activeOpacity={0.6}>
            <View style={styles.itemStyle}>
              <Text style={{ fontFamily: theme.font.fontMedium, fontSize: 16 }}>
                {category?.name}
              </Text>
              <Ionicons name="ios-chevron-forward" size={22} />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AllCategories;

const styles = StyleSheet.create({
  itemStyle: {
    width,
    paddingHorizontal: width * 0.05,
    paddingVertical: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: theme.colors.lightGrey,
    justifyContent: "space-between",
  },
});
