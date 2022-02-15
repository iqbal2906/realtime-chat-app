import React from "react";

import { Routes, Route } from "react-router-dom";

import { Join, Chat } from "./components";

const App = () => (
  <Routes>
    <Route path="/" exact element={<Join />} />
    <Route path="/chat" element={<Chat />} />
  </Routes>
);

export default App;
