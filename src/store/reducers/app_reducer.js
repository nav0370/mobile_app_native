const INITIAL_STATE = {
  audibles: [],
  categories: [],
  audiobooks: undefined,
  getAudibleLoading: true,
  recentAudible: {},
  recentChapter: {},
  chapterIndex: 0,
  download_list: [],
  updateProfileLoading: false,
  appStartTime: 0,
  topPickAudible: [],
  bestSellerAudible: [],
  wishlist: undefined,
};

function getRandom(arr, n) {
  const result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

export default (state = INITIAL_STATE, action) => {
  console.log(action, "ACTIOn");
  switch (action.type) {
    case "GETAUDIBLES":
      const best_audible = action.payload.map((audio) => ({
        ...audio,
        id: `best_${audio.id}`,
      }));

      const top_audibles = action.payload.map((audio) => ({
        ...audio,
        id: `top_${audio.id}`,
      }));
      const topPickAudible =
        top_audibles.length < 4 ? top_audibles : getRandom(top_audibles, 4);

      const bestSellerAudible =
        best_audible.length < 4 ? best_audible : getRandom(best_audible, 4);

      return {
        ...state,
        audibles: action.payload,
        getAudibleLoading: action.payload.length ? false : true,
        topPickAudible,
        bestSellerAudible,
      };
    case "AUDIOBOOKS":
      return {
        ...state,
        audiobooks: action.payload,
      };

    case "SAVE_SINGLE_AUDIO":
      return {
        ...state,
        bookDetails: action.payload,
      };
    case "GET_WISHLIST":
      return {
        ...state,
        wishlist: action.payload,
      };
    case "GETCATEGORY":
      return {
        ...state,
        categories: action.payload,
      };

    case "SETRECENTAUDIBLE":
      return {
        ...state,
        recentAudible: action.payload,
      };
    case "SETRECENTCHAPTER":
      return {
        ...state,
        recentChapter: action.payload,
        chapterIndex: action.index,
      };
    case "ADDLISTNINGS":
      let find_index = state.audibles.findIndex(
        (item) => item.id === action.payload.id
      );
      let old_audibles = [...state.audibles];
      old_audibles[find_index] = {
        ...old_audibles[find_index],
        listnings: {
          [action.payload.user]: action.payload,
        },
      };
      return {
        ...state,
        audibles: old_audibles,
      };
    case "DOWNLOAD":
      let old_list = state.download_list;
      old_list.push(action.payload);
      return {
        ...state,
        download_list: old_list,
      };
    case "UPDATEPROFILE":
      return {
        ...state,
        updateProfileLoading: !state.updateProfileLoading,
      };
    case "APPSTART":
      return {
        ...state,
        appStartTime: action.payload,
      };
    case "USERLOGOUT":
      return {
        ...state,
        audibles: [],
        category: [],
        recentAudible: {},
        recentChapter: {},
        chapterIndex: 0,
        updateProfileLoading: false,
        download_list: [],
        appStartTime: 0,
      };
    default:
      return state;
  }
};
