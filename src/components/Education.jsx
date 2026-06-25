import { education } from '../data/education.js';
import Icon from './Icon.jsx';

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="wrap">
        <div className="head rv">
          <span className="eyebrow">Formación &amp; Reconocimientos</span>
          <h2>Educación y logros</h2>
        </div>
        <div className="edu-grid">
          {education.map((e, i) => (
            <div
              className={`edu rv ${e.type === 'award' ? 'win' : ''}`}
              key={i}
              style={e.full ? { gridColumn: '1 / -1' } : undefined}
            >
              <div className="eb">
                <Icon name={e.icon} />
              </div>
              <div>
                <h4>{e.title}</h4>
                <div className="meta">{e.meta}</div>
                <div className="yr">{e.year}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
