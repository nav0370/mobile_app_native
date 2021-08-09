import React, { useState, useRef } from "react";
import {
  View,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
  RefreshControl,
  SafeAreaView,
  Text,
} from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { useSelector, useDispatch } from "react-redux";
import ActionSheet from "react-native-actionsheet";
import styles from "./styles";
import NavigationService from "../../utils/NavigationService";
import Header from "../../components/Header";
import { changeSettings } from "../../store/actions/menu";
import theme from "../../theme";
import GlobalStyles from "../../utils/globalStyles";
import CustomBadge from "../../components/CustomBadge";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileScreen = () => {
  const sheetRef = useRef();
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);

  const logoutUser = () => {
    AsyncStorage.clear();
    dispatch({ type: "LOGOUTUSER" });
  };

  const { user, language, locale } = useSelector((state) => ({
    user: state.auth_reducer.user,
    language: state.menu.language,
    locale: state.menu.locale,
  }));

  return (
    <SafeAreaView style={GlobalStyles.content}>
      <StatusBar translucent barStyle="dark-content" backgroundColor="#fff" />

      <Header title={locale?.profile?.heading} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
              // dispatch(get_user())
              //   .then(() => setRefreshing(false))
              //   .catch((err) => setRefreshing(false));
            }}
          />
        }
      >
        {user?.name ? (
          <>
            <View style={styles.profileSection}>
              <Image
                source={
                  user?.photoURL
                    ? {
                        uri: user?.photoURL,
                      }
                    : require("../../../assets/dummy-profile-pic.png")
                }
                style={styles.logo}
              />
            </View>

            <View style={styles.nameContainer}>
              <Text style={styles.name}>{user?.name}</Text>
              <Text style={styles.description}>{`${user?.email}`}</Text>
            </View>

            {/* Stats section */}
            <View style={styles.statsContainer}>
              <View style={styles.stats}>
                <View>
                  <Text style={styles.heading}>0</Text>
                  <Text style={styles.description}>
                    {locale?.profile?.options?.title}
                  </Text>
                </View>
                <View>
                  <Text style={styles.heading}>0</Text>
                  <Text style={styles.description}>
                    {locale?.profile?.options?.badge}
                  </Text>
                </View>
              </View>
            </View>
          </>
        ) : (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              marginVertical: 20,
            }}
          >
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <Image
                source={require("../../../assets/app-logo.png")}
                style={{ width: 62, height: 67 }}
              />
              <Text
                style={{
                  fontFamily: theme.font.fontSemiBold,
                  fontSize: 16,
                  textAlign: "center",
                  marginVertical: 5,
                }}
              >
                Sign In to use the app
              </Text>
              <Text
                style={{
                  fontFamily: theme.font.fontRegular,
                  fontSize: 14,
                  textAlign: "center",
                  // marginVertical: 5,
                }}
              >
                Explore our entire collection of audio books
              </Text>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  backgroundColor: theme.colors.primary,
                  paddingHorizontal: width * 0.15,
                  paddingVertical: 8,
                  borderRadius: 5,
                  marginTop: 15,
                }}
                onPress={() => NavigationService.reset("LoginScreen")}
              >
                <Text style={{ fontFamily: theme.font.fontSemiBold }}>
                  Sign In
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {/* Preference Section */}
        <View style={{ marginTop: 10, paddingHorizontal: width * 0.04 }}>
          <Text style={styles.optionMain}>
            {locale?.profile?.preferences?.title}
          </Text>
          <TouchableOpacity
            style={styles.options}
            onPress={() => sheetRef.current.show()}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={styles.fontRegular}>
                {locale?.profile?.preferences?.language}
              </Text>
              {language === "Punjabi" ? (
                <CustomBadge text="ਪੰਜਾਬੀ" />
              ) : (
                <CustomBadge text="English" />
              )}
            </View>
            <View>
              <FontAwesomeIcon
                size={20}
                style={{ fontWeight: "bold" }}
                name="angle-right"
              />
            </View>
          </TouchableOpacity>
        </View>

        {/* Your account */}
        {user?.name && (
          <View style={{ marginTop: 10, paddingHorizontal: width * 0.04 }}>
            <Text style={styles.optionMain}>
              {locale?.profile?.account?.title}
            </Text>
            <TouchableOpacity
              style={styles.options}
              onPress={() => NavigationService.navigate("EditProfile")}
            >
              <View>
                <Text style={styles.fontRegular}>
                  {locale?.profile?.account?.editAccount}
                </Text>
              </View>
              <View>
                <FontAwesomeIcon
                  size={20}
                  style={{ fontWeight: "bold" }}
                  name="angle-right"
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.options}
              onPress={() => NavigationService.navigate("PurchaseHistory")}
            >
              <View>
                <Text style={styles.fontRegular}>
                  {locale?.profile?.account?.purchaseHistory}
                </Text>
              </View>
              <View>
                <FontAwesomeIcon
                  size={20}
                  style={{ fontWeight: "bold" }}
                  name="angle-right"
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.options}
              onPress={() => NavigationService.navigate("ListeningLevel")}
            >
              <View>
                <Text style={styles.fontRegular}>Listening Level</Text>
              </View>
              <View>
                <FontAwesomeIcon
                  size={20}
                  style={{ fontWeight: "bold" }}
                  name="angle-right"
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.options} onPress={logoutUser}>
              <View>
                <Text style={styles.fontRegular}>
                  {locale?.profile?.account?.logout}
                </Text>
              </View>
              <View>
                <FontAwesomeIcon
                  size={20}
                  style={{ fontWeight: "bold" }}
                  name="angle-right"
                />
              </View>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
      <ActionSheet
        ref={sheetRef}
        title="Pick your language"
        options={["English", "ਪੰਜਾਬੀ", "Cancel"]}
        cancelButtonIndex={2}
        onPress={(index) => {
          if (index === 0) {
            dispatch(changeSettings("English"));
          } else if (index === 1) {
            dispatch(changeSettings("Punjabi"));
          }
        }}
      />
    </SafeAreaView>
  );
};

const { height, width } = Dimensions.get("window");

export default ProfileScreen;
