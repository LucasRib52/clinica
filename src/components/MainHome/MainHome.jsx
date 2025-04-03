import React, { useEffect } from "react";
import Home from "../Home/Home";
import Sobre from "../Sobre/Sobre";
import Services from "../Services/Service";
import Plano from "../Plano/Plano";
import Endereco from "../Endereco/Endereco";
import Depoimentos from "../Depoimentos/Depoimentos";
import FloatingButton from "../FloatingButton/FloatingButton";
import Footer from "../Footer/Footer";

const MainHome = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    // Scroll automático para âncora (após voltar do banho e tosa)
    const target = localStorage.getItem("scrollTarget");
    if (target) {
      const el = document.getElementById(target);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 300); // dá tempo da página carregar
      }
      localStorage.removeItem("scrollTarget");
    }
  }, []);

  return (
    <>
      <section id="home" className="reveal">
        <Home />
      </section>
      <section id="services" className="reveal">
        <Services />
      </section>
      <section id="sobre" className="reveal">
        <Sobre />
      </section>
      <section id="planos" className="reveal">
        <Plano />
      </section>
      <section id="endereco" className="reveal">
        <Endereco />
      </section>
      <section id="avaliacao" className="reveal">
        <Depoimentos />
      </section>
      <FloatingButton />
      <Footer />
    </>
  );
};

export default MainHome;
