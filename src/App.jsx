import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import TagManager from "react-gtm-module";
import "./global.css";

import Header from "./components/Header/Header";
import MainHome from "./components/MainHome/MainHome";
import Taxas from "./components/Taxas/Taxas";
import BanhoETosa from "./components/BanhoETosa/Banhoetosa";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import FloatingButton from "./components/FloatingButton/FloatingButton"; // Import do botão

function App() {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-MBJXCS3K" });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Página exclusiva do simulador de taxas */}
        <Route path="/simulador-taxas" element={<Taxas />} />

        {/* Página separada do banho e tosa */}
        <Route
          path="/banho-e-tosa"
          element={
            <>
              <Header />
              <BanhoETosa />
              <Footer />
              <FloatingButton /> {/* <-- Adicionado aqui */}
            </>
          }
        />

        {/* Rota principal que carrega todas as seções da home */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <MainHome />
            </>
          }
        />

        {/* Redirecionamento para home caso a rota não exista */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
