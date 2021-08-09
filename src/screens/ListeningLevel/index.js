import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  StatusBar,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Header from "../../components/Header";
import theme from "../../theme";
import GlobalStyles from "../../utils/globalStyles";
import NavigationService from "../../utils/NavigationService";

const levels = [
  {
    name: "Master",
    hours: 500,
    color: "#008cff",
  },
  {
    name: "Scholar",
    hours: 200,
    color: "#4d0454",
  },
  {
    name: "Pro",
    hours: 100,
    color: "#4f2002",
  },
  {
    name: "Novice",
    hours: 50,
    color: "#484f07",
  },
  {
    name: "Newbie",
    hours: 1,
    color: "#4c5052",
  },
];

const ListeningLevel = () => {
  return (
    <SafeAreaView style={GlobalStyles.content}>
      <StatusBar translucent backgroundColor="#fff" barStyle="dark-content" />
      <Header
        left={
          <TouchableOpacity onPress={() => NavigationService.goBack()}>
            <Ionicons name="arrow-back" size={22} />
          </TouchableOpacity>
        }
        title="Listening Level"
      />
      <View>
        <Text
          style={{
            fontFamily: theme.font.fontMedium,
            textAlign: "center",
            paddingVertical: 25,
            fontSize: 17,
          }}
        >
          Listen using the app to rank higher
        </Text>

        <View>
          {levels.map((level) => (
            <View
              key={level.color}
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: width * 0.12,
                paddingHorizontal: 15,
                paddingVertical: 8,
                borderRadius: 3,
                backgroundColor: level.color,
                marginBottom: 18,
              }}
            >
              <Text
                style={{
                  fontFamily: theme.font.fontMedium,
                  color: "#b0b5b8",
                  fontSize: 16,
                }}
              >
                {level.name}
              </Text>
              <Text
                style={{
                  fontFamily: theme.font.fontMedium,
                  color: "#fff",
                  fontSize: 17,
                }}
              >
                {level?.hours} hours to go!
              </Text>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ListeningLevel;

const { width, height } = Dimensions.get("window");
