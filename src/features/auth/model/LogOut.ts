import type { AppDispatch } from "@/app/store";
import { usePostLogOutUserMutation } from "@/entites/user/api/authApi";
import { removeAccessToken } from "@/entites/user/model/authSlice";
import { notify } from "@/shared/utils";
import { useDispatch } from "react-redux";

const LOGOUT_ID = "logOutUser";
const notifyLogOut = notify(LOGOUT_ID);

export function useLogOut() {
  const [logOut] = usePostLogOutUserMutation();
  const dispatch = useDispatch<AppDispatch>();
  return async () => {
    try {
      notifyLogOut.loading();
      await logOut();
      dispatch(removeAccessToken());
      notifyLogOut.success("Goodbye");
    } catch {
      notifyLogOut.error("Something went wrong try again!");
    }
  };
}
