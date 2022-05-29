import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Profile from "./pages/Profile.js";
import About from "./pages/About";
import Play from "./pages/Play";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="Typer" element={<Play />} />
        <Route path="Typer/profile" element={<Profile />} />
        <Route path="Typer/about" element={<About />} />
      </Routes>
    </Layout>
  );
}

export default App;
