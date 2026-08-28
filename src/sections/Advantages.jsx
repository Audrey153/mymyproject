import { advantages, tools } from '../data/profile.js';

export default function Advantages() {
  return (
    <section id="advantages" className="section section--tight">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">04 · Strengths</span>
          <h2 className="section-title">
            个人 <em>优势</em> & <em>常用工具</em>
          </h2>
          <p className="section-sub">
            高中三年班长 + 多个完整项目锻炼出的能力，以及平时常用的工具栈。
          </p>
        </div>

        <div className="adv-grid">
          {advantages.map((a) => (
            <div className="adv" key={a.title}>
              <span className="icon" aria-hidden="true">{a.icon}</span>
              <h4>{a.title}</h4>
              <p>{a.desc}</p>
            </div>
          ))}
        </div>

        <div className="tools-section">
          <h3>常用工具</h3>
          <div className="tools">
            {tools.map((t) => (
              <span className="tool" key={t.name}>
                {t.name}
                <span className="tag">{t.tag}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
