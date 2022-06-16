import React from "react";
import { Routes, Route } from "react-router-dom";

import { Leon, Home, About } from "./pages";
import { Header } from "./layout";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Leon" element={<Leon />} />
      </Routes>
    </>
  );
};

// State is like data that belons to a component

export default App;
