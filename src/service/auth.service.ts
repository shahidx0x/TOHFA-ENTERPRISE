import { tokenKey } from "@/constant/constant";
import { decodeJWT } from "@/helpers/decodeJWT";
import { getLocalStorage, setLocalStorage } from "@/utils/localStorage";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  setLocalStorage(tokenKey, accessToken);
};

export const getUserInfo = () => {
  const token = getLocalStorage(tokenKey);
  if (token) {
    const decodedData = decodeJWT(token);
    return decodedData;
  } else {
    return null;
  }
};

export const removeUserInfo = () => {
  localStorage.removeItem(tokenKey);
};

export const isUserLoggedIn = () => {
  const token = getLocalStorage(tokenKey);
  if (token) {
    return true;
  } else {
    return false;
  }
};
