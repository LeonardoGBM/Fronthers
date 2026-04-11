import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import './Somos.css';

const TECNOLOGIAS = [
  { id: 1, icon: 'bi-filetype-jsx',  nombre: 'React'      },
  { id: 2, icon: 'bi-lightning-fill', nombre: 'Vite'      },
  { id: 3, icon: 'bi-filetype-js',   nombre: 'JavaScript' },
  { id: 4, icon: 'bi-filetype-css',  nombre: 'CSS / Bootstrap' },
  { id: 5, icon: 'bi-server',        nombre: 'Node.js'    },
  { id: 6, icon: 'bi-database',      nombre: 'SQL / NoSQL' },
];

const HITOS = [
  { id: 1, año: '2025', titulo: 'Nace Fronthers', desc: 'Un grupo de desarrolladores apasionados decide unirse para crear soluciones digitales de impacto real.' },
  { id: 2, año: '2025', titulo: 'Primer sitio web', desc: 'Lanzamos nuestra presencia digital, el primer paso para conectar con clientes y mostrar lo que somos capaces de hacer.' },
  { id: 3, año: '2025', titulo: 'Primeros proyectos', desc: 'Comenzamos a trabajar en los primeros proyectos, poniendo en práctica nuestra visión de calidad y compromiso.' },
];

const POR_QUE = [
  { id: 1, icon: 'bi-chat-square-text', titulo: 'Comunicación directa', desc: 'Sin intermediarios. Hablas directamente con el equipo que construye tu producto.' },
  { id: 2, icon: 'bi-code-square',      titulo: 'Código limpio',        desc: 'Escribimos código mantenible, escalable y documentado. Sin atajos que generen deuda técnica.' },
  { id: 3, icon: 'bi-file-earmark-check', titulo: 'Sin letra pequeña', desc: 'Presupuestos claros, plazos reales y total transparencia en cada etapa del proyecto.' },
];

const VALORES = [
  { id: 1, icon: 'bi-lightbulb-fill',  titulo: 'Innovación',   descripcion: 'Buscamos soluciones creativas y modernas para cada proyecto.' },
  { id: 2, icon: 'bi-shield-check',    titulo: 'Confianza',    descripcion: 'Construimos relaciones sólidas basadas en transparencia.' },
  { id: 3, icon: 'bi-people-fill',     titulo: 'Colaboración', descripcion: 'Trabajamos en equipo con nuestros clientes en cada etapa.' },
  { id: 4, icon: 'bi-rocket-takeoff',  titulo: 'Compromiso',   descripcion: 'Entregamos resultados de calidad dentro de los plazos acordados.' },
];

const EQUIPO = [
  { id: 1, nombre: 'Marcelo Ontaneda', rol: 'Desarrollador Full Stack', foto: null },
  { id: 2, nombre: 'Leonardo Bocon',  rol: 'Diseñador UI/UX',          foto: null },
  { id: 3, nombre: 'José Araujo',     rol: 'Desarrollador Frontend',   foto: null },
];

const AVATAR_FALLBACK = 'https://placehold.co/150x150/1a1a2e/B069FF?text=F';

