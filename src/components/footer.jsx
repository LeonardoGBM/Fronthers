import React, { Fragment } from "react";
import "./footer.css";
import Fronthersact from "../assets/Fronthersact.png";

const Footer = () => {
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row footer pt-5 text-center text-md-start">
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <img src={Fronthersact} alt="logo" className="logo mx-auto mx-md-0" />
          </div>

          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <h3 className="titulo"><b>Menú</b></h3>
            <ul>
              <li>Inicio</li>
              <li>¿Quienes Somos?</li>
              <li>Servicios</li>
              <li>Contáctanos</li>
            </ul>
          </div>

          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <h3 className="titulo"><b>Ubicaciones</b></h3>
            <ul>
              <li>Villaflora</li>
            </ul>
          </div>

          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <h3 className="titulo"><b>Síguenos</b></h3>
            <a href="#" className="text-reset me-3">
              <i className="bi bi-facebook fs-3"></i>
            </a>
            <a href="#" className="text-reset me-3">
              <i className="bi bi-instagram fs-3"></i>
            </a>
            <a href="#" className="text-reset">
              <i className="bi bi-whatsapp fs-3"></i>
            </a>
          </div>

          <div className="col-12 fronthers mt-4 mb-3">
            &copy; FRONTHERS - 2025
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
