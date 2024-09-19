import React from 'react';
import './global.css'; // Importa o arquivo global.css
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
