import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import './depoimentos.css';

import foto1 from '../../assets/clientes/1.png';
import foto2 from '../../assets/clientes/2.png';
import foto3 from '../../assets/clientes/3.png';
import foto4 from '../../assets/clientes/4.png';
import foto5 from '../../assets/clientes/5.png';
import foto6 from '../../assets/clientes/6.png';

const Depoimentos = () => {
  const depoimentos = [
    {
      nome: "Barbara Fappi",
      comentario: "Profissionais muito atenciosos. Tratam nossos bichinhos com muito carinho. A estrutura da clínica é muito boa e tem estacionamento na frente. Recomendo.",
      estrelas: 5,
      foto: foto1
    },
    {
      nome: "Naiane Caires",
      comentario: "Estive nessa clínica para levar minha coelha que estava com suspeita de sarna, e prontamente me atenderam com a maior educação e atenção com minha bebê! Atendimento excelente!",
      estrelas: 5,
      foto: foto2
    },
    {
      nome: "Érika Marques de Jesus",
      comentario: "A dra Linda salvou meu pet! Atendimento humanizado e estrutura impecável. Clínica veterinária 24 horas confiável e acolhedora.",
      estrelas: 5,
      foto: foto3
    },
    {
      nome: "Priscila Moreira",
      comentario: "Ótimo atendimento desde o primeiro contato. Atendimento clínico muito bom, com cuidado, atenção e carinho.",
      estrelas: 5,
      foto: foto4
    },
    {
      nome: "Cesar Abreu",
      comentario: "Levei meu cachorro lá, e ele foi tratado com muito carinho e atenção. Agradeço a toda a equipe.",
      estrelas: 5,
      foto: foto5
    },
    {
      nome: "Carlos Silva",
      comentario: "A clínica é excelente, com profissionais extremamente capacitados e atenciosos.",
      estrelas: 5,
      foto: foto6
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(depoimentos.length / 3));
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const renderDots = () => {
    const totalDots = Math.ceil(depoimentos.length / 3);
    return Array.from({ length: totalDots }, (_, i) => (
      <div
        key={i}
        className={`dot ${currentIndex === i ? 'active' : ''}`}
        onClick={() => setCurrentIndex(i)}
      ></div>
    ));
  };

  const startIndex = currentIndex * 3;
  const visibleDepoimentos = depoimentos.slice(startIndex, startIndex + 3);

  return (
    <section className="depoimentos-container">
      <h2>Depoimentos</h2>
      <p className="subtitulo">
        Saiba o que nossos clientes dizem sobre a Clínica Veterinária Violetta, referência em atendimento 24h em Praia Grande.
      </p>

      <div className="depoimentos-grid">
        {visibleDepoimentos.map((depoimento, index) => (
          <div key={index} className="depoimento-card">
            <div className="depoimento-header">
              <img src={depoimento.foto} alt={depoimento.nome} className="author-photo" />
              <div className="author-info">
                <div className="nome">{depoimento.nome}</div>
              </div>
            </div>
            <div className="comentario">
              <p>{depoimento.comentario}</p>
            </div>
            <div className="estrelas">
              {Array.from({ length: depoimento.estrelas }).map((_, idx) => (
                <FaStar key={idx} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="pagination-dots">{renderDots()}</div>

      <div className="avaliacao-btn-container">
        <a
          className="avaliacao-btn"
          href="https://g.page/r/CQ-LeKb8vY4kEBM/review"
          target="_blank"
          rel="noopener noreferrer"
        >
          Deixe sua Avaliação
        </a>
      </div>
    </section>
  );
};

export default Depoimentos;
