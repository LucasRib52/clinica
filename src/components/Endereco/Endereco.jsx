import React from 'react';
import { FaFacebookF, FaInstagram, FaGoogle } from 'react-icons/fa'; // Importando ícones
import './endereco.css';

const Endereco = () => {
  const handleLocationClick = () => {
    window.open("https://www.google.com/maps/dir//Cl%C3%ADnica+Veterin%C3%A1ria+Violetta+24+horas+-+Av.+Rio+Branco,+552+-+Canto+do+Forte,+Praia+Grande+-+SP,+11700-200/@-24.0092352,-46.408915,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x94ce1d3233086269:0x248ebdfca6788b0f!2m2!1d-46.4063401!2d-24.0092401!3e0?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D", "_blank");
  };

  return (
    <section className="endereco-container">
      <div className="endereco-content">
        <div className="endereco-info">
          <h2>Onde nos encontrar</h2>

          <h3>Endereço</h3>
          <p>Av. Rio Branco, 552 - Canto do Forte, Praia Grande - SP, 11700-200</p>

          <h3>Telefone</h3>
          <p>(13) 99110-3209</p>

          <h3>E-mail</h3>
          <p>clinvetvioletta24horas@gmail.com</p>

          <h3>Redes Sociais</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/p/Cl%C3%ADnica-Veterin%C3%A1ria-Violetta-24-Horas-100075985121997/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/clinicaveterinariavioletta/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.google.com/search?q=clinica+veterinaria+violetta&oq=c&gs_lcrp=EgZjaHJvbWUqDggCEEUYJxg7GIAEGIoFMgYIABBFGDwyBggBEEUYPDIOCAIQRRgnGDsYgAQYigUyEwgDEC4YgwEYxwEYsQMY0QMYgAQyBggEEEUYOzIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBCDEwNTJqMGo0qAIAsAIB&sourceid=chrome&ie=UTF-8" target="_blank" rel="noopener noreferrer">
              <FaGoogle />
            </a>
          </div>
        </div>

        <div className="endereco-mapa">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.76210059482!2d-46.40810648443587!3d-23.581599384669025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5cf2bf5d0d7d%3A0xe4a1984dd8e7b451!2sAv.%20Rio%20Branco%2C%20552%20-%20Canto%20do%20Forte%2C%20Praia%20Grande%20-%20SP%2C%2011700-200%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1599576227088!5m2!1spt-BR!2sus"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>

        {/* Botão de localização */}
        <div className="localizacao-btn-container">
          <button className="localizacao-btn" onClick={handleLocationClick}>
            Ver Localização
          </button>
        </div>
      </div>
    </section>
  );
}

export default Endereco;
