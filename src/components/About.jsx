import { pillars, facts } from '../data/about.js';
import Icon from './Icon.jsx';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="head rv">
          <span className="eyebrow">Sobre mí</span>
          <h2>Software con propósito, de la idea al despliegue</h2>
        </div>
        <div className="about">
          <div className="about-text rv">
            <p>
              Soy desarrolladora full-stack formada en la{' '}
              <strong>Fundación Escuela Tecnológica de Neiva (FET)</strong>. Trabajo en todo el ciclo
              de una aplicación: desde el modelado de datos y la API hasta la interfaz que usa la
              gente.
            </p>
            <p>
              Mi trabajo abarca tres mundos que disfruto combinar: educación, con
              una plataforma gamificada de diseño inclusivo usada por niños reales;{' '}
              software empresarial, con un SaaS multi-tenant para salones de
              belleza; y visión por computadora, con un sistema de detección y
              seguimiento en tiempo real.
            </p>
            <p>
              Me enfoco en escribir código limpio, diseñar arquitecturas que se sostengan en el
              tiempo y construir soluciones que aporten valor real a quien las usa.
            </p>
            <div className="pillars">
              {pillars.map((p) => (
                <div className="pillar" key={p.title}>
                  <div className="pic">
                    <Icon name={p.icon} />
                  </div>
                  <h4>{p.title}</h4>
                  <p>{p.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="cards4 rv">
            {facts.map((f) => (
              <div className="mini" key={f.t} style={f.full ? { gridColumn: '1 / -1' } : undefined}>
                <div className="t">{f.t}</div>
                <div className="v">{f.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
