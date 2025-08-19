// import type { useGetUserInfoQuery } from "@/entites/user/api/authApi";
import { LogOutBtn } from "@/features/auth/ui/LogOutBtn";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import { useHeaderModel } from "../model";

export function Header() {
  const { user, isLoading, isError, isLoggedIn } = useHeaderModel();
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            py: "12px",
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            ContactBook
          </Typography>

          <Box display={"flex"} flexDirection={"row"} gap={5}>
            {/* Змінити тему */}
            {isLoggedIn && user && !isLoading && !isError ? (
              <>
                <Box>
                  <Typography variant="subtitle2">{user.name}</Typography>
                  <Typography variant="caption">{user.email}</Typography>
                </Box>
                <LogOutBtn />
              </>
            ) : (
              <>
                <Typography>Please log in</Typography>
              </>
            )}
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
