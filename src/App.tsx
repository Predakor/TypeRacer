import Layout from "@layout/Layout";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Play from "./pages/play";
import Profile from "./pages/profile.js";
import Settings from "./pages/settings";

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
