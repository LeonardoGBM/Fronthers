import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbarestilo.css";
import Fronthersact from "../assets/Fronthersact.png";

const LINKS = [
  { to: "/",          label: "Inicio"         },
  { to: "/somos",     label: "¿Quiénes Somos?" },
  { to: "/servicio",  label: "Servicios"       },
  { to: "/contactos", label: "Contactos"       },
];

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // cierra el menú al cambiar de ruta
  useEffect(() => { setMenuOpen(false); }, [location]);

  return (
    <header className={`nb-header${scrolled ? " nb-header--scrolled" : ""}`}>
      <div className="nb-inner">

        {/* Logo */}
        <Link to="/" className="nb-logo-link">
          <img src={Fronthersact} alt="Fronthers" className="nb-logo" />
        </Link>

        {/* Nav escritorio */}
        <nav className="nb-nav" aria-label="Navegación principal">
          {LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`nb-link${location.pathname === to ? " nb-link--active" : ""}`}
            >
              {label}
            </Link>
          ))}
          <Link to="/contactos" className="nb-cta-btn">
            Empecemos <i className="bi bi-arrow-right ms-1"></i>
          </Link>
        </nav>

        {/* Botón hamburguesa */}
        <button
          className={`nb-burger${menuOpen ? " nb-burger--open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Menú móvil */}
      <div className={`nb-mobile${menuOpen ? " nb-mobile--open" : ""}`}>
        {LINKS.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className={`nb-mobile-link${location.pathname === to ? " nb-mobile-link--active" : ""}`}
          >
            {label}
          </Link>
        ))}
        <Link to="/contactos" className="nb-mobile-cta">
          Empecemos <i className="bi bi-arrow-right ms-2"></i>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
