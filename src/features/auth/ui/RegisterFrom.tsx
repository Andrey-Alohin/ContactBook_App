import { DynamicForm } from "@/shared/ui/DynamicForm/DynamicForm";
import * as model from "../model/RegisterForm";

export function RegisterFrom() {
  const onSubmit = model.useRegisterHandleSubmit();
  return (
    <>
      <DynamicForm
        initialValues={model.initialValues}
        fields={model.fields}
        validationSchema={model.validationShema}
        onSubmit={onSubmit}
        submitLabel="Register"
      />
    </>
  );
}
