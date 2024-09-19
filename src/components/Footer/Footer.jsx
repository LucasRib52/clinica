import React from "react";
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
        <p>
          Desenvolvido por{" "}
          <a
            href="https://www.devlucas.tech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lucas Cardoso
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
