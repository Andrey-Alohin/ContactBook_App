import { useGetUserInfoQuery } from "@/entites/user/api/authApi";
import { useAppSelector } from "@/shared/hooks/storeHooks";

interface IUserInfo {
  name: string;
  email: string;
}

type TreturnObj = {
  user: undefined | IUserInfo;
  isLoading: boolean;
  isError: boolean;
  isLoggedIn: boolean;
};

export function useHeaderModel(): TreturnObj {
  const accessToken = useAppSelector((state) => state.auth.accessToken);
  const { data, isLoading, isError } = useGetUserInfoQuery(undefined, {
    skip: !accessToken,
  });
  const user = data?.data ?? undefined;
  return {
    user,
    isLoading,
    isError,
    isLoggedIn: Boolean(accessToken),
  };
}
