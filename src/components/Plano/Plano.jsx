import React, { useState } from 'react';
import './plano.css';

const promotions = [
  {
    type: 'Promoções de Banho',
    plans: [
      {
        day: 'Segunda-Feira',
        price: 'R$42',
        services: ['Banho pet', 'Escovação de dentes para cães'],
        note: '*O valor pode variar conforme a raça e porte do animal.',
        buttonText: 'Agende agora',
        buttonLink: 'https://api.whatsapp.com/send?phone=5513991103209&text=Olá, Clínica Violetta! Gostaria de informações sobre as promoções de banho.',
      },
      {
        day: 'Terça-Feira',
        price: 'R$49',
        services: ['Banho pet', 'Escovação simples de pelos'],
        note: '*Consulte a tabela para outras raças e tamanhos.',
        buttonText: 'Agende agora',
        buttonLink: 'https://api.whatsapp.com/send?phone=5513991103209&text=Olá, Clínica Violetta! Gostaria de informações sobre as promoções de banho.',
      },
      {
        day: 'Quarta-Feira',
        price: 'R$55',
        services: ['Banho pet', 'Hidratação de pelos profissional'],
        note: '*Promoção válida para pets cadastrados.',
        buttonText: 'Agende agora',
        buttonLink: 'https://api.whatsapp.com/send?phone=5513991103209&text=Olá, Clínica Violetta! Gostaria de informações sobre as promoções de banho.',
      },
      {
        day: 'Quinta-Feira',
        price: 'R$49',
        services: ['Spa Pet com cromoterapia', 'Banho relaxante + massagem'],
        note: '*O preço pode variar conforme o porte do pet.',
        buttonText: 'Agende agora',
        buttonLink: 'https://api.whatsapp.com/send?phone=5513991103209&text=Olá, Clínica Violetta! Gostaria de informações sobre as promoções de banho.',
      },
    ],
  },
  {
    type: 'Planos de Saúde Pet',
    plans: [
      {
        day: 'Plano Care',
        price: 'R$49,90/mês',
        services: ['Consultas veterinárias básicas', 'Check-up anual'],
        note: '*Cobertura para cuidados essenciais.',
        buttonText: 'Assinar plano',
        buttonLink: 'https://api.whatsapp.com/send?phone=5513991103209&text=Olá, Clínica Violetta! Gostaria de assinar o plano Care.',
      },
      {
        day: 'Plano Essencial',
        price: 'R$129,90/mês',
        services: ['Consultas', 'Vacinação pet', 'Exames laboratoriais'],
        note: '*Cobertura intermediária para cães e gatos.',
        buttonText: 'Assinar plano',
        buttonLink: 'https://api.whatsapp.com/send?phone=5513991103209&text=Olá, Clínica Violetta! Gostaria de assinar o plano Essencial.',
      },
      {
        day: 'Plano Especial',
        price: 'R$249,90/mês',
        services: ['Consultas ilimitadas', 'Vacinas', 'Banho e tosa mensal'],
        note: '*Plano completo para pets exigentes.',
        buttonText: 'Assinar plano',
        buttonLink: 'https://api.whatsapp.com/send?phone=5513991103209&text=Olá, Clínica Violetta! Gostaria de assinar o plano Especial.',
      },
    ],
  },
];

const Promotions = () => {
  const [currentTypeIndex, setCurrentTypeIndex] = useState(0);

  const handleNext = () => {
    setCurrentTypeIndex((prevIndex) => (prevIndex + 1) % promotions.length);
  };

  const handlePrev = () => {
    setCurrentTypeIndex((prevIndex) => (prevIndex - 1 + promotions.length) % promotions.length);
  };

  const currentPromotion = promotions[currentTypeIndex];

  return (
    <div className={`promotions-container ${currentPromotion.type.includes('Saúde') ? 'health-plan' : ''}`}>
      <h1 className="promotions-title">Clínica Veterinária em Praia Grande – {currentPromotion.type}</h1>

      <div className="carousel-controls">
        <button onClick={handlePrev} className="carousel-button">◀</button>
        <h2 className="promotion-type">{currentPromotion.type}</h2>
        <button onClick={handleNext} className="carousel-button">▶</button>
      </div>

      <div className="promotions-grid">
        {currentPromotion.plans.map((promo, index) => (
          <div key={index} className="promotion-card">
            <h2 className="promotion-day">{promo.day}</h2>
            <h3 className="promotion-price">{promo.price}</h3>
            <ul className="promotion-services">
              {promo.services.map((service, idx) => (
                <li key={idx}>{service}</li>
              ))}
            </ul>
            <p className="promotion-note">{promo.note}</p>
            <a href={promo.buttonLink} className="promotion-button" target="_blank" rel="noreferrer">
              {promo.buttonText}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Promotions;
