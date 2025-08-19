import { DynamicForm } from "@/shared/ui/DynamicForm/DynamicForm";
import * as model from "../model/LoginForm";

export function LoginForm() {
  const onSubmit = model.useLoginHandleSubmit();
  return (
    <>
      <DynamicForm
        initialValues={model.initialValues}
        fields={model.fields}
        validationSchema={model.validationSchema}
        onSubmit={onSubmit}
        submitLabel="Login"
      />
    </>
  );
}
