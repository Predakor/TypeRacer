import Layout from "@layout/Layout";
import GameSettingsProvider from "contexts/settings-context";
import { useEffect } from "preact/hooks";
import { Route, Routes } from "react-router-dom";
import { themeChange } from "theme-change";
import { About, Play, Settings } from "./pages";

function App() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <GameSettingsProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Play />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </GameSettingsProvider>
  );
}

export default App;
