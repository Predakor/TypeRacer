import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Layout from "./components/layout/Layout";
import Settings from "./pages/Settings";
import Main from "./pages/Main";
import Play from "./pages/Play";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="settings" element={<Settings />} />
        <Route path="play" element={<Play />} />
      </Routes>
    </Layout>
  );
}

export default App;
