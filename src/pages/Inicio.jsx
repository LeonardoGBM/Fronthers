import React, { Fragment } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Carrusel from "../components/carrusel";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.avif";
import "./Inicio.css";
const Inicio = () => {
  const numero = 593987175379;
  const paquete = (tipo) => {
    const mensaje = `Solicito Paquete ${tipo}`;
    let detalle = "";

    if (tipo == "Básico") {
      detalle = "1 Pestaña \n Responsive";
    } else if (tipo == "Normal") {
      detalle = "3 Pestañas \n Responsive \n Boton de redes sociales";
    } else if (tipo == "Premium") {
      detalle = "5 Pestañas \n Responsive \n Boton de redes sociales \n Mensajes personalizados en los botones de redes sociales";
    }

    const texto = `${mensaje} \n ${detalle}`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
  };

  return (
    <Fragment>
      <Navbar />
      <Carrusel />
      <div className="page-container container">
        <div className="row fondo">
          <div className="col-12 descripcion">
            <h1 className="contenido">Una pagína diseñada para tí</h1>
            <p className="pt-5">
              Diseñamos sitios web modernos, visuales y optimizados para mostrar
              tu negocio en internet. <br />
              Adaptados a celulares, integrados con redes sociales y enfocados
              en convertir visitas en clientes.
            </p>
            {/*Video de youtube*/}

            {/*Seccion de por que tener una pagina web*/}

            <div className="row">
              <div className="col-12 col-md-6 text-start">
                <h2 className="contenido">¿Por qué tener una página web?</h2>
                <p className="contenidop">
                  Tener una página web es fundamental en la actualidad porque
                  permite a las personas, negocios o marcas tener presencia en
                  internet, lo que incrementa su visibilidad y credibilidad. A
                  través de una página web, se puede ofrecer información clara y
                  accesible sobre productos, servicios o proyectos, llegar a un
                  público más amplio, captar nuevos clientes y establecer una
                  comunicación directa con los usuarios. Además, funciona como
                  una herramienta disponible las 24 horas del día, lo que
                  facilita la promoción constante y el crecimiento en un mundo
                  cada vez más digitalizado.
                </p>
              </div>
              <div className="col-12 col-md-6">
                <div className="col imagen">
                  <img src={img1} alt="imagen" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-6">
                <div className="col imagen">
                  <img src={img2} alt="imagen" />
                </div>
              </div>

              <div className="col-12 col-md-6 text-start">
                <h2 className="contenido">
                  ¿Por qué confiar en nuestro servicio técnico?
                </h2>
                <p className="contenidop">
                  En un mundo donde la tecnología avanza rápidamente, contar con
                  un servicio técnico confiable es esencial. En nuestra página,
                  ofrecemos soporte especializado para resolver problemas
                  técnicos, mejorar el rendimiento de tus dispositivos y
                  mantener tus equipos actualizados con las últimas
                  innovaciones. Nuestro objetivo es brindarte soluciones
                  rápidas, seguras y personalizadas que garanticen el
                  funcionamiento óptimo de tu tecnología, permitiéndote
                  enfocarte en lo que realmente importa.
                </p>
              </div>
            </div>

            {/*Servicion de licencias de windows */}
            <div className="row">
              <div className="col-12 col-md-6 text-start">
                <h2 className="contenido">Licencias de windows</h2>
                <p className="contenidop">
                  Ofrecemos licencias originales de Windows para que tu equipo
                  funcione de manera segura, estable y con todas las
                  funcionalidades que solo un sistema operativo genuino puede
                  ofrecer. Al adquirir tu licencia con nosotros, garantizas
                  actualizaciones automáticas, protección frente a amenazas y un
                  mejor rendimiento del sistema. Nuestro servicio incluye
                  asesoría personalizada para ayudarte a elegir la versión
                  adecuada según tus necesidades, además de soporte técnico en
                  el proceso de activación e instalación.
                </p>
              </div>
              <div className="col-12 col-md-6">
                <div className="col-md imagen">
                  <img src={img3} alt="imagen" />
                </div>
              </div>
            </div>

            {/*Asesoramiento */}

            <div className="row">
              <div className="col-12 col-md-6">
                <div className="col-md imagen">
                  <img src={img4} alt="imagen" />
                </div>
              </div>
              <div className="col-12 col-md-6 text-start">
                <h2 className="contenido">
                  Asesoramiento y cotización de partes de computadora
                </h2>
                <p className="contenidop">
                  Ofrecemos asesoramiento y cotización de partes de computadora,
                  brindando una atención personalizada para ayudarte a elegir
                  los componentes que mejor se adapten a tus necesidades y
                  presupuesto. Ya sea que estés armando una PC desde cero,
                  necesites actualizar tu equipo actual o busques mejorar el
                  rendimiento con piezas específicas, te orientamos en cada
                  paso. Te proporcionamos cotizaciones claras y competitivas,
                  asegurando calidad, compatibilidad y rendimiento en cada
                  recomendación.
                </p>
              </div>
            </div>
            {/*cards*/}
            <div className="row justify-content-center mt-5">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="titulo2">
                    ¡No esperes más, solicita tu paquete ya!
                  </h1>
                </div>
              </div>
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
                    <button className="btn btn-primary" onClick={() => paquete('Básico')}>
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
                    <button className="btn btn-primary" onClick={() => paquete('Normal')}>
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
                      - Mensajes Personalizados en los botones de redes sociales
                    </li>
                  </ul>
                  <div className="bot d-flex justify-content-center">
                    <button className="btn btn-primary" onClick={() => paquete('Premium')}>
                      Solicitar Paquete
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/*Ubicacion*/}
            <div className="row">
              <div className="col-md-12">
                <h1 className="ubicacion">Ubícanos aquí</h1>
              </div>
              <div style={{ marginTop: "40px" }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <iframe
                    className="mapa"
                    title="Ubicación"
                    src="https://www.google.com/maps/embed?pb=!4v1753426381310!6m8!1m7!1snKqIF88qyvKjCOG7h0TKpQ!2m2!1d-0.2548547894064653!2d-78.5117179324446!3f172.25080587961452!4f-29.70537198406837!5f0.7820865974627469"
                    width="90%"
                    height="500"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
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
export default Inicio;
