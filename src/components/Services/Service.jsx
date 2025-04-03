import React from 'react';
import './service.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStethoscope, faUserMd, faProcedures, faVial, faCut, faScissors, faBed, faClipboard } from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    name: 'Consulta 24 Horas',
    icon: faStethoscope,
    desc: 'Atendimento veterinário de emergência disponível 24 horas em nossa clínica em Praia Grande.',
  },
  {
    name: 'Consulta com Especialistas',
    icon: faUserMd,
    desc: 'Veterinários especializados em diversas áreas, prontos para cuidar do seu pet com atenção e carinho.',
  },
  {
    name: 'Cirurgia Veterinária',
    icon: faCut,
    desc: 'Realizamos cirurgias com total segurança e estrutura adequada para o bem-estar do seu animal.',
  },
  {
    name: 'Exames Laboratoriais',
    icon: faVial,
    desc: 'Exames rápidos e precisos para diagnóstico seguro em nossa clínica veterinária.',
  },
  {
    name: 'Exames de Imagem',
    icon: faProcedures,
    desc: 'Ultrassonografia, raio-x e outros exames de imagem para avaliar a saúde do seu pet.',
  },
  {
    name: 'Banho e Tosa',
    icon: faScissors,
    desc: 'Cuidado, higiene e muito carinho para deixar seu pet ainda mais bonito e saudável.',
  },
  {
    name: 'Hospedagem Pet',
    icon: faBed,
    desc: 'Ambiente seguro, limpo e confortável para hospedar seu animal com todo cuidado necessário.',
  },
  {
    name: 'Plano de Saúde Animal',
    icon: faClipboard,
    desc: 'Planos de saúde veterinários com cobertura completa e preços acessíveis.',
  },
];

const Service = () => {
  return (
    <section className="service-section">
      <h2 className="service-title">Serviços da Clínica Veterinária Violetta em Praia Grande</h2>
      <p className="service-description">
        Na Clínica Veterinária Violetta, oferecemos atendimento veterinário 24 horas com uma equipe altamente qualificada.
        Contamos com estrutura completa em Praia Grande para cuidar da saúde do seu pet com amor, tecnologia e dedicação.
      </p>
      <div className="service-container">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <div className="service-icon">
              <FontAwesomeIcon icon={service.icon} size="2x" />
            </div>
            <h3>{service.name}</h3>
            <p className="service-text">{service.desc}</p>
          </div>
        ))}
      </div>
      <a
        href="https://api.whatsapp.com/send?phone=5513991103209&text=Ol%C3%A1%2C%20Cl%C3%ADnica%20Violetta!%20Eu%20preciso%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20seus%20servi%C3%A7os%20veterin%C3%A1rios."
        className="service-all"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver todos os serviços
      </a>
    </section>
  );
};

export default Service;
