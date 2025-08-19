import { Box, Button, TextField } from "@mui/material";
import { Form, Formik, type FormikHelpers } from "formik";
import type { AnyObjectSchema } from "yup";

type TField = {
  name: string;
  label: string;
  type?: string;
};

interface IDynamicFormProps<TinitValues> {
  initialValues: TinitValues;
  fields: TField[];
  validationSchema: AnyObjectSchema;
  onSubmit: (values: TinitValues, actions: FormikHelpers<TinitValues>) => void;
  submitLabel?: string;
}

export function DynamicForm<TInitValues extends Record<string, string>>({
  initialValues,
  fields,
  validationSchema,
  onSubmit,
  submitLabel,
}: IDynamicFormProps<TInitValues>) {
  return (
    <Box>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ handleChange, handleBlur, values, errors, touched }) => (
          <Form>
            <Box
              mx={"auto"}
              display={"flex"}
              flexDirection={"column"}
              border={"1px solid"}
              borderRadius={3}
              borderColor={"ActiveBorder"}
              px={{ xs: 1, md: 4 }}
              py={2}
              gap={{ xs: "16px", md: "24px", lg: "32px" }}
              maxWidth={{ xs: "320px", md: "400px", lg: "480px" }}
            >
              {fields.map(({ name, label, type }, i) => (
                <TextField
                  key={name + i}
                  name={name}
                  label={label}
                  type={type || "text"}
                  value={values[name]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched[name] && Boolean(errors[name])}
                  helperText={
                    touched[name] && typeof errors[name] === "string"
                      ? errors[name]
                      : undefined
                  }
                  fullWidth
                />
              ))}
              <Button
                type="submit"
                variant="contained"
                sx={{ bgcolor: "secondary.main" }}
              >
                {submitLabel}
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
