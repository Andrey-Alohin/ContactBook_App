import type { AppDispatch } from "@/app/store";
import { usePostLogInUserMutation } from "@/entites/user/api/authApi";
import { setAccessToken } from "@/entites/user/model/authSlice";
import type { FormikHelpers } from "formik";
import { isFetchBaseQueryError } from "@/shared/api/utils";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { notify, type Tnotify } from "@/shared/utils";
import { useNavigate } from "react-router-dom";
import { frontRoutes } from "@/shared/config/routes";
const LOGIN_ID = "loginUser";
const notifyLogin: Tnotify = notify(LOGIN_ID);

export const fields = [
  { name: "email", type: "email", label: "Email" },
  { name: "password", type: "password", label: "Password" },
];

export const initialValues = {
  email: "",
  password: "",
};

export const validationSchema = Yup.object({
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().min(7).max(20).required().label("Password"),
});

export const useLoginHandleSubmit = () => {
  const [loginUser] = usePostLogInUserMutation();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  return async (
    values: typeof initialValues,
    actions: FormikHelpers<typeof initialValues>
  ) => {
    try {
      notifyLogin.loading("Loading, pls wait...");
      const { accessToken } = (await loginUser(values).unwrap()).data;
      dispatch(setAccessToken(accessToken));
      notifyLogin.success("Logged in successfully");
      navigate(frontRoutes.pages.home);
      actions.resetForm();
    } catch (error) {
      if (isFetchBaseQueryError(error)) {
        const { status } = error;

        if (status === 401 || status === 404) {
          notifyLogin.error("Invalid email or password.");
        } else if (typeof status === "number" && status >= 500) {
          notifyLogin.error("Server error. Please try again later.");
        } else {
          notifyLogin.error("Login failed. Please try again.");
        }
      } else {
        notifyLogin.error("Unexpected error occurred. Please try again.");
      }
    }
  };
};
