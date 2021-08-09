const INITIAL_STATE = {
  loading: false,
  user: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "USERLOGIN":
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case "UPDATEUSER":
      return {
        ...state,
        user: action.payload,
      };
    case "SIGINWITHFACEBOOK":
      return {
        ...state,
        user: action.payload,
      };
    case "SIGINWITHGOOGLE":
      return {
        ...state,
        user: action.payload,
      };
    case "USERSIGNUP":
      return {
        ...state,
        user: action.payload,
        loading: !state.loading,
      };
    case "GETUSER":
      return {
        ...state,
        user: action.payload,
      };
    case "APPEND":
      state.user.engageTime = state.user.engageTime + action.payload;
      return {
        ...state,
        user: state.user,
      };
    case "FORGOTPASS":
      return {
        ...state,
        loading: !state.loading,
      };
    case "LOGOUTUSER":
      return {
        ...state,
        user: {},
      };
    default:
      return state;
  }
};
