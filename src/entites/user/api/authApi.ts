import { baseApi } from "@/shared/api/baseApi";
import type {
  TAuthRegisterReq,
  TAuthLogInReq,
  TRegisterRes,
  TAccessToken,
  TUserInfo,
} from "../model/types";
import type { TResponses } from "@/shared/types/api";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    postRegisterUser: build.mutation<
      TResponses<TRegisterRes>,
      TAuthRegisterReq
    >({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body,
      }),
    }),
    postLogInUser: build.mutation<TResponses<TAccessToken>, TAuthLogInReq>({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
    }),
    getUserInfo: build.query<TResponses<TUserInfo>, void>({
      query: () => ({
        url: "/auth/me",
        method: "GET",
      }),
    }),
    postLogOutUser: build.mutation<void, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),
    postRefreshUser: build.mutation<TResponses<TAccessToken>, void>({
      query: () => ({
        url: "/auth/refresh",
        method: "POST",
      }),
    }),
  }),
});

export const {
  usePostRegisterUserMutation,
  usePostLogInUserMutation,
  usePostLogOutUserMutation,
  usePostRefreshUserMutation,
  useGetUserInfoQuery,
} = authApi;
