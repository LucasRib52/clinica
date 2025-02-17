import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import TagManager from "react-gtm-module";
import "./global.css";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Sobre from "./components/Sobre/Sobre";
import Services from "./components/Services/Service";
import Plano from "./components/Plano/Plano";
import Endereco from "./components/Endereco/Endereco";
import Depoimentos from "./components/Depoimentos/Depoimentos";
import FloatingButton from "./components/FloatingButton/FloatingButton";
import Taxas from "./components/Taxas/Taxas"; // Simulador de Taxas

function App() {
  useEffect(() => {
    // Inicializa o Google Tag Manager
    const tagManagerArgs = {
      gtmId: "GTM-MBJXCS3K",
    };
    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <Router>
      <Routes>
        {/* 🔒 Página oculta do Simulador de Taxas (SEM HEADER) */}
        <Route path="/simulador-taxas" element={<Taxas />} />

        {/* 🌎 Página Principal (COM HEADER) */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <section id="home">
                <Home />
              </section>
              <section id="services">
                <Services />
              </section>
              <section id="sobre">
                <Sobre />
              </section>
              <section id="planos">
                <Plano />
              </section>
              <section id="endereco">
                <Endereco />
              </section>
              <section id="avaliacao">
                <Depoimentos />
              </section>
              <FloatingButton />
            </>
          }
        />

        {/* 🔄 Redireciona qualquer rota inválida para a Home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
