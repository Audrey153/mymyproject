import { profile } from '../data/profile.js';

export default function Hero() {
  const onJump = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-eyebrow">
          <span className="pulse" aria-hidden="true" />
          <span>Personal Portfolio · 2026</span>
        </div>

        <h1 className="hero-name">
          <span>{profile.name}</span>
          <br />
          <span className="pink">/ 乐事</span>
        </h1>

        <p className="hero-role">
          {profile.role} · {profile.tagline}
        </p>

        <div className="hero-manifesto" role="figure" aria-label="个人宣言">
          <span className="label">My Manifesto</span>
          <p className="text">
            「<em>我的人生</em>，<em>由我自己</em>决定」
          </p>
        </div>

        <div className="hero-actions">
          <a className="btn btn--neon" href="#projects" onClick={onJump('projects')}>
            看我的项目 <span className="arrow">→</span>
          </a>
          <a className="btn btn--pink" href="#contact" onClick={onJump('contact')}>
            联系我
          </a>
          <a className="btn" href="#about" onClick={onJump('about')}>
            关于我
          </a>
        </div>

        <div className="hero-meta">
          <div className="item">
            <span className="k">即将入学</span>
            <span className="v">{profile.school}</span>
          </div>
          <div className="item">
            <span className="k">身份</span>
            <span className="v">准大一 · {profile.status}</span>
          </div>
          <div className="item">
            <span className="k">高中母校</span>
            <span className="v">江西省高安市第二中学</span>
          </div>
          <div className="item">
            <span className="k">宣言</span>
            <span className="v">由我自己决定</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <span>Scroll</span>
        <span className="line" />
      </div>
    </section>
  );
}
