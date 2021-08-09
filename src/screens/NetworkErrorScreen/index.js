import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import theme from "../../theme";
import GlobalStyles from "../../utils/globalStyles";

const NetworkErrorScreen = () => {
  return (
    <SafeAreaView style={GlobalStyles.content}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text
          style={{
            fontFamily: theme.font.fontSemiBold,
            fontSize: 16,
            textAlign: "center",
          }}
        >
          No internet connection
        </Text>
        <Text
          style={{
            fontFamily: theme.font.fontRegular,
            textAlign: "center",
          }}
        >
          Please check your connection and try again
        </Text>

        <Button style={{ marginTop: 20 }} mode="contained">
          Retry
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default NetworkErrorScreen;

const styles = StyleSheet.create({});
