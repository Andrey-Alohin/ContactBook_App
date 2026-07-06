import { LoginForm } from "@/features/auth/ui/LoginFrom";
import { Box, Tab, Tabs } from "@mui/material";

export function LoginPage() {
  return (
    <Box
      component={"section"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Tabs>
        <Tab />
        <Tab />
      </Tabs>
      <LoginForm />
    </Box>
  );
}
