import AsyncStorage from "@react-native-async-storage/async-storage";
import { English, Punjabi } from "../../config/menu";

export const changeSettings = (language) => async (dispatch) => {
  await AsyncStorage.setItem("language", language);
  dispatch({
    type: "CHANGELANGUAGE",
    payload: {
      language,
      locale: language === "Punjabi" ? Punjabi : English,
    },
  });
};
