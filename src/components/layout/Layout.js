import Navigation from "./navigation/Navigation";
import Section from "./section/Section";
import Footer from "./footer/Footer";

function Layout(props) {
  return (
    <>
      <Navigation />
      <main>
        <Section>{props.children}</Section>
      </main>
      <Footer />
    </>
  );
}
export default Layout;
