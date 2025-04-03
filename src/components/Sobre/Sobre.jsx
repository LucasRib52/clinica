import React, { useState, useEffect } from 'react';
import './sobre.css';

// Importando as imagens
import image1 from '../../assets/clinica.jpg';
import image2 from '../../assets/atendimento.jpg';
import image3 from '../../assets/1.jpg';
import image4 from '../../assets/2.jpg';
import image5 from '../../assets/3.jpg';
import image6 from '../../assets/4.jpg';
import image7 from '../../assets/5.jpg';
import image8 from '../../assets/6.jpg';
import image9 from '../../assets/7.jpg';

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

const Sobre = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const getVisibleDots = () => {
        let start = currentIndex - 1;
        if (start < 0) start = images.length - 1;
        const visibleDots = [];
        for (let i = 0; i < 3; i++) {
            visibleDots.push((start + i) % images.length);
        }
        return visibleDots;
    };

    return (
        <div>
            <div className="sobre-container">
                <div className="sobre-imagem">
                    <div className="image-circle">
                        <img src={images[currentIndex]} alt={`Imagem ${currentIndex + 1}`} className="carousel-image" />
                        <div className="carousel-dots">
                            {getVisibleDots().map((index) => (
                                <span
                                    key={index}
                                    className={`dot ${index === currentIndex ? 'active' : ''}`}
                                ></span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="sobre-conteudo">
                    <h2 className="sobre-titulo">Sobre a Clínica Violetta</h2>
                    <p className="sobre-descricao">
                        A <strong>Clínica Veterinária Violetta</strong> é referência em <strong>atendimento veterinário 24 horas</strong> em <strong>Praia Grande</strong>, oferecendo serviços completos para o cuidado do seu pet. Realizamos <strong>consultas, vacinação, internação, emergências</strong> e atendimento para animais exóticos com hora marcada.
                    </p>
                    <p className="sobre-descricao">
                        Nossa estrutura foi pensada para o conforto e segurança do seu pet. Contamos com <strong>salas climatizadas, internamento separado para cães e gatos, laboratório próprio para exames laboratoriais</strong>, sala cirúrgica completa, exames de imagem e uma equipe especializada em diversas áreas da medicina veterinária.
                    </p>
                    <a
                        href="https://api.whatsapp.com/send?phone=5513991103209&text=Ol%C3%A1%2C%20Cl%C3%ADnica%20Violetta!%20Eu%20preciso%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20seus%20servi%C3%A7os%20veterin%C3%A1rios."
                        className="sobre-saiba-mais"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Saiba Mais
                    </a>
                </div>
            </div>

            <div className="destaques-container">
                <div className="destaque-item">
                    <h3>24H</h3>
                    <p>Atendimento veterinário de emergência</p>
                </div>
                <div className="destaque-item">
                    <h3>+2.000</h3>
                    <p>Pets atendidos com carinho e dedicação</p>
                </div>
                <div className="destaque-item">
                    <h3>+200</h3>
                    <p>Avaliações 5 estrelas no Google</p>
                </div>
                <div className="destaque-item">
                    <h3>+10</h3>
                    <p>Especialidades veterinárias disponíveis</p>
                </div>
            </div>
        </div>
    );
};

export default Sobre;
