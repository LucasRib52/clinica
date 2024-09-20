import React from 'react';
import './home.css';
import { FaWhatsapp } from 'react-icons/fa'; // Importar o ícone do WhatsApp
import videoSource from '/src/assets/teste.mp4'; // Importar o vídeo corretamente

const Home = () => {
  return (
    <section className="home">
      <video className="background-video" autoPlay loop muted playsInline>
        <source src={videoSource} type="video/mp4" />
        Seu navegador não suporta o vídeo.
      </video>
      {/* Seção de conteúdo à esquerda */}
      <div className="home-content">
        <div className="home-buttons">
          <a 
            href="https://api.whatsapp.com/send?phone=5513991103209&text=Ol%C3%A1%2C%20Cl%C3%ADnica%20Violetta!%20Eu%20preciso%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20seus%20servi%C3%A7os%20veterin%C3%A1rios." 
            target="_blank" 
            rel="noopener noreferrer">
            <button className="btn-primary">
              <FaWhatsapp style={{ marginRight: '10px' }} />
              Fale com a Veterinária
            </button>
          </a>
          {/* Link para a seção de serviços */}
          <a href="#services">
            <button className="btn-secondary">Nossos Serviços</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
