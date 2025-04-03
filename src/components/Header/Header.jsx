import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './header.css';
import logo from '../../assets/logo.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const scrollAndNavigate = (e, targetId, newUrl) => {
    e.preventDefault();

    // Se não estamos na home, redireciona primeiro
    if (location.pathname !== '/') {
      localStorage.setItem("scrollTarget", targetId);
      navigate('/');
    } else {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      window.history.pushState(null, '', newUrl);
    }

    closeMenu();
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      localStorage.setItem("scrollTarget", "home");
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', '/');
    }
    closeMenu();
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo-container">
          <a href="/" onClick={handleHomeClick}>
            <img src={logo} alt="Logo" className="logo" />
          </a>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          &#9776;
        </div>

        <nav className="nav">
          <ul className="nav-list">
            <li><a href="/" onClick={handleHomeClick}>Home</a></li>
            <li><a href="/services" onClick={(e) => scrollAndNavigate(e, 'services', '/services')}>Serviços</a></li>
            <li><a href="/promotions" onClick={(e) => scrollAndNavigate(e, 'planos', '/promotions')}>Promoções</a></li>
          </ul>
        </nav>

        <nav className="nav">
          <ul className="nav-list">
            <li><a href="/planos" onClick={(e) => scrollAndNavigate(e, 'planos', '/planos')}>Planos</a></li>
            <li><a href="/banho-e-tosa">Banho e Tosa</a></li>
            <li><a href="/endereco" onClick={(e) => scrollAndNavigate(e, 'endereco', '/endereco')}>Endereço</a></li>
            <li><a href="/avaliacao" onClick={(e) => scrollAndNavigate(e, 'avaliacao', '/avaliacao')}>Avaliação</a></li>
          </ul>
        </nav>

        {menuOpen && (
          <nav className="nav-mobile">
            <div className="close-menu" onClick={closeMenu}>
              &times;
            </div>
            <ul className="nav-list-mobile">
              <li><a href="/" onClick={handleHomeClick}>Home</a></li>
              <li><a href="/services" onClick={(e) => scrollAndNavigate(e, 'services', '/services')}>Serviços</a></li>
              <li><a href="/promotions" onClick={(e) => scrollAndNavigate(e, 'planos', '/promotions')}>Promoções</a></li>
              <li><a href="/planos" onClick={(e) => scrollAndNavigate(e, 'planos', '/planos')}>Planos</a></li>
              <li><a href="/banho-e-tosa">Banho e Tosa</a></li>
              <li><a href="/endereco" onClick={(e) => scrollAndNavigate(e, 'endereco', '/endereco')}>Endereço</a></li>
              <li><a href="/avaliacao" onClick={(e) => scrollAndNavigate(e, 'avaliacao', '/avaliacao')}>Avaliação</a></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
