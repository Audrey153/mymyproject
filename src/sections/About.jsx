import { profile } from '../data/profile.js';

function Todo({ show = true }) {
  if (!show) return null;
  return <span className="todo-flag">待补充</span>;
}

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="section-eyebrow">01 · About Me</span>
          <h2 className="section-title">
            关于 <em>廖奥迎</em>
          </h2>
          <p className="section-sub">
            一个把"复杂事务变简单"当口头禅的准大学生，习惯用组织和协作把事情做成。
          </p>
        </div>

        <div className="about-grid" data-reveal>
          <div>
            <div className="avatar" aria-label="个人头像占位（待补充）">
              <span className="placeholder" aria-hidden="true">LY</span>
              <div className="badge">
                <span>AVATAR</span>
                <span className="neon"><Todo show={true} /></span>
              </div>
            </div>
          </div>

          <div className="about-bio">
            <h3>你好，我是乐事 <Todo show={false} /></h3>
            <p>{profile.bio}</p>

            <ul className="about-list" aria-label="基础信息">
              <li><span className="k">姓名</span><span className="v">{profile.name}</span></li>
              <li><span className="k">外号</span><span className="v">{profile.nickname}</span></li>
              <li><span className="k">即将入学</span><span className="v">{profile.school}</span></li>
              <li>
                <span className="k">专业</span>
                <span className="v">{profile.major}</span>
              </li>
              <li><span className="k">高中母校</span><span className="v">江西省高安市第二中学</span></li>
              <li><span className="k">曾任</span><span className="v">高中三年班长</span></li>
            </ul>
          </div>
        </div>

        <div className="stats" role="list">
          {profile.stats.map((s, i) => (
            <div className="stat" role="listitem" key={s.label} data-reveal style={{ '--rd': String(i) }}>
              <div className="k">{s.label}</div>
              <div className={`v ${i % 2 === 0 ? 'neon' : 'pink'}`}>{s.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
