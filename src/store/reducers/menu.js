import AsyncStorage from "@react-native-async-storage/async-storage";
import { English, Punjabi } from "../../config/menu";

const INITIAL_STATE = {
  language:
    AsyncStorage.getItem("language") === "Punjabi" ? "Punjabi" : "English",
  locale: AsyncStorage.getItem("language") === "Punjabi" ? Punjabi : English,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CHANGELANGUAGE":
      return {
        ...state,
        language: action.payload.language,
        locale: action.payload.locale,
      };
    default:
      return state;
  }
};
