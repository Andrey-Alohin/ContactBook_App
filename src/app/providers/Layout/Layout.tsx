import type { ReactNode } from "react";
import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";
import { Box } from "@mui/material";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <Box minHeight="100vh" display={"flex"} flexDirection={"column"}>
      <Header />
      <Box component={"main"} height={"100%"} my={"auto"}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
