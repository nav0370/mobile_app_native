import { defaults } from "./default";

export const user = {
  register: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: "/user/registration",
    },
  },
  login: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: "/user/login",
    },
  },
  currentUser: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: "/user/currentUser",
    },
  },
};
