import { PropsWithChildren } from "preact/compat";
import { Footer, Header } from ".";

function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main className={"grid grid-rows-[auto,2fr,auto] gap-2"}>{children}</main>
      <Footer />
    </>
  );
}
export default Layout;
