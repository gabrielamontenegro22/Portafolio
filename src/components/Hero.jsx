import { profile } from '../data/profile.js';
import { stats } from '../data/stats.js';
import Counter from './Counter.jsx';
import Icon from './Icon.jsx';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="aura">
        <div className="o1" />
        <div className="o2" />
        <div className="dots" />
      </div>
      <div className="wrap">
        <div className="hero-grid">
          <div className="rv">
            {profile.available && (
              <div className="avail"><span className="d" />Disponible para proyectos</div>
            )}
            <h1>
              {profile.name} <span className="grad-text">{profile.lastName}</span>
            </h1>
            <div className="sub">{profile.title}</div>
            <div className="role">
              Desarrolladora{' '}
              {profile.roleLine.map((r, i) => (
                <span key={r}>
                  {i > 0 && ' · '}
                  <b>{r}</b>
                </span>
              ))}
            </div>
            <p className="lead">{profile.lead}</p>
            <div className="loc">
              <Icon name="location" />
              {profile.location}
            </div>
            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">Ver proyectos</a>
              <a href="#contact" className="btn btn-ghost">Contacto</a>
              {profile.cv && (
                <a href={profile.cv} target="_blank" rel="noopener" download className="btn btn-ghost">
                  <Icon name="download" />
                  Descargar CV
                </a>
              )}
            </div>
          </div>

          <div className="rv">
            <div className="panel">
              <div className="panel-glow" />
              <div className="panel-inner">
                <div className="panel-block">
                  <span className="panel-label">// Especialidad</span>
                  <ul className="spec">
                    {profile.specialties.map((s) => (
                      <li key={s}>
                        <Icon name="check" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="panel-block">
                  <span className="panel-label">// Stack</span>
                  <div className="stack">
                    {profile.stack.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="strip">
          {stats.map((s, i) => (
            <div className="stat rv" key={i}>
              <div className="n">
                <Counter to={s.n} suffix={s.suffix} className="grad-text" />
              </div>
              <div className="l">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
