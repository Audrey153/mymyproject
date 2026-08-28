import { useState } from 'react';

const links = [
  { id: 'about',      label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects',   label: 'Projects' },
  { id: 'advantages', label: 'Strengths' },
  { id: 'contact',    label: 'Contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  const go = (id) => (e) => {
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <nav className="nav" aria-label="主导航">
        <a className="nav-brand" href="#hero" onClick={go('hero')}>
          <span className="dot" aria-hidden="true" />
          <span>廖奥迎 · Portfolio</span>
        </a>
        <div className="nav-links">
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`} onClick={go(l.id)}>{l.label}</a>
          ))}
        </div>
        <a className="nav-cta" href="#contact" onClick={go('contact')}>Say Hello</a>
        <button
          className="nav-burger"
          aria-label="打开导航菜单"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <span />
        </button>
      </nav>

      {open && (
        <div className="drawer" role="dialog" aria-modal="true">
          <button className="drawer-close" aria-label="关闭" onClick={() => setOpen(false)}>×</button>
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`} onClick={go(l.id)}>{l.label}</a>
          ))}
          <a href="#contact" onClick={go('contact')}>Say Hello</a>
        </div>
      )}
    </>
  );
}
