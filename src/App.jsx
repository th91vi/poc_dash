import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/global";
import { Layout } from "./components/structure/Layout";
import { Navbar } from "./components/structure/Navbar";
import { Main } from "./components/structure/Main";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Navbar />
        <Main />
      </Layout>
    </ThemeProvider>
  );
}
