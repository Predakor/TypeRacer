import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Play from "./pages/Play";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile.js";
import About from "./pages/About";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/typer" element={<Play />} />
        <Route path="/typer/settings" element={<Settings />} />
        <Route path="/typer/profile" element={<Profile />} />
        <Route path="/typer/about" element={<About />} />
      </Routes>
    </Layout>
  );
}

export default App;
