import { experiences } from '../data/profile.js';

const typeLabel = {
  work: '工作经历',
  education: '教育经历',
};

export default function Experience() {
  return (
    <section id="experience" className="section section--tight">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="section-eyebrow">02 · Experience</span>
          <h2 className="section-title">
            经历 <em>Timeline</em>
          </h2>
          <p className="section-sub">
            高中三年班长 + 即将开始的大学生活。下面的经历均来自简历，没有编造内容；信息不全处会标注「待补充」。
          </p>
        </div>

        <div className="exp-list">
          {experiences.map((e, i) => (
            <article className="exp" key={`${e.type}-${e.title}`} data-reveal style={{ '--rd': String(i) }}>
              <div className="meta">
                <span className="type">{typeLabel[e.type] || e.type}</span>
                <span className="period">{e.period}</span>
                <span className="muted mono" style={{ fontSize: 12 }}>{e.location}</span>
              </div>
              <div className="body">
                <h4>{e.title}</h4>
                <div className="org">{e.org}</div>
                <p className="summary">{e.summary}</p>
                {e.bullets?.length ? (
                  <ul>
                    {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
