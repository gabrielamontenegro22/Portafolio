import { profile } from '../data/profile.js';
import Icon from './Icon.jsx';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="wrap">
        <div className="foot">
          <div>
            <a href="#hero" className="brand">
              <span className="mark">GM</span>Gabriela<em>.dev</em>
            </a>
            <p className="fdesc">
              Ingeniera de Software Full-Stack especializada en desarrollo web, SaaS y visión por
              computadora. React, .NET y arquitecturas escalables.
            </p>
            <div className="fsoc">
              <a href={profile.github} target="_blank" rel="noopener" aria-label="GitHub">
                <Icon name="github" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn">
                <Icon name="linkedin" />
              </a>
              <a href={`tel:${profile.phoneHref}`} aria-label="Teléfono">
                <Icon name="phone" />
              </a>
            </div>
          </div>
          <div className="fcol">
            <h5>Navegación</h5>
            <a href="#about">Sobre mí</a>
            <a href="#skills">Habilidades</a>
            <a href="#projects">Proyectos</a>
            <a href="#experience">Experiencia</a>
          </div>
          <div className="fcol">
            <h5>Enlaces</h5>
            <a href="#contact">Contacto</a>
            <a href={profile.github} target="_blank" rel="noopener">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noopener">LinkedIn</a>
          </div>
        </div>
        <div className="copy">© {year} {profile.fullName} · Todos los derechos reservados</div>
      </div>
    </footer>
  );
}
