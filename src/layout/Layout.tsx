import { PropsWithChildren } from "preact/compat";
import { Footer, Header } from ".";

function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
export default Layout;
