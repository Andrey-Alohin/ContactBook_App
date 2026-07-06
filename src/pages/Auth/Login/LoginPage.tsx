import { LoginForm } from "@/features/auth/ui/LoginFrom";
import { Box } from "@mui/material";

export function LoginPage() {
  return (
    <Box
      component={"section"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <LoginForm />
    </Box>
  );
}
