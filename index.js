/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import TrackPlayer from "react-native-track-player";
import { name as appName } from "./app.json";
import * as RNLocalize from "react-native-localize";

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => require("./service"));

const handleLocalizationChange = (val) => {
  console.log(val, "VAL !!!!!!!!");
};

RNLocalize.addEventListener("change", handleLocalizationChange);
