import { defaults } from "./default";

export const audiobooks = {
  getAudibles: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: "/audiobooks/list",
    },
  },
  getCategory: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: "/category/list",
    },
  },
  getSingleAudioBook: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: "/audiobooks/:bookId",
    },
  },
  addItemToWishlist: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: "/wishlist/create",
    },
  },
  getWishList: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: "/wishlist/list",
    },
  },
  deleteWishListItem: {
    v1: {
      ...defaults.methods.DELETE,
      ...defaults.versions.v1,
      uri: "/wishlist/:bookId",
    },
  },
};
