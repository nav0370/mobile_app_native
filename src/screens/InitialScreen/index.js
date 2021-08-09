import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  StatusBar,
  Dimensions,
  ImageBackground,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { ActivityIndicator } from "react-native-paper";
import theme from "../../theme";
import NavigationService from "../../utils/NavigationService";

const { height, width } = Dimensions.get("window");

const InitialScreen = () => {
  const setInitialScreen = () => AsyncStorage.setItem("initialScreen", "Home");
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("initialScreen");
      if (value !== null && value === "Home") {
        NavigationService.reset("Home");
      } else {
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      // error reading value
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" animating={true} />
      </View>
    );
  } else {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor={theme.colors.primary}
          barStyle="dark-content"
        />
        <ImageBackground
          style={{ height, width, flex: 1, justifyContent: "flex-end" }}
          source={require("../../../assets/initialscreen.jpg")}
        >
          <View style={styles.transparentBody}>
            <Text style={styles.title}>Welcome to Suhavi Audio Books</Text>
            <Text style={styles.description}>
              Be entertained, inspired, and immersed in stories anytime,
              anywhere. Welcome to the world's premier listening experience.
            </Text>
            <TouchableOpacity
              onPress={() => {
                setInitialScreen();
                NavigationService.reset("Home");
              }}
              activeOpacity={0.7}
              style={styles.getStarted}
            >
              <Text style={styles.getStartedText}>GET STARTED</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setInitialScreen();
                NavigationService.reset("LoginScreen");
              }}
              activeOpacity={0.7}
              style={styles.signIn}
            >
              <Text style={styles.signInText}>SIGN IN</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
};

export default InitialScreen;

const styles = StyleSheet.create({
  signIn: {
    marginTop: 20,
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: theme.colors.primary,
    marginHorizontal: width * 0.1,
    borderRadius: 3,
  },
  signInText: {
    fontFamily: theme.font.fontSemiBold,
    textAlign: "center",
    paddingVertical: 10,
    color: theme.colors.primary,
  },
  getStarted: {
    marginTop: 20,
    backgroundColor: theme.colors.primary,
    marginHorizontal: width * 0.1,
    borderRadius: 3,
  },
  getStartedText: {
    fontFamily: theme.font.fontSemiBold,
    textAlign: "center",
    paddingVertical: 10,
    color: theme.colors.black,
  },
  description: {
    textAlign: "center",
    color: theme.colors.white,
    fontFamily: theme.font.fontRegular,
    marginTop: 10,
    fontSize: 14,
    paddingHorizontal: 22,
  },
  title: {
    textAlign: "center",
    color: theme.colors.white,
    fontFamily: theme.font.fontSemiBold,
    fontSize: 28,
    paddingHorizontal: 10,
  },
  transparentBody: {
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    marginHorizontal: width * 0.09,
    paddingVertical: height * 0.03,
    borderRadius: 24,
    marginBottom: height * 0.09,
  },
});
