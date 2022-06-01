import Navigation from "./navigation/Navigation";
import Panel from "./panel/Panel";
import Footer from "./footer/Footer";

function Layout(props) {
  return (
    <>
      <Navigation />
      <main>
        <Panel>{props.children}</Panel>
      </main>
      <Footer />
    </>
  );
}
export default Layout;
