import { LoginPage, RegisterPage } from "@/pages/Auth";
import { frontRoutes } from "@/shared/config/routes";
import { Typography } from "@mui/material";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route
            path={frontRoutes.pages.home}
            element={<Typography>Home page</Typography>}
          />
          <Route path={frontRoutes.pages.login} element={<LoginPage />} />
          <Route path={frontRoutes.pages.register} element={<RegisterPage />} />
          <Route path={frontRoutes.pages.manageContacts} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
