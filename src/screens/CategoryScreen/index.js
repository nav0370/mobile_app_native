import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  SafeAreaView,
  FlatList,
  StatusBar,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Rating } from "react-native-ratings";
import Header from "../../components/Header";
import GlobalStyles from "../../utils/globalStyles";
import theme from "../../theme";
import NavigationService from "../../utils/NavigationService";

const DATA = [
  {
    id: "1",
  },
  {
    id: "2",
  },
];
const Item = ({ title, id, image }) => (
  <View
    style={{
      paddingVertical: 15,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: theme.colors.lightGrey,
    }}
  >
    <View>
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDwxiTJY42woauOfdAfJwHG9nZ7L5ljs6YaQ&usqp=CAU",
        }}
        style={{
          width: height * 0.15,
          height: height * 0.16,
          // resizeMode: "contain",
        }}
      />
      <TouchableWithoutFeedback>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            width: height * 0.15,
            flexDirection: "row",
            backgroundColor: theme.colors.grey,
            paddingVertical: 3,
          }}
        >
          <Ionicons size={20} name="play-circle-outline" />
          <Text>{title}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
    <View style={{ marginLeft: 15 }}>
      <Text
        style={[
          styles.text,
          { fontFamily: theme.font.fontSemiBold, fontSize: 16 },
        ]}
      >
        Justin Timber
      </Text>
      <Text style={styles.text}>
        Written by :{" "}
        <Text style={{ color: theme.colors.blue }}>James Clear</Text>
      </Text>
      <Text style={styles.text}>Release Date: 18-10-18</Text>
      <Text style={styles.text}>
        Narreted by:{" "}
        <Text style={{ color: theme.colors.blue }}>James Clear</Text>
      </Text>
      <Text style={styles.text}>Length: 5hrs and 35 mins</Text>
      <Text style={styles.text}>Language: English</Text>
      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Rating
          showRating={false}
          imageSize={16}
          fractions={4}
          ratingCount={5}
          style={{
            paddingVertical: 6,
            flexDirection: "row",
            alignContent: "flex-start",
          }}
        />
        <Text style={[styles.text, { paddingLeft: 5 }]}>7,320 ratings</Text>
      </View>
      <Text style={[styles.text, { fontFamily: theme.font.fontMedium }]}>
        $500.00
      </Text>
    </View>
  </View>
);

const CategoryScreen = (props) => {
  const renderItem = ({ item }) => (
    <Item title={item.title} id={item.id} image={item.image} />
  );

  return (
    <SafeAreaView style={GlobalStyles.content}>
      <StatusBar translucent backgroundColor="#fff" barStyle="dark-content" />
      <Header
        left={
          <TouchableOpacity onPress={() => NavigationService.goBack()}>
            <Ionicons name="arrow-back" size={22} />
          </TouchableOpacity>
        }
        title="Shop"
      />
      <View
        style={{
          paddingHorizontal: 15,
          paddingTop: 10,
        }}
      >
        {/* <Text
          style={{
            fontWeight: "700",
            fontFamily: theme.font.fontBold,
            fontSize: 18,
          }}
        >
          Showing titles in Self-Help
        </Text>
        <Text
          style={{
            fontSize: 13,
            fontFamily: theme.font.fontSemiBold,
            paddingTop: 5,
          }}
        >
          1 - 20 of over 20,000 results
        </Text> */}

        <FlatList
          containerStyle={{ flex: 1 }}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default CategoryScreen;

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  text: {
    fontFamily: theme.font.fontRegular,
    paddingVertical: 2,
    fontSize: 13,
  },
});
