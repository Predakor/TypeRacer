import Layout from "@layout/Layout";
import { GameStateProvider } from "contexts/gameState-context";
import GameSettingsProvider from "contexts/settings-context";
import { useEffect } from "preact/hooks";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { themeChange } from "theme-change";
import { About, Play, Settings } from "./pages";

function App() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <BrowserRouter basename={"/typer"}>
      <GameSettingsProvider>
        <GameStateProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Play />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Layout>
        </GameStateProvider>
      </GameSettingsProvider>
    </BrowserRouter>
  );
}

export default App;
