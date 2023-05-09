import Navigation from "./navigation/Navigation";
import Main from "./main/Main";
import Footer from "./Footer/Footer";

function Layout(props) {
  return (
    <>
      <Navigation />
      <Main>{props.children}</Main>
      <Footer />
    </>
  );
}
export default Layout;
