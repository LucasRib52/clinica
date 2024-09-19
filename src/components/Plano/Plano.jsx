import React, { useState } from 'react';
import './plano.css';

const promotions = [
    {
        type: 'Promoções de Banho',
        plans: [
            {
                day: 'Segunda-Feira',
                price: 'R$42',
                services: ['Banho', 'Escovação de dentes'],
                note: '*o valor do banho pode variar de acordo com a raça do animal',
                buttonText: 'Agende agora',
                buttonLink: 'https://api.whatsapp.com/send?phone=5513991103209&text=Ol%C3%A1%2C%20Cl%C3%ADnica%20Violetta!%20Eu%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20promo%C3%A7%C3%B5es%20de%20banho.',
            },
            {
                day: 'Terça-Feira',
                price: 'R$49',
                services: ['Banho', 'Escovação Simples de pelos'],
                note: '*o valor do banho pode variar de acordo com a raça do animal',
                buttonText: 'Agende agora',
                buttonLink: 'https://api.whatsapp.com/send?phone=5513991103209&text=Ol%C3%A1%2C%20Cl%C3%ADnica%20Violetta!%20Eu%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20promo%C3%A7%C3%B5es%20de%20banho.',
            },
            {
                day: 'Quarta-Feira',
                price: 'R$55',
                services: ['Banho', 'Hidratação de pelos'],
                note: '*o valor do banho pode variar de acordo com a raça do animal',
                buttonText: 'Agende agora',
                buttonLink: 'https://api.whatsapp.com/send?phone=5513991103209&text=Ol%C3%A1%2C%20Cl%C3%ADnica%20Violetta!%20Eu%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20promo%C3%A7%C3%B5es%20de%20banho.',
            },
            {
                day: 'Quinta-Feira',
                price: 'R$49',
                services: ['Spa Promocional', 'Banho com cromoterapia + massagem'],
                note: '*o valor do banho pode variar de acordo com a raça do animal',
                buttonText: 'Agende agora',
                buttonLink: 'https://api.whatsapp.com/send?phone=5513991103209&text=Ol%C3%A1%2C%20Cl%C3%ADnica%20Violetta!%20Eu%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20promo%C3%A7%C3%B5es%20de%20banho.',
            },
        ],
    },
    {
        type: 'Planos de Saúde',
        plans: [
            {
                day: 'Care',
                price: 'R$49,90/mês',
                services: ['Serviços básicos de saúde animal'],
                note: '*cobertura básica',
                buttonText: 'Assine Agora',
                buttonLink: 'https://api.whatsapp.com/send?phone=5513991103209&text=Ol%C3%A1%2C%20Cl%C3%ADnica%20Violetta!%20Gostaria%20de%20assinar%20o%20plano%20Care.',
            },
            {
                day: 'Essencial',
                price: 'R$129,90/mês',
                services: ['Serviços essenciais de saúde animal'],
                note: '*cobertura essencial',
                buttonText: 'Assine Agora',
                buttonLink: 'https://api.whatsapp.com/send?phone=5513991103209&text=Ol%C3%A1%2C%20Cl%C3%ADnica%20Violetta!%20Gostaria%20de%20assinar%20o%20plano%20Essencial.',
            },
            {
                day: 'Especial',
                price: 'R$249,90/mês',
                services: ['Serviços completos de saúde animal', 'Banho e tosa incluídos'],
                note: '*cobertura completa com benefícios extras',
                buttonText: 'Assine Agora',
                buttonLink: 'https://api.whatsapp.com/send?phone=5513991103209&text=Ol%C3%A1%2C%20Cl%C3%ADnica%20Violetta!%20Gostaria%20de%20assinar%20o%20plano%20Especial.',
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
        <div className={`promotions-container ${currentPromotion.type === 'Planos de Saúde' ? 'health-plan' : ''}`}>
            <h1 className="promotions-title">Conheça nossas promoções</h1>
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
                        {promo.additionalNote && <p className="promotion-additional-note">{promo.additionalNote}</p>}
                        <a href={promo.buttonLink} className="promotion-button">{promo.buttonText}</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Promotions;
