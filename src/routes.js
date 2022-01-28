import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/home";
import AboutPage from "./Pages/sobre";
import Contatos from "./Pages/contato";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contato" element={<Contatos />} />
      <Route path="/sobre" element={<AboutPage />} />
    </Routes>
  );
};

export default MainRoutes;
