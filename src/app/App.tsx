import { StoreProvider } from "./providers/StoreProvider";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./providers/ThemeProvider";
import { Layout } from "./providers/Layout";
import { AppRouter } from "./router/AppRouter";

function App() {
  console.log("render");

  return (
    <ThemeProvider>
      <StoreProvider>
        <Layout>
          <AppRouter />
        </Layout>
        <Toaster />
      </StoreProvider>
    </ThemeProvider>
  );
}

export default App;
