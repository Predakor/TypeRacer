import { Route, Routes } from "react-router-dom";
import Navigation from "./components/layout/main/Navigation";
import Settings from "./components/Settings";
import Main from "./components/layout/main/Main";
import Play from "./components/layout/play/Play";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="settings" element={<Settings />} />
        <Route path="play" element={<Play />} />
      </Routes>
    </div>
  );
}

export default App;
