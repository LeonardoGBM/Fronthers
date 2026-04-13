import { Link } from "react-router-dom";
import "./footer.css";
import Fronthersact from "../assets/Fronthersact.png";

const LINKS = [
  { to: "/",          label: "Inicio"          },
  { to: "/somos",     label: "¿Quiénes Somos?" },
  { to: "/servicio",  label: "Servicios"        },
  { to: "/contactos", label: "Contactos"        },
];

const SOCIAL = [
  { href: "#", icon: "bi-facebook",  label: "Facebook"  },
  { href: "#", icon: "bi-instagram", label: "Instagram" },
  { href: "#", icon: "bi-whatsapp",  label: "WhatsApp"  },
  { href: "#", icon: "bi-linkedin",  label: "LinkedIn"  },
];

const Footer = () => {
  return (
    <footer className="ft-footer">

      {/* Línea decorativa superior */}
      <div className="ft-top-line"></div>

      <div className="container">
        <div className="ft-grid">

          {/* Columna marca */}
          <div className="ft-brand">
            <img src={Fronthersact} alt="Fronthers" className="ft-logo mb-4" />
            <p className="ft-brand-desc">
              Agencia de desarrollo de software apasionada por transformar
              ideas en productos digitales de impacto real.
            </p>
            <div className="ft-social">
              {SOCIAL.map(({ href, icon, label }) => (
                <a key={label} href={href} aria-label={label} className="ft-social-link">
                  <i className={`bi ${icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Columna navegación */}
          <div className="ft-col">
            <h4 className="ft-col-title">Navegación</h4>
            <ul className="ft-list">
              {LINKS.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="ft-list-link">
                    <i className="bi bi-chevron-right ft-chevron"></i>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna contacto */}
          <div className="ft-col">
            <h4 className="ft-col-title">Contacto</h4>
            <ul className="ft-list ft-contact-list">
              <li>
                <i className="bi bi-geo-alt-fill ft-contact-icon"></i>
                <span>Villaflora, Quito</span>
              </li>
              <li>
                <i className="bi bi-envelope-fill ft-contact-icon"></i>
                <span>hola@fronthers.com</span>
              </li>
              <li>
                <i className="bi bi-whatsapp ft-contact-icon"></i>
                <span>+593 99 000 0000</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Barra inferior */}
        <div className="ft-bottom">
          <span className="ft-copy">© 2026 Fronthers. Todos los derechos reservados.</span>
          <span className="ft-made">
            Hecho con <i className="bi bi-heart-fill ft-heart"></i> en Ecuador
          </span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