const Somos = () => {
  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      <section className="somos-hero d-flex align-items-center text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <span className="somos-badge mb-3 d-inline-block">Sobre nosotros</span>
              <h1 className="somos-hero-title mb-4">
                Construimos el futuro<br />
                <span className="somos-accent">digital</span> contigo
              </h1>
              <p className="somos-hero-sub mb-5">
                Somos <strong>Fronthers</strong>, una agencia de desarrollo de software
                apasionada por transformar ideas en productos digitales que generan
                impacto real. Tecnología de vanguardia, enfoque humano.
              </p>
              <div className="d-flex gap-4 flex-wrap somos-stats">
                <div>
                  <div className="somos-stat-icon"><i className="bi bi-lightning-charge-fill"></i></div>
                  <div className="somos-stat-label">Entrega rápida</div>
                </div>
                <div className="somos-stat-divider"></div>
                <div>
                  <div className="somos-stat-icon"><i className="bi bi-patch-check-fill"></i></div>
                  <div className="somos-stat-label">Calidad garantizada</div>
                </div>
                <div className="somos-stat-divider"></div>
                <div>
                  <div className="somos-stat-icon"><i className="bi bi-headset"></i></div>
                  <div className="somos-stat-label">Soporte continuo</div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 d-none d-lg-flex justify-content-center">
              <div className="somos-hero-graphic">
                <i className="bi bi-code-slash somos-hero-icon"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Misión / Visión ── */}
      <section className="somos-mv py-5">
        <div className="container py-4">
          <div className="somos-section-label text-center mb-2">Nuestra esencia</div>
          <h2 className="somos-section-title text-center mb-5">Misión &amp; Visión</h2>
          <div className="row g-4">
            <div className="col-12 col-md-6">
              <div className="somos-mv-card h-100">
                <div className="somos-mv-icon-wrap mb-4">
                  <i className="bi bi-bullseye"></i>
                </div>
                <h3 className="somos-mv-heading mb-3">Misión</h3>
                <p className="somos-mv-text">
                  Desarrollar soluciones digitales innovadoras y de alta calidad que
                  impulsen el crecimiento de nuestros clientes, combinando tecnología
                  de vanguardia con un enfoque centrado en las personas.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="somos-mv-card somos-mv-card--accent h-100">
                <div className="somos-mv-icon-wrap mb-4">
                  <i className="bi bi-eye"></i>
                </div>
                <h3 className="somos-mv-heading mb-3">Visión</h3>
                <p className="somos-mv-text">
                  Ser la agencia de desarrollo de software de referencia en
                  Latinoamérica, reconocida por transformar ideas en productos
                  digitales que generan impacto real y duradero en la sociedad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ¿Por qué elegirnos? ── */}
      <section className="somos-porq py-5">
        <div className="container py-4">
          <div className="somos-section-label text-center mb-2">Nuestra diferencia</div>
          <h2 className="somos-section-title text-center mb-5">¿Por qué elegirnos?</h2>
          <div className="row g-4 justify-content-center">
            {POR_QUE.map((item) => (
              <div key={item.id} className="col-12 col-md-4">
                <div className="somos-porq-card h-100">
                  <div className="somos-porq-num">{String(item.id).padStart(2, '0')}</div>
                  <div className="somos-mv-icon-wrap mb-4">
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                  <h5 className="somos-valor-title mb-2">{item.titulo}</h5>
                  <p className="somos-valor-desc mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Valores ── */}
      <section className="somos-valores py-5">
        <div className="container py-4">
          <div className="somos-section-label text-center mb-2">Lo que nos define</div>
          <h2 className="somos-section-title text-center mb-5">Nuestros Valores</h2>
          <div className="row g-4">
            {VALORES.map((valor) => (
              <div key={valor.id} className="col-12 col-sm-6 col-lg-3">
                <div className="somos-valor-card h-100" data-testid="tarjeta-valor">
                  <div className="somos-valor-icon-wrap mb-3">
                    <i className={`bi ${valor.icon}`}></i>
                  </div>
                  <h5 className="somos-valor-title mb-2">{valor.titulo}</h5>
                  <p className="somos-valor-desc mb-0">{valor.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tecnologías ── */}
      <section className="somos-tech py-5">
        <div className="container py-4">
          <div className="somos-section-label text-center mb-2">Nuestro stack</div>
          <h2 className="somos-section-title text-center mb-5">Tecnologías que usamos</h2>
          <div className="row g-3 justify-content-center">
            {TECNOLOGIAS.map((tech) => (
              <div key={tech.id} className="col-6 col-sm-4 col-md-2">
                <div className="somos-tech-card text-center">
                  <i className={`bi ${tech.icon} somos-tech-icon d-block mb-2`}></i>
                  <span className="somos-tech-name">{tech.nombre}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Historia ── */}
      <section className="somos-historia py-5">
        <div className="container py-4">
          <div className="somos-section-label text-center mb-2">Nuestro camino</div>
          <h2 className="somos-section-title text-center mb-5">Cómo empezamos</h2>
          <div className="somos-timeline">
            {HITOS.map((hito, idx) => (
              <div key={hito.id} className={`somos-hito ${idx % 2 === 0 ? 'somos-hito--left' : 'somos-hito--right'}`}>
                <div className="somos-hito-dot"></div>
                <div className="somos-hito-card">
                  <span className="somos-hito-año">{hito.año}</span>
                  <h5 className="somos-hito-titulo mt-2 mb-2">{hito.titulo}</h5>
                  <p className="somos-valor-desc mb-0">{hito.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Equipo ── */}
      <section className="somos-equipo py-5">
        <div className="container py-4">
          <div className="somos-section-label text-center mb-2">Las personas detrás</div>
          <h2 className="somos-section-title text-center mb-5">Nuestro Equipo</h2>
          <div className="row g-4 justify-content-center">
            {EQUIPO.map((miembro) => (
              <div key={miembro.id} className="col-12 col-sm-6 col-md-4">
                <div className="somos-miembro-card text-center" data-testid="tarjeta-miembro">
                  <div className="somos-miembro-img-wrap mx-auto mb-4">
                    <img
                      src={miembro.foto || AVATAR_FALLBACK}
                      onError={(e) => { e.target.src = AVATAR_FALLBACK; }}
                      alt={miembro.nombre}
                      className="rounded-circle equipo-foto"
                    />
                  </div>
                  <h5 className="somos-miembro-nombre mb-1">{miembro.nombre}</h5>
                  <p className="somos-miembro-rol mb-3">{miembro.rol}</p>
                  <div className="somos-miembro-social">
                    <a href="#" aria-label="LinkedIn" className="somos-social-link">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="#" aria-label="GitHub" className="somos-social-link">
                      <i className="bi bi-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="somos-cta text-center py-5">
        <div className="container py-4">
          <div className="somos-cta-inner mx-auto">
            <i className="bi bi-chat-dots somos-cta-icon mb-4 d-block"></i>
            <h2 className="somos-cta-title mb-3">¿Listo para trabajar con nosotros?</h2>
            <p className="somos-cta-sub mb-5">
              Cuéntanos tu idea y la convertimos en realidad.<br />
              Estamos a un mensaje de distancia.
            </p>
            <Link to="/contactos" className="somos-cta-btn">
              Contáctanos <i className="bi bi-arrow-right ms-2"></i>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Somos;
