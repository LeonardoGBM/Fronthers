import React, { Fragment } from "react";
import "./navbarestilo.css";
import Fronthersact from "../assets/Fronthersact.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row fixed-top navbar align-items-center">
          {/* Logo */}
          <div className="col-6 col-md-3 d-flex justify-content-center justify-content-md-start mt-2">
            <img src={Fronthersact} alt="logo" className="logo" />
          </div>

          {/* Menú para escritorio */}
          <div className="col-6 col-md-9 d-none d-md-flex justify-content-end mt-2">
            <ul className="list-unstyled menu m-0 d-flex">
              <li className="inicio">
                <Link to="/" className="text-reset">
                  <b>Inicio</b>
                </Link>
              </li>
              <li>
                <Link to="/Somos" className="text-reset">
                  ¿Quiénes Somos?
                </Link>
              </li>
              <li>
                <Link to="/servicio" className="text-reset">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/Contactos" className="text-reset">
                  Contactos
                </Link>
              </li>
            </ul>
          </div>

          {/* Menú hamburguesa para móviles */}
          <div className="col-6 d-md-none d-flex justify-content-end mt-2">
            <button
              className="btn btn-outline-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mobileMenu"
              aria-expanded="false"
              aria-controls="mobileMenu"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Menú colapsable en móviles */}
        <div
          className="collapse d-md-none bg-black text-center pt-3"
          id="mobileMenu"
        >
          <ul className="list-unstyled">
            <li>
              <Link to="/" className="text-reset d-block py-2">
                <b>Inicio</b>
              </Link>
            </li>
            <li>
              <Link to="/Somos" className="text-reset d-block py-2">
                ¿Quiénes Somos?
              </Link>
            </li>
            <li>
              <Link to="/servicio" className="text-reset d-block py-2">
                Servicios
              </Link>
            </li>
            <li>
              <Link to="/Contactos" className="text-reset d-block py-2">
                Contactos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
