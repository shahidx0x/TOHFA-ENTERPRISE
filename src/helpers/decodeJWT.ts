import { IDecodedToken } from "@/common/common";
import { jwtDecode } from "jwt-decode";

export const decodeJWT = (token: string) => {
  const decoded = jwtDecode<IDecodedToken>(token);
  return decoded;
};
