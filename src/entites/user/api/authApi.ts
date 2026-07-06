import { baseApi } from "@/shared/api/baseApi";
import type {
  TAuthRegisterReq,
  TAuthLogInReq,
  TRegisterRes,
  TAccessToken,
  TUserInfo,
} from "../model/types";
import type { TResponses } from "@/shared/types/api";
import { backRoutes } from "@/shared/config/routes";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    postRegisterUser: build.mutation<
      TResponses<TRegisterRes>,
      TAuthRegisterReq
    >({
      query: (body) => ({
        url: backRoutes.auth.register,
        method: "POST",
        body,
      }),
    }),
    postLogInUser: build.mutation<TResponses<TAccessToken>, TAuthLogInReq>({
      query: (body) => ({
        url: backRoutes.auth.login,
        method: "POST",
        body,
      }),
    }),
    getUserInfo: build.query<TResponses<TUserInfo>, void>({
      query: () => ({
        url: backRoutes.auth.getUserInfo,
        method: "GET",
      }),
    }),
    postLogOutUser: build.mutation<void, void>({
      query: () => ({
        url: backRoutes.auth.logout,
        method: "POST",
      }),
    }),
    postRefreshUser: build.mutation<TResponses<TAccessToken>, void>({
      query: () => ({
        url: backRoutes.auth.refresh,
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
