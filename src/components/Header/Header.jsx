import React, { useState, useEffect } from 'react';
import './header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleMenuClick = (e, targetId, newUrl) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });

      // Atualiza a URL para incluir o novo caminho
      window.history.pushState(null, '', newUrl);
    }

    closeMenu();
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.pushState(null, '', '/'); // Atualiza a URL para "/"
    closeMenu();
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Logo à esquerda no celular */}
        <div className="logo-container">
          <a href="/" onClick={handleHomeClick}>
            <img src="/src/assets/logo.png" alt="Logo" className="logo" />
          </a>
        </div>

        {/* Ícone do menu hamburguer à direita no celular */}
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776;
        </div>

        {/* Navegação normal no desktop */}
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="/" onClick={handleHomeClick}>Home</a></li>
            <li><a href="/services" onClick={(e) => handleMenuClick(e, 'services', '/services')}>Serviços</a></li>
            <li><a href="/promotions" onClick={(e) => handleMenuClick(e, 'planos', '/promotions')}>Promoções</a></li>
          </ul>
        </nav>

        {/* Navegação adicional */}
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="/planos" onClick={(e) => handleMenuClick(e, 'planos', '/planos')}>Planos</a></li>
            <li><a href="/endereco" onClick={(e) => handleMenuClick(e, 'endereco', '/endereco')}>Endereço</a></li>
            <li><a href="/avaliacao" onClick={(e) => handleMenuClick(e, 'avaliacao', '/avaliacao')}>Avaliação</a></li>
          </ul>
        </nav>

        {/* Menu hamburguer no mobile */}
        {menuOpen && (
          <nav className="nav-mobile">
            <div className="close-menu" onClick={closeMenu}>
              &times;
            </div>
            <ul className="nav-list-mobile">
              <li><a href="/" onClick={handleHomeClick}>Home</a></li>
              <li><a href="/services" onClick={(e) => handleMenuClick(e, 'services', '/services')}>Serviços</a></li>
              <li><a href="/promotions" onClick={(e) => handleMenuClick(e, 'planos', '/promotions')}>Promoções</a></li>
              <li><a href="/planos" onClick={(e) => handleMenuClick(e, 'planos', '/planos')}>Planos</a></li>
              <li><a href="/endereco" onClick={(e) => handleMenuClick(e, 'endereco', '/endereco')}>Endereço</a></li>
              <li><a href="/avaliacao" onClick={(e) => handleMenuClick(e, 'avaliacao', '/avaliacao')}>Avaliação</a></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
