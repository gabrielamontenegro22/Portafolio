import { profile } from '../data/profile.js';
import Icon from './Icon.jsx';

const items = [
  { icon: 'mail', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: 'phone', label: 'Teléfono', value: profile.phone, href: `tel:${profile.phoneHref}` },
  { icon: 'linkedin', label: 'LinkedIn', value: profile.linkedinLabel, href: profile.linkedin, ext: true },
  { icon: 'github', label: 'GitHub', value: profile.githubLabel, href: profile.github, ext: true },
];

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="wrap">
        <div className="ct-grid">
          <div className="ct-text rv">
            <span className="eyebrow">Contacto</span>
            <h2>¿Trabajamos juntos?</h2>
            <p>
              ¿Tienes un proyecto, una oportunidad laboral o simplemente quieres conversar sobre
              tecnología? Estoy abierta a nuevas oportunidades.
            </p>
          </div>
          <div className="ct-list rv">
            {items.map((it) => (
              <a
                key={it.label}
                href={it.href}
                className="ct-item"
                {...(it.ext ? { target: '_blank', rel: 'noopener' } : {})}
              >
                <div className="ci">
                  <Icon name={it.icon} />
                </div>
                <div>
                  <div className="cl">{it.label}</div>
                  <div className="cv">{it.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
