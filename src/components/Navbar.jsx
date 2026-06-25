import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext.jsx';
import { profile } from '../data/profile.js';
import Icon from './Icon.jsx';

const navItems = [
  { href: '#hero', label: 'Inicio' },
  { href: '#about', label: 'Sobre mí' },
  { href: '#skills', label: 'Habilidades' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#experience', label: 'Experiencia' },
  { href: '#education', label: 'Formación' },
  { href: '#contact', label: 'Contacto' },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.35 }
    );
    document.querySelectorAll('section[id]').forEach((s) => spy.observe(s));

    return () => {
      window.removeEventListener('scroll', onScroll);
      spy.disconnect();
    };
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={scrolled ? 'on' : ''}>
      <div className="wrap nav">
        <a href="#hero" className="brand" onClick={close}>
          <span className="mark">GM</span>Gabriela<em>.dev</em>
        </a>
        <nav className={`links ${open ? 'open' : ''}`}>
          {navItems.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className={active === i.href.slice(1) ? 'active' : ''}
              onClick={close}
            >
              {i.label}
            </a>
          ))}
        </nav>
        <div className="nav-r">
          {profile.cv && (
            <a
              href={profile.cv}
              target="_blank"
              rel="noopener"
              download
              className="btn btn-ghost desktop-only"
            >
              <Icon name="download" />
              CV
            </a>
          )}
          <a href="#contact" className="btn btn-primary desktop-only">Contáctame</a>
          <button className="ico" onClick={toggle} aria-label="Cambiar tema">
            <Icon name={theme === 'dark' ? 'moon' : 'sun'} />
          </button>
          <button className="ico burger" onClick={() => setOpen((o) => !o)} aria-label="Menú">
            <Icon name="menu" />
          </button>
        </div>
      </div>
    </header>
  );
}
