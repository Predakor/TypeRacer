import { Route, Routes } from "react-router-dom";
import Play, { About, Profile, Settings } from "./pages";
import Layout from "@layout/Layout";
import { useEffect } from "react";
import { themeChange } from "theme-change";

function App() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Play />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  );
}

export default App;
