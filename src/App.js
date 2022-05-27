import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Settings from "./pages/Settings";
import Play from "./pages/Play";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Play />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </Layout>
  );
}

export default App;
