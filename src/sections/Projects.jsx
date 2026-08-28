import { projects } from '../data/profile.js';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">03 · Projects</span>
          <h2 className="section-title">
            精选 <em>Projects</em>
          </h2>
          <p className="section-sub">
            来自简历的两个项目。所有图片保留原始比例，不裁切、不压扁。
          </p>
        </div>

        <div className="projects">
          {projects.map((p) => (
            <article className="project" key={p.id}>
              <div
                className="cover"
                style={{ aspectRatio: p.coverRatio || '16 / 9' }}
                aria-label={`${p.name} 预览图`}
              >
                <img
                  src={p.cover}
                  alt={p.name + ' 截图'}
                  loading="lazy"
                />
                <span className="placeholder-note">{p.coverOrigin}</span>
              </div>

              <div className="info">
                <div className="meta">
                  <span>{p.meta}</span>
                  <span>·</span>
                  <span>ID · {p.id}</span>
                </div>
                <h3>{p.name}</h3>
                <p className="summary">{p.summary}</p>
                <ul className="highlights">
                  {p.highlights.map((h, i) => <li key={i}>{h}</li>)}
                </ul>
                <div className="tags">
                  {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
