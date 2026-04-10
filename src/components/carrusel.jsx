import React from "react";
import "./carrusel.css";
import carrusel1 from "../assets/carrusel1.jpg";
import carrusel2 from "../assets/carrusel2.jpeg";
import carrusel3 from "../assets/carrusel3.jpeg";
import carrusel4 from "../assets/carrusel4.jpeg";

const Carrusel = () => {
  const consulta = () => {
    const numero = 593987175379;
    const mensaje = "Hola me gustaria más información de:";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };
  return (
    <>
      <div className="carrusel">
        <div className="imagenes">
          <img src={carrusel1} alt="imagen1" />
          <img src={carrusel3} alt="imagen3" />
          <img src={carrusel4} alt="imagen4" />
        </div>
        <div className="overlay"></div>
        <div className="texto-superpuesto">
          <h1 className="titulo mb-4">
            Soluciones digitales para tu hogar y negocio
          </h1>
          <p className="parrafo">
            En Fronthers, combinamos desarrollo web, tecnología y soporte
            técnico para ayudarte a crecer. Brindamos soluciones accesibles y
            efectivas a pequeños negocios, tiendas y emprendedores que buscan
            digitalizarse o mejorar su equipo de trabajo.
          </p>
          <button className="boton" onClick={consulta}>
            Chatea con nosotros
          </button>
        </div>
      </div>
    </>
  );
};

export default Carrusel;
