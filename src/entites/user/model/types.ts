export type TAuthRegisterReq = {
  name: string;
  email: string;
  password: string;
};
export type TRegisterRes = {
  name: string;
  email: string;
};

export type TAuthLogInReq = {
  email: string;
  password: string;
};

export type TAccessToken = {
  accessToken: string;
};

export type TUserInfo = {
  name: string;
  email: string;
};
