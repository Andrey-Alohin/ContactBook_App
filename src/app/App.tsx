import { LoginPage } from "@/pages/Auth";
import { StoreProvider } from "./providers/StoreProvider";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./providers/ThemeProvider";
import { Layout } from "./providers/Layout";

function App() {
  console.log("render");

  return (
    <ThemeProvider>
      <StoreProvider>
        <Layout>
          <LoginPage />
        </Layout>
        <Toaster />
      </StoreProvider>
    </ThemeProvider>
  );
}

export default App;
