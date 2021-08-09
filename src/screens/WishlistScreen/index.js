import React, { useEffect } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { Rating } from "react-native-ratings";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import { getWishList } from "../../store/services/audiobooks";
import theme from "../../theme";
import GlobalStyles from "../../utils/globalStyles";
import NavigationService from "../../utils/NavigationService";

const { width, height } = Dimensions.get("window");

const Item = ({
  audioBook: {
    name = "",
    cover = "",
    writtenBy = "",
    narratedBy = "",
    language = "",
    rating = 0,
    totalRating = 0,
  },
}) => {
  return (
    <View
      style={{
        paddingVertical: 15,
        paddingHorizontal: 15,
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
            uri: cover,
          }}
          style={{
            width: height * 0.15,
            height: height * 0.16,
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
          {name}
        </Text>
        <Text style={styles.text}>
          Written by :{" "}
          <Text style={{ color: theme.colors.blue }}>{writtenBy}</Text>
        </Text>
        <Text style={styles.text}>Release Date: 18-10-18</Text>
        <Text style={styles.text}>
          Narrated by:{" "}
          <Text style={{ color: theme.colors.blue }}>{narratedBy}</Text>
        </Text>
        <Text style={styles.text}>Length: 5hrs and 35 mins</Text>
        <Text style={styles.text}>Language: {language}</Text>
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
            startingValue={rating}
            ratingCount={5}
            defaultRating={4}
            style={{
              paddingVertical: 6,
              flexDirection: "row",
              alignContent: "flex-start",
            }}
          />
          <Text style={[styles.text, { paddingLeft: 5 }]}>
            {totalRating} ratings
          </Text>
        </View>
        <Text style={[styles.text, { fontFamily: theme.font.fontMedium }]}>
          $500.00
        </Text>
      </View>
    </View>
  );
};

const WishlistScreen = () => {
  const dispatch = useDispatch();

  const { user, wishlist } = useSelector((state) => ({
    user: state.auth_reducer.user,
    wishlist: state.app_reducer.wishlist,
  }));

  console.log(wishlist, "LISTS");
  useEffect(() => {
    getWishList({ query: {} })
      .then((res) => {
        console.log(res, "RESssss");
        dispatch({ type: "GET_WISHLIST", payload: res });
      })
      .catch((err) => {
        console.log(err, "ERR");

        dispatch({ type: "GET_WISHLIST", payload: undefined });
      });
  }, []);

  return (
    <SafeAreaView style={GlobalStyles.content}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Header
        left={
          <TouchableOpacity onPress={() => NavigationService.goBack()}>
            <Ionicons name="arrow-back" size={22} />
          </TouchableOpacity>
        }
        title="Wish List"
      />
      <ScrollView>
        {wishlist?.wishlist?.map((item) => (
          <Item {...item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default WishlistScreen;

const styles = StyleSheet.create({});
