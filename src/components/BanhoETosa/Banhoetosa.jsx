import React, { useEffect } from "react";
import "./banhoetosa.css";
import Endereco from "../Endereco/Endereco";
import Depoimentos from "../Depoimentos/Depoimentos";

const imagens = import.meta.glob("../../assets/banhoetosa/*.jpg", { eager: true });
const fotos = Object.values(imagens).map((mod) => mod.default);

const BanhoETosa = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="banhoetosa">
      {/* HERO */}
      <section className="hero reveal">
        <div className="container">
          <h1>Transforme o dia do seu pet</h1>
          <p>
            No nosso centro de estética, cada banho e tosa é um momento de carinho, cuidado e relaxamento. 
            Utilizamos produtos de alta qualidade, ambiente climatizado e equipe especializada para garantir a felicidade e o bem-estar do seu pet.
          </p>
          <a
             href="https://api.whatsapp.com/send?phone=5513991103209&text=Ol%C3%A1%2C%20Cl%C3%ADnica%20Violetta!%20Eu%20preciso%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20seus%20servi%C3%A7os%20veterin%C3%A1rios."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero"
          >
            💜 Quero agendar agora
          </a>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="beneficios reveal">
        <div className="container">
          <h2>✨ Por que confiar na gente?</h2>
          <div className="beneficios-grid">
            <div className="beneficio-item"><span className="emoji">🧴</span><p>Produtos de alta qualidade e hipoalergênicos</p></div>
            <div className="beneficio-item"><span className="emoji">👩‍⚕️</span><p>Profissionais apaixonados por pets</p></div>
            <div className="beneficio-item"><span className="emoji">📸</span><p>Antes e depois registrados com carinho</p></div>
            <div className="beneficio-item"><span className="emoji">🏠</span><p>Ambiente limpo, climatizado e seguro</p></div>
            <div className="beneficio-item"><span className="emoji">🫧</span><p>Hidratação e finalização com perfume pet</p></div>
            <div className="beneficio-item"><span className="emoji">🐾</span><p>Atendimento individualizado e acolhedor</p></div>
          </div>
        </div>
      </section>

      {/* SEPARADOR VISUAL */}
      <div className="separador reveal">
        <h2>Nossos clientes peludos 💜</h2>
        <p>
          Cada pet é atendido com carinho e cuidado individualizado. Veja quem já passou por aqui!
        </p>
      </div>

      {/* GALERIA */}
      <section className="galeria reveal">
        <div className="container">
          <div className="grid-galeria">
            {fotos.map((foto, index) => (
              <div className="item" key={index}>
                <div className="img-wrapper">
                  <img src={foto} alt={`Pet ${index + 1}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENDEREÇO E DEPOIMENTOS */}
      <Endereco />
      <Depoimentos />
    </div>
  );
};

export default BanhoETosa;
