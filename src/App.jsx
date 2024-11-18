import React, { useEffect } from 'react';
import './global.css'; // Importa o arquivo global.css
import TagManager from 'react-gtm-module'; // Importa o módulo GTM
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Sobre from './components/Sobre/Sobre';
import Services from './components/Services/Service';
import Plano from './components/Plano/Plano';
import Endereco from './components/Endereco/Endereco';
import Depoimentos from './components/Depoimentos/Depoimentos';
import Footer from './components/Footer/Footer';
import FloatingButton from './components/FloatingButton/FloatingButton';

function App() {
  useEffect(() => {
    // Inicializa o Google Tag Manager
    const tagManagerArgs = {
      gtmId: 'GTM-MBJXCS3K', // Substitua pelo seu ID do GTM
    };
    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <div>
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
      <Footer />
      <FloatingButton />
    </div>
  );
}

export default App;
