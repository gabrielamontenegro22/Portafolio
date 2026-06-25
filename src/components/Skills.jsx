import { skillFeatures, skillCategories } from '../data/skills.js';
import Icon from './Icon.jsx';

const sectionStyle = {
  background: 'var(--bg-2)',
  borderTop: '1px solid var(--line)',
  borderBottom: '1px solid var(--line)',
};

export default function Skills() {
  return (
    <section className="section" id="skills" style={sectionStyle}>
      <div className="wrap">
        <div className="head rv">
          <span className="eyebrow">Habilidades</span>
          <h2>Stack tecnológico y áreas de expertise</h2>
          <p>Tecnologías y competencias desarrolladas a través de proyectos reales y formación continua.</p>
        </div>

        <div className="feat4 rv">
          {skillFeatures.map((f) => (
            <div className="fcard" key={f.title}>
              <div className="fic">
                <Icon name={f.icon} />
              </div>
              <h4>{f.title}</h4>
              <p>{f.text}</p>
            </div>
          ))}
        </div>

        <div className="skill-grid rv">
          {skillCategories.map((c) => (
            <div className="scat" key={c.title}>
              <h4>
                <span className="si">
                  <Icon name={c.icon} />
                </span>
                {c.title}
              </h4>
              <div className="tags">
                {c.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
