import { GlobalStyles } from "./styles/global";
import { Layout } from "./components/structure/Layout";
import { Navbar } from "./components/structure/Navbar";
import { Main } from "./components/structure/Main";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Navbar />
        <Main />
      </Layout>
    </>
  );
}
