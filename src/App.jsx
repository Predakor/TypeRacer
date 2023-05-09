import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Play from "./pages/play";
import Settings from "./pages/settings";
import Profile from "./pages/profile.jsx";
import About from "./pages/about";

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
