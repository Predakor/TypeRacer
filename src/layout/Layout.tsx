import { ReactNode } from "react";
import { Footer, Header } from ".";

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
export default Layout;
