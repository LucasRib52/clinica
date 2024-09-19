import React from 'react';
import './service.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStethoscope, faUserMd, faProcedures, faVial, faCut, faScissors, faBed, faClipboard } from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    name: 'Consulta 24 Horas',
    icon: faStethoscope,
  },
  {
    name: 'Consulta com especialistas',
    icon: faUserMd,
  },
  {
    name: 'Cirurgia',
    icon: faCut,
  },
  {
    name: 'Exames Laboratoriais',
    icon: faVial,
  },
  {
    name: 'Exames de Imagem',
    icon: faProcedures,
  },
  {
    name: 'Banho e Tosa',
    icon: faScissors,
  },
  {
    name: 'Hospedagem',
    icon: faBed,
  },
  {
    name: 'Plano de Saúde',
    icon: faClipboard,
  },
];

const Service = () => {
  return (
    <section className="service-section">
      <h2 className="service-title">Serviços da Clínica</h2>
      <div className="service-container">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <div className="service-icon">
              <FontAwesomeIcon icon={service.icon} size="2x" />
            </div>
            <h3>{service.name}</h3>
          </div>
        ))}
      </div>
      {/* Adicionando o link no botão */}
      <a href="https://api.whatsapp.com/send?phone=5513991103209&text=Ol%C3%A1%2C%20Cl%C3%ADnica%20Violetta!%20Eu%20preciso%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20seus%20servi%C3%A7os%20veterin%C3%A1rios." className="service-all">Ver todos os serviços</a>
    </section>
  );
};

export default Service;
