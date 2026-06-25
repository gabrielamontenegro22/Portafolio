import { experience } from '../data/experience.js';
import Icon from './Icon.jsx';

const sectionStyle = {
  background: 'var(--bg-2)',
  borderTop: '1px solid var(--line)',
  borderBottom: '1px solid var(--line)',
};

export default function Experience() {
  return (
    <section className="section" id="experience" style={sectionStyle}>
      <div className="wrap">
        <div className="head rv">
          <span className="eyebrow">Experiencia</span>
          <h2>Trayectoria profesional</h2>
          <p>Práctica en entorno real, complementada con proyectos de investigación y desarrollo propio.</p>
        </div>
        <div className="tl">
          {experience.map((e, i) => (
            <div className="tli rv" key={i}>
              <div className="tlc">
                <div className="tl-top">
                  <span className="tl-role">{e.role}</span>
                  <span className="tl-date">{e.date}</span>
                </div>
                <div className="tl-org">{e.org}</div>
                <p>{e.summary}</p>
                <ul className="achv">
                  {e.achievements.map((a) => (
                    <li key={a}>
                      <Icon name="check" />
                      {a}
                    </li>
                  ))}
                </ul>
                <div className="tech-row">
                  {e.tech.map((t) => (
                    <span className="tech" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
