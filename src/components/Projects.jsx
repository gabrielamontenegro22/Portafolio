import { useState } from 'react';
import { projects, projectFilters } from '../data/projects.js';
import { profile } from '../data/profile.js';
import { bold } from '../utils/text.jsx';
import Icon from './Icon.jsx';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  return (
    <section className="section" id="projects">
      <div className="wrap">
        <div className="head rv">
          <span className="eyebrow">Proyectos</span>
          <h2>Cosas que he construido</h2>
          <p>Proyectos de software que abarcan plataformas educativas, productos SaaS e inteligencia artificial aplicada.</p>
        </div>

        <div className="filters rv">
          {projectFilters.map((b) => (
            <button key={b.f} className={filter === b.f ? 'sel' : ''} onClick={() => setFilter(b.f)}>
              {b.label}
            </button>
          ))}
        </div>

        <div className="projects">
          {projects.map((p) => {
            const show = filter === 'all' || p.category === filter;
            const body = (
              <>
                {p.description.map((d, i) => (
                  <p key={i}>{bold(d)}</p>
                ))}
                {p.metrics && (
                  <div className="metrics">
                    {p.metrics.map((m) => (
                      <div className="metric" key={m.l}>
                        <div className="mn">{m.n}</div>
                        <div className="ml">{m.l}</div>
                      </div>
                    ))}
                  </div>
                )}
                <div className="chips">
                  {p.chips.map((c) => (
                    <span className="chip" key={c}>
                      {c}
                    </span>
                  ))}
                </div>
              </>
            );

            return (
              <article
                key={p.id}
                className={`pj rv ${p.featured ? 'big' : ''}`}
                data-cat={p.category}
                style={show ? undefined : { display: 'none' }}
              >
                <div className="top" />
                {p.featured ? (
                  <div className="big-inner">
                    <div>
                      <span className="pj-cat">{p.tag}</span>
                      <h3>{p.title}</h3>
                      {p.description.map((d, i) => (
                        <p key={i}>{bold(d)}</p>
                      ))}
                      <div className="chips">
                        {p.chips.map((c) => (
                          <span className="chip" key={c}>
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                    {p.arch && (
                      <div className="archbox">
                        <div className="ab-h">// ARQUITECTURA</div>
                        {p.arch.map((a) => (
                          <div className="ab-row" key={a.k}>
                            <span className="k">{a.k}</span>
                            <span className="v">{a.v}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    <span className="pj-cat">{p.tag}</span>
                    <h3>{p.title}</h3>
                    {body}
                  </>
                )}
              </article>
            );
          })}
        </div>

        <div className="pj-more rv">
          <a href={profile.github} target="_blank" rel="noopener" className="btn btn-ghost">
            Ver más en GitHub
            <Icon name="arrowUR" />
          </a>
        </div>
      </div>
    </section>
  );
}
