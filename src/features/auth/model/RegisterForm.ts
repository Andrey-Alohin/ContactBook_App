import * as Yup from "yup";
import { usePostRegisterUserMutation } from "@/entites/user/api/authApi";
import type { FormikHelpers } from "formik";
import { isFetchBaseQueryError } from "@/shared/api/utils";
import { notify, type Tnotify } from "@/shared/utils";
const REGISTER_ID = "registerNewUser";
const notifyReg: Tnotify = notify(REGISTER_ID);

export const fields = [
  { name: "name", type: "text", label: "Name" },
  { name: "email", type: "email", label: "Email" },
  { name: "password", type: "password", label: "Password" },
];

export const initialValues = {
  name: "",
  email: "",
  password: "",
};

export const validationShema = Yup.object({
  name: Yup.string().label("Name").min(3).max(20).required(),
  email: Yup.string().label("Email").email().required(),
  password: Yup.string().label("Password").min(7).max(20).required(),
});

export const useRegisterHandleSubmit = () => {
  const [registerUser] = usePostRegisterUserMutation();
  return async (
    values: typeof initialValues,
    actions: FormikHelpers<typeof initialValues>
  ) => {
    try {
      notifyReg.loading();
      await registerUser(values).unwrap();
      notifyReg.success("Successfully registered new user!");
      actions.resetForm();
    } catch (error) {
      if (isFetchBaseQueryError(error)) {
        const { status } = error;
        if (status === 409) {
          notifyReg.error("This email is already in use.");
        } else if (typeof status === "number" && status >= 500) {
          notifyReg.error("Server error. Please try again later.");
        } else {
          notifyReg.error("Unable to complete registration. Please try again.");
        }
      } else {
        notifyReg.error("Unexpected error occurred. Please try again.");
      }
    }
  };
};
