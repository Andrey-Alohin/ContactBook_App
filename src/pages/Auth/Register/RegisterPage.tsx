import { RegisterFrom } from "@/features/auth/ui/RegisterFrom";
import { Box } from "@mui/material";

export function RegisterPage() {
  return (
    <Box
      component={"section"}
      display={"flex"}
      justifyContent="center"
      alignItems="center"
    >
      <RegisterFrom />
    </Box>
  );
}
