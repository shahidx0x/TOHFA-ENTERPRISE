export interface IMeta {
  limit: number;
  page: number;
  size: number;
}

export interface IDecodedToken {
  userId: string;
  role: string;
  email: string;
  exp: number;
  iat: number;
};
