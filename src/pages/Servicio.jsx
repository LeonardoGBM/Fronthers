import React, { Fragment } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "./Servicio.css";
const Servicio = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="container-fluid">
        <div className="row fondo">
          {/*Cards de paginas web*/}
          <div className="row justify-content-center">
            <div className="bton col-md-12">
              <p className="separacion d-inline-flex gap-1">
            <a className="btn-primary text-reset" data-bs-toggle="collapse" href="#paginaWeb" role="button" aria-expanded="false" aria-controls="collapseExample">
                SERVICIOS DE PAGINAS WEB
            </a>
              </p>
              <div className="collapse fondo" id="paginaWeb">
                <div className="row justify-content-center">
                  <h1>Páginas web personalizadas</h1>
                  <p>
                    Diseño y desarrollo de páginas web modernas, rápidas y
                    adaptadas a tu marca.
                  </p>
                  <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div className="cardb">
                      <h5>
                        <b>PAQUETE BASICO</b>
                      </h5>
                      <h2>
                        <b>$50</b>
                      </h2>
                      <ul className="list-unstyled">
                        <li>- 1 pestaña</li>
                        <li>- Responsive</li>
                      </ul>
                      <div className="bot d-flex justify-content-center">
                        <button className="btn btn-primary">
                          Solicitar Paquete
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div className="cardn">
                      <h5>
                        <b>PAQUETE NORMAL</b>
                      </h5>
                      <h2>
                        <b>$80</b>
                      </h2>
                      <ul className="list-unstyled">
                        <li>- 3 pestañas (inicio / contacto / servicio)</li>
                        <li>- Responsive</li>
                        <li>- Botones redes sociales</li>
                      </ul>
                      <div className="bot d-flex justify-content-center">
                        <button className="btn btn-primary">
                          Solicitar Paquete
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div className="cardp">
                      <h5>
                        <b>PAQUETE PREMIUM</b>
                      </h5>
                      <h2>
                        <b>$130</b>
                      </h2>
                      <ul className="list-unstyled">
                        <li>- 5 pestañas</li>
                        <li>- Responsive</li>
                        <li>- Botones redes sociales</li>
                        <li>
                          - Mensajes Personalizados en los botones de redes
                          sociales
                        </li>
                      </ul>
                      <div className="bot d-flex justify-content-center">
                        <button className="btn btn-primary">
                          Solicitar Paquete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Cards de paginas de servicio tecnico*/}
        <div className="row justify-content-center mt-5">
            <div className="bton col-md-12">
              <p className="d-inline-flex gap-1">
            <a className="btn-primary text-reset" data-bs-toggle="collapse" href="#servicioTecnico" role="button" aria-expanded="false" aria-controls="collapseExample">
                SERVICIOS TECNICO
            </a>
              </p>
              <div className="collapse fondo" id="servicioTecnico">
                <div className="row justify-content-center">
                  <h1>Armado y reparación de computadoras</h1>
                  <p>
                    Ofrecemos diagnóstico, mantenimiento, armado personalizado y reparación de equipos de escritorio y portátiles. Soluciones rápidas y confiables para tus necesidades tecnológicas.
                  </p>
                  <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div className="cardb">
                      <h5>
                        <b>PAQUETE BASICO</b>
                      </h5>
                      <h2>
                        <b>$50</b>
                      </h2>
                      <ul className="list-unstyled">
                        <li>- 1 pestaña</li>
                        <li>- Responsive</li>
                      </ul>
                      <div className="bot d-flex justify-content-center">
                        <button className="btn btn-primary">
                          Solicitar Paquete
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div className="cardn">
                      <h5>
                        <b>PAQUETE NORMAL</b>
                      </h5>
                      <h2>
                        <b>$80</b>
                      </h2>
                      <ul className="list-unstyled">
                        <li>- 3 pestañas (inicio / contacto / servicio)</li>
                        <li>- Responsive</li>
                        <li>- Botones redes sociales</li>
                      </ul>
                      <div className="bot d-flex justify-content-center">
                        <button className="btn btn-primary">
                          Solicitar Paquete
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div className="cardp">
                      <h5>
                        <b>PAQUETE PREMIUM</b>
                      </h5>
                      <h2>
                        <b>$130</b>
                      </h2>
                      <ul className="list-unstyled">
                        <li>- 5 pestañas</li>
                        <li>- Responsive</li>
                        <li>- Botones redes sociales</li>
                        <li>
                          - Mensajes Personalizados en los botones de redes
                          sociales
                        </li>
                      </ul>
                      <div className="bot d-flex justify-content-center">
                        <button className="btn btn-primary">
                          Solicitar Paquete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/*Seccion de licencias de windows */}
         <div className="row justify-content-center mt-5">
            <div className="bton col-md-12">
              <p className="d-inline-flex gap-1">
            <a className="btn-primary text-reset" data-bs-toggle="collapse" href="#licencias" role="button" aria-expanded="false" aria-controls="collapseExample">
                LICENCIAS DE WINDOWS
            </a>
              </p>
              <div className="collapse fondo" id="licencias">
                <div className="row justify-content-center">
                  <h1>Páginas web personalizadas</h1>
                  <p>
                    Diseño y desarrollo de páginas web modernas, rápidas y
                    adaptadas a tu marca.
                  </p>
                  <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div className="cardb">
                      <h5>
                        <b>PAQUETE BASICO</b>
                      </h5>
                      <h2>
                        <b>$50</b>
                      </h2>
                      <ul className="list-unstyled">
                        <li>- 1 pestaña</li>
                        <li>- Responsive</li>
                      </ul>
                      <div className="bot d-flex justify-content-center">
                        <button className="btn btn-primary">
                          Solicitar Paquete
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div className="cardn">
                      <h5>
                        <b>PAQUETE NORMAL</b>
                      </h5>
                      <h2>
                        <b>$80</b>
                      </h2>
                      <ul className="list-unstyled">
                        <li>- 3 pestañas (inicio / contacto / servicio)</li>
                        <li>- Responsive</li>
                        <li>- Botones redes sociales</li>
                      </ul>
                      <div className="bot d-flex justify-content-center">
                        <button className="btn btn-primary">
                          Solicitar Paquete
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div className="cardp">
                      <h5>
                        <b>PAQUETE PREMIUM</b>
                      </h5>
                      <h2>
                        <b>$130</b>
                      </h2>
                      <ul className="list-unstyled">
                        <li>- 5 pestañas</li>
                        <li>- Responsive</li>
                        <li>- Botones redes sociales</li>
                        <li>
                          - Mensajes Personalizados en los botones de redes
                          sociales
                        </li>
                      </ul>
                      <div className="bot d-flex justify-content-center">
                        <button className="btn btn-primary">
                          Solicitar Paquete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/*Asesoramiento de partes de computadora*/}
           <div className="row justify-content-center mt-5">
            <div className="bton col-md-12">
              <p className="d-inline-flex gap-1">
            <a className="btn-primary text-reset" data-bs-toggle="collapse" href="#asesoramiento" role="button" aria-expanded="false" aria-controls="collapseExample">
                ASESORAMIENTO
            </a>
              </p>
              <div className="collapse fondo" id="asesoramiento">
                <div className="row justify-content-center">
                  <h1>Páginas web personalizadas</h1>
                  <p>
                    Diseño y desarrollo de páginas web modernas, rápidas y
                    adaptadas a tu marca.
                  </p>
                  <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div className="cardb">
                      <h5>
                        <b>PAQUETE BASICO</b>
                      </h5>
                      <h2>
                        <b>$50</b>
                      </h2>
                      <ul className="list-unstyled">
                        <li>- 1 pestaña</li>
                        <li>- Responsive</li>
                      </ul>
                      <div className="bot d-flex justify-content-center">
                        <button className="btn btn-primary">
                          Solicitar Paquete
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div className="cardn">
                      <h5>
                        <b>PAQUETE NORMAL</b>
                      </h5>
                      <h2>
                        <b>$80</b>
                      </h2>
                      <ul className="list-unstyled">
                        <li>- 3 pestañas (inicio / contacto / servicio)</li>
                        <li>- Responsive</li>
                        <li>- Botones redes sociales</li>
                      </ul>
                      <div className="bot d-flex justify-content-center">
                        <button className="btn btn-primary">
                          Solicitar Paquete
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div className="cardp">
                      <h5>
                        <b>PAQUETE PREMIUM</b>
                      </h5>
                      <h2>
                        <b>$130</b>
                      </h2>
                      <ul className="list-unstyled">
                        <li>- 5 pestañas</li>
                        <li>- Responsive</li>
                        <li>- Botones redes sociales</li>
                        <li>
                          - Mensajes Personalizados en los botones de redes
                          sociales
                        </li>
                      </ul>
                      <div className="bot d-flex justify-content-center">
                        <button className="btn btn-primary">
                          Solicitar Paquete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Servicio;
