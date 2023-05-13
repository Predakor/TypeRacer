import Navigation from "./Nav/Nav";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navigation />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
export default Layout;
