import { profile } from '../data/profile.js';

export default function Contact() {
  const { contacts, name, school } = profile;
  const items = [
    { label: '微信',    value: contacts.wechat, href: null },
    { label: 'QQ',      value: contacts.qq,     href: null },
    { label: '邮箱',    value: contacts.email,  href: `mailto:${contacts.email}` },
  ];

  return (
    <section id="contact" className="section contact">
      <div className="container contact-inner">
        <div>
          <span className="section-eyebrow">05 · Contact</span>
          <h2>
            想认识 <em>{name}</em> 吗？
            <br />欢迎随时联系。
          </h2>
          <p className="lead">
            我是来自 {school} 的准大一学生。如果你在做项目、想一起做点东西，
            或者只是想聊一聊大学生活 / 高中班长那些事，都欢迎通过下面的方式找到我。
          </p>
          <div className="hero-actions" style={{ marginTop: 24 }}>
            <a className="btn btn--neon" href={`mailto:${contacts.email}`}>
              发邮件给我 <span className="arrow">→</span>
            </a>
            <a className="btn btn--pink" href="#hero" onClick={(e) => {
              e.preventDefault();
              document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              回到顶部
            </a>
          </div>
        </div>

        <div className="contact-cards">
          {items.map((it) => (
            <a
              className="contact-card"
              key={it.label}
              href={it.href || '#'}
              onClick={(e) => { if (!it.href) e.preventDefault(); }}
            >
              <div>
                <span className="label">{it.label}</span>
                <span className="value">{it.value}</span>
              </div>
              <span className="arrow">{it.href ? '↗' : '·'}</span>
            </a>
          ))}
          <div className="contact-card" aria-label="所在地">
            <div>
              <span className="label">所在地</span>
              <span className="value">四川 · 成都（即将入学）</span>
            </div>
            <span className="arrow">·</span>
          </div>
          <div className="contact-card" aria-label="个人状态">
            <div>
              <span className="label">当前状态</span>
              <span className="value">准大一 · 准备开学</span>
            </div>
            <span className="arrow pink">●</span>
          </div>
        </div>
      </div>

      <div className="container foot">
        <span>© 2026 {name} · 乐事</span>
        <span>Built with React + Vite · Designed in Black & Neon</span>
      </div>
    </section>
  );
}
