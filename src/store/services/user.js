import { callApi } from "../../utils/apiUtils";
import { user } from "../endpoints/user";

export const register = ({ body }) =>
  callApi({
    uriEndPoint: user.register.v1,
    body,
  });

export const login = ({ body }) =>
  callApi({ uriEndPoint: user.login.v1, body });

export const currentUser = () => callApi({ uriEndPoint: user.currentUser.v1 });
