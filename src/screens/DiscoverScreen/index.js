const styles = StyleSheet.create({});

const topPickAudible = [
  {
    name: "To Kill a Mockingbird",
    rating: 123,
    stars: 3.8,
    author: "Harper Lee",
    image:
      "https://firebasestorage.googleapis.com/v0/b/punjabi-audible.appspot.com/o/images%2F142377.6338876545233809042._SY475_.jpg?alt=media&token=52fbe86f-07cf-48ad-8423-967a2a0ad919",
  },
  {
    name: "To Kill a Mockingbird",
    rating: 123,
    stars: 5,
    author: "Harper Lee",
    image:
      "https://firebasestorage.googleapis.com/v0/b/punjabi-audible.appspot.com/o/images%2F142377.6338876545233809042._SY475_.jpg?alt=media&token=52fbe86f-07cf-48ad-8423-967a2a0ad919",
  },
  {
    name: "To Kill a Mockingbird",
    rating: 123,
    stars: 3.8,
    author: "Harper Lee",
    image:
      "https://firebasestorage.googleapis.com/v0/b/punjabi-audible.appspot.com/o/images%2F142377.6338876545233809042._SY475_.jpg?alt=media&token=52fbe86f-07cf-48ad-8423-967a2a0ad919",
  },
  {
    name: "To Kill a Mockingbird",
    rating: 123,
    stars: 3.8,
    author: "Harper Lee",
    image:
      "https://firebasestorage.googleapis.com/v0/b/punjabi-audible.appspot.com/o/images%2F142377.6338876545233809042._SY475_.jpg?alt=media&token=52fbe86f-07cf-48ad-8423-967a2a0ad919",
  },
  {
    name: "To Kill a Mockingbird",
    rating: 123,
    stars: 3.8,
    author: "Harper Lee",
    image:
      "https://firebasestorage.googleapis.com/v0/b/punjabi-audible.appspot.com/o/images%2F142377.6338876545233809042._SY475_.jpg?alt=media&token=52fbe86f-07cf-48ad-8423-967a2a0ad919",
  },
];

import React, { useEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useSelector } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import theme from "../../theme";
import Header from "../../components/Header";
import CategoryTitle from "../../components/CategoryTitle";
import GlobalStyles from "../../utils/globalStyles";
import AudibleItem from "../../components/AudibleItem";
import { IconButton } from "react-native-paper";

const demoList = [
  {
    name: "Your choice of audiobooks every month",
    description: "Choose from over 200,000 audiobooks",
  },
  {
    name: "You own your audiobooks",
    description:
      "All the audiobooks in your library are yours to keep, even if you cancel the membership.",
  },
  {
    name: "Keep unused credits",
    description:
      "Did not get around to using your credits? No problem, members can keep up to six unused credits.",
  },
];

const { width } = Dimensions.get("window");

const DiscoverScreen = (props) => {
  navigate = (key, params) => {
    props.navigation.navigate(key, params);
  };

  const { locale } = useSelector((state) => ({ locale: state.menu.locale }));

  return (
    <SafeAreaView style={GlobalStyles.content}>
      <StatusBar translucent backgroundColor="#fff" barStyle="dark-content" />

      <Header
        title="Discover"
        icon={
          <IconButton
            icon="ios-search-outline"
            size={22}
            style={{ margin: 0 }}
            onPress={() => console.log("Pressed")}
          />
        }
      />

      <View style={{ marginBottom: 60 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/** Keep Listening */}
          <View style={styles.category}>
            <CategoryTitle title={locale?.home?.heading3} icon={false} />
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
            >
              {topPickAudible.map((item, index) => (
                <AudibleItem key={index} data={item} />
              ))}
            </ScrollView>
          </View>
          {/** Top Pics For You */}

          {/** Best Sellers */}
          <View style={styles.category}>
            <CategoryTitle title={locale?.home?.heading2} />
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
            >
              {topPickAudible.map((item, index) => (
                <AudibleItem key={index} data={item} />
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default DiscoverScreen;
