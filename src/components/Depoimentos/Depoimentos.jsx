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
    { nome: "Barbara Fappi", comentario: "Profissionais muito atenciosos. Tratam nossos bichinhos com muito carinho. A estrutura da clínica é muito boa e tem estacionamento na frente. Recomendo.", estrelas: 5, foto: foto1 },
    { nome: "Naiane Caires", comentario: "Estive nessa clínica para levar minha coelha que estava com suspeita de sarna, e prontamente me atenderam com a maior educação e atenção com minha bebê! Dr. Rafael Carneiro com maior amor do mundo junto com a auxiliar dele, e após a consulta o Dr. Rafa manteve-se prontamente via WhatsApp para responder dúvidas e auxiliar nos cuidados com minha filha. Virou minha clínica de confiança para cuidar das minhas filhas atuais, e as que ainda virão rsrs. Parabéns a todos!❤️", estrelas: 5, foto: foto2 },
    { nome: "Érika Marques de Jesus", comentario: "Eu amei a dra Linda!! Eu estava passando com meu cachorro em outro local, pois ele estava tossindo demais. O coitado não dormia e nem deixava a gente dormir. Meses e meses e ele piorando, levei nesse local e quem o consultou foi a dra Linda. Graças a Deus o Rico está muito melhor. Eu só tenho a agradecer.", estrelas: 5, foto: foto3 },
    { nome: "Priscila Moreira", comentario: "Ótimo atendimento desde o primeiro contato. Atendimento clínico muito bom, com cuidado, atenção e carinho.", estrelas: 5, foto: foto4 },
    { nome: "Amanda Lima", comentario: "Levei meu cachorro lá, e ele foi tratado com muito carinho e atenção. Agradeço a toda a equipe.", estrelas: 5, foto: foto5 },
    { nome: "Carlos Silva", comentario: "A clínica é excelente, com profissionais extremamente capacitados e atenciosos.", estrelas: 5, foto: foto6 }
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
    const dots = [];
    for (let i = 0; i < Math.ceil(depoimentos.length / 3); i++) {
      dots.push(
        <div
          key={i}
          className={`dot ${currentIndex === i ? 'active' : ''}`}
          onClick={() => setCurrentIndex(i)}
        ></div>
      );
    }
    return dots;
  };

  const startIndex = currentIndex * 3;
  const visibleDepoimentos = depoimentos.slice(startIndex, startIndex + 3);

  return (
    <section className="depoimentos-container">
      <h2>Depoimentos</h2>
      <p className="subtitulo">Saiba o que nossos pacientes dizem sobre nós</p>
      
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
      <div className="pagination-dots">
        {renderDots()}
      </div>
    </section>
  );
};

export default Depoimentos;
