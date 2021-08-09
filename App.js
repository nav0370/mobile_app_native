import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "@shopify/restyle";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { PersistGate } from "redux-persist/integration/react";
import { Platform } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { persistor, store } from "./src/store";
import theme, { fontConfig } from "./src/theme";
import Navigator from "./src/Navigation";

const App = () => {
  const papertheme = {
    ...DefaultTheme,

    colors: {
      ...DefaultTheme.colors,
      primary: theme.colors.primary,
      accent: "yellow",
    },
    fonts: Platform.select({ ...fontConfig }),
  };
  return (
    <Provider store={store}>
      <PaperProvider
        settings={{ icon: (props) => <Ionicons {...props} /> }}
        theme={papertheme}
      >
        <PersistGate loading={null} persistor={persistor}>
          <Navigator />
        </PersistGate>
      </PaperProvider>
    </Provider>
  );
};

export default App;
