import React, { useEffect } from 'react';
import './global.css'; // Importa o arquivo global.css
import TagManager from 'react-gtm-module'; // Importa o módulo GTM
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Sobre from './components/Sobre/Sobre';
import Services from './components/Services/Service';
import Plano from './components/Plano/Plano';
import Endereco from './components/Endereco/Endereco';
import Depoimentos from './components/Depoimentos/Depoimentos';
import Footer from './components/Footer/Footer';
import FloatingButton from './components/FloatingButton/FloatingButton';

// Componente para rolar até a seção correspondente à URL
function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname) {
      const sectionId = location.pathname.replace('/', ''); // Remove a barra para obter o ID
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
}

function App() {
  useEffect(() => {
    // Inicializa o Google Tag Manager
    const tagManagerArgs = {
      gtmId: 'GTM-MBJXCS3K', // Substitua pelo seu ID do GTM
    };
    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <Router>
      <ScrollToSection />
      <Header />
      {/* Todas as seções permanecem renderizadas */}
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
      <Footer />
      <FloatingButton />
    </Router>
  );
}

export default App;
