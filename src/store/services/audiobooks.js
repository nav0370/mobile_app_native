import { callApi } from "../../utils/apiUtils";
import { audiobooks } from "../endpoints/audiobooks";

export const getAudibles = ({ query }) =>
  callApi({ uriEndPoint: audiobooks.getAudibles.v1, query });

export const getCategories = ({ query }) =>
  callApi({ uriEndPoint: audiobooks.getCategory.v1, query });

export const getSingleAudioBook = ({ pathParams }) =>
  callApi({ uriEndPoint: audiobooks.getSingleAudioBook.v1, pathParams });

export const addItemToWishList = ({ body }) =>
  callApi({ uriEndPoint: audiobooks.addItemToWishlist.v1, body });

export const getWishList = ({ query }) =>
  callApi({ uriEndPoint: audiobooks.getWishList.v1, query });

export const deleteWishListItem = ({ pathParams }) =>
  callApi({ uriEndPoint: audiobooks.deleteWishListItem.v1, pathParams });
