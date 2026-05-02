/* global React, window */
const { useState, useEffect, useRef, useMemo } = React;

/* ----- Icons ----------------------------------------------------- */
const Icon = ({ name, size = 16 }) => {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" };
  const map = {
    arrow: <svg {...common}><path d="M7 17 17 7"/><path d="M9 7h8v8"/></svg>,
    download: <svg {...common}><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>,
    mail: <svg {...common}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>,
    linkedin: <svg {...common}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>,
    github: <svg {...common}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>,
    cloud: <svg {...common}><path d="M17.5 19a4.5 4.5 0 0 0 0-9 7 7 0 0 0-13.6 2A4 4 0 0 0 6 19h11.5z"/></svg>,
    ops: <svg {...common}><path d="M2 12h4l3-9 4 18 3-9h6"/></svg>,
    code: <svg {...common}><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>,
    ml: <svg {...common}><circle cx="12" cy="12" r="3"/><path d="M12 1v6"/><path d="M12 17v6"/><path d="M4.2 4.2l4.3 4.3"/><path d="M15.5 15.5l4.3 4.3"/><path d="M1 12h6"/><path d="M17 12h6"/></svg>,
    hw: <svg {...common}><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3"/><path d="M15 1v3"/><path d="M9 20v3"/><path d="M15 20v3"/><path d="M20 9h3"/><path d="M20 14h3"/><path d="M1 9h3"/><path d="M1 14h3"/></svg>,
    sec: <svg {...common}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    doc: <svg {...common}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>,
  };
  return map[name] || null;
};

/* ----- Top bar --------------------------------------------------- */
function Topbar({ active }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["about", "About"],
    ["work", "Work"],
    ["projects", "Projects"],
    ["skills", "Skills"],
    ["education", "Education"],
    ["contact", "Contact"],
  ];
  return (
    <header className="topbar" style={{ borderBottomColor: scrolled ? "var(--line)" : "transparent" }}>
      <div className="container topbar-inner">
        <a href="#top" className="brand">
          <div className="mono-mark">MA</div>
          <div className="brand-name">Michael Altamirano <span className="dim">/ engineer</span></div>
        </a>
        <nav className="nav-links">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={active === id ? "active" : ""}>{label}</a>
          ))}
        </nav>
        <div className="top-actions">
          <a className="icon-btn" href="https://github.com/HighviewOne" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Icon name="github" /></a>
          <a className="icon-btn" href="https://www.linkedin.com/in/michaelaltamirano/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a>
          <a className="btn-primary" href="assets/documents/Michael_Altamirano_Resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume <Icon name="arrow" size={14} />
          </a>
        </div>
      </div>
    </header>
  );
}

/* ----- Rotator --------------------------------------------------- */
function Rotator({ words }) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState(words[0]);
  const [phase, setPhase] = useState("typing");
  useEffect(() => {
    let timer;
    const target = words[idx];
    if (phase === "typing") {
      if (text.length < target.length) {
        timer = setTimeout(() => setText(target.slice(0, text.length + 1)), 60);
      } else {
        timer = setTimeout(() => setPhase("deleting"), 1800);
      }
    } else if (phase === "deleting") {
      if (text.length > 0) {
        timer = setTimeout(() => setText(target.slice(0, text.length - 1)), 32);
      } else {
        const nextIdx = (idx + 1) % words.length;
        setIdx(nextIdx);
        setPhase("typing");
      }
    }
    return () => clearTimeout(timer);
  }, [text, phase, idx, words]);
  return <span className="rotator">{text || " "}</span>;
}

/* ----- Counter --------------------------------------------------- */
function Counter({ to, suffix, duration = 1400 }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  const fired = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((ents) => {
      ents.forEach((e) => {
        if (e.isIntersecting && !fired.current) {
          fired.current = true;
          const start = performance.now();
          const tick = (t) => {
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(to * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration]);
  return <span ref={ref}>{n.toLocaleString()}{suffix && <span className="suffix">{suffix}</span>}</span>;
}

/* ----- Hero ------------------------------------------------------- */
function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="eyebrow"><span className="dot" /> Available · Los Angeles · U.S. Citizen</div>
        <h1>
          Senior engineer<br />
          shipping reliable&nbsp;<Rotator words={window.ROTATOR} />
        </h1>
        <p className="hero-lede">
          25+ years building things that don't fall over — from <strong>NASA's Deep Space Network</strong> to a <strong>1,000-server fleet at DirecTV</strong> serving 21M subscribers, to <strong>FAA airspace modernization</strong> today. Now closing the loop with cloud-native and ML-aware infrastructure.
        </p>
        <div className="hero-actions">
          <a className="btn-primary" href="assets/documents/Michael_Altamirano_Resume.pdf" target="_blank" rel="noopener noreferrer">
            <Icon name="download" size={14} /> Download Resume
          </a>
          <a className="btn-ghost" href="#contact">Get in touch</a>
        </div>
        <div className="stat-band">
          <div className="stat">
            <div className="stat-num"><Counter to={25} suffix="+ yrs" /></div>
            <div className="stat-label">Building reliable systems</div>
          </div>
          <div className="stat">
            <div className="stat-num"><Counter to={1000} suffix="+" /></div>
            <div className="stat-label">Server fleet (DirecTV)</div>
          </div>
          <div className="stat">
            <div className="stat-num"><Counter to={21} suffix="M" /></div>
            <div className="stat-label">Subscribers served</div>
          </div>
          <div className="stat">
            <div className="stat-num">FAA</div>
            <div className="stat-label">NAS modernization · current</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----- About ----------------------------------------------------- */
function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-head">
          <div className="section-num">01 · About</div>
          <div>
            <h2 className="section-title">Depth, judgment, and a long memory for what breaks.</h2>
            <p className="section-kicker">A senior engineer's bet on reliability — from solder joints to Kubernetes.</p>
          </div>
        </div>
        <div className="about-grid">
          <dl className="about-meta">
            <dt>Based</dt><dd>Los Angeles, CA</dd>
            <dt>Status</dt><dd>U.S. Citizen · Available</dd>
            <dt>Currently</dt><dd>Electronics Engineer, Leidos (FAA)</dd>
            <dt>Focus</dt><dd>SRE · Platforms · ML systems</dd>
          </dl>
          <div className="about-prose">
            <p>I'm a Systems / Reliability Engineer with 25+ years of experience — and the kind of background that's hard to manufacture. I started on NASA's Deep Space Network, spent 12 years validating power semiconductors at International Rectifier / Infineon, then 13 years at DirecTV running infrastructure for 21M subscribers.</p>
            <p>Today, I'm at Leidos supporting <strong>FAA National Airspace System modernization</strong> — designing system integration packages for NEXCOM Radios, Air-to-Ground Protocol Converters, and Airport Cable Loop infrastructure across the Western Service Area.</p>
            <p>Across all of it, the through-line is the same: rigorous testing, a healthy fear of single points of failure, and clean handoffs to whoever runs it next. I bring depth where the system is unforgiving — and I'm actively extending that depth into modern data and ML platforms.</p>
            <div className="now-card">
              <h3>Currently building</h3>
              <ul>
                <li>Data Engineering Zoomcamp 2026 — Docker, SQL, Terraform</li>
                <li>Peer reviewer for ML Zoomcamp 2025 & AI Dev Tools Zoomcamp 2025</li>
                <li>ML Zoomcamp 2025 — computer vision, deployment, K8s for ML (Passed)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----- Career arc ------------------------------------------------- */
function CareerArc() {
  const [active, setActive] = useState("directv");
  const node = window.ARC_NODES.find((n) => n.id === active) || window.ARC_NODES[0];
  return (
    <section id="work">
      <div className="container">
        <div className="section-head">
          <div className="section-num">02 · Work</div>
          <div>
            <h2 className="section-title">Three decades, one arc.</h2>
            <p className="section-kicker">Click a node to dive in. Each chapter built on the last — hardware → infrastructure → cloud → ML.</p>
          </div>
        </div>
        <div className="arc">
          <div className="arc-track">
            <div className="arc-line" />
            {window.ARC_NODES.map((n) => (
              <div key={n.id} className={"arc-node" + (active === n.id ? " active" : "")} onClick={() => setActive(n.id)}>
                <div className="arc-year">{n.year}</div>
                <div className="arc-dot" />
                <div className="arc-name">{n.short}</div>
              </div>
            ))}
          </div>
          <div className="arc-detail" key={node.id}>
            <div className="arc-detail-meta">
              <div className="role">{node.role}</div>
              <div className="span">{node.span}</div>
              <div className="loc">{node.loc}</div>
            </div>
            <div className="arc-detail-body">
              <h3>{node.company}</h3>
              <p className="summary">{node.headline}</p>
              <p style={{ color: "var(--ink-3)", fontSize: 13, marginBottom: 14 }}>{node.summary}</p>
              <ul>
                {node.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----- Projects --------------------------------------------------- */
function Projects() {
  const [filter, setFilter] = useState("all");
  const counts = useMemo(() => {
    const c = { all: window.PROJECTS.length };
    window.PROJECT_FILTERS.forEach((f) => {
      if (f.id === "all") return;
      c[f.id] = window.PROJECTS.filter((p) => p.domains.includes(f.id)).length;
    });
    return c;
  }, []);
  return (
    <section id="projects">
      <div className="container">
        <div className="section-head">
          <div className="section-num">03 · Projects</div>
          <div>
            <h2 className="section-title">Things I've shipped.</h2>
            <p className="section-kicker">Production infrastructure, recent ML work, and selected hardware. Filter by domain.</p>
          </div>
        </div>
        <div className="proj-toolbar">
          {window.PROJECT_FILTERS.map((f) => (
            <button key={f.id}
              className={"chip" + (filter === f.id ? " active" : "")}
              onClick={() => setFilter(f.id)}>
              {f.label} <span className="count">{counts[f.id] || 0}</span>
            </button>
          ))}
        </div>
        <div className="proj-grid">
          {window.PROJECTS.map((p, i) => {
            const visible = filter === "all" || p.domains.includes(filter);
            return (
              <article key={p.id} className={"proj-card" + (p.featured ? " featured" : "") + (visible ? "" : " hidden")}>
                <div className="head">
                  <span className="index">{p.index || `0${i + 1}`}</span>
                  {p.featured && <span className="index" style={{ color: "var(--accent)" }}>FEATURED</span>}
                </div>
                <h3>{p.title}</h3>
                <p className="summary">{p.summary}</p>
                <div className="proj-tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
                {p.links && (
                  <div className="foot">
                    {p.links.map((l) => (
                      <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                        {l.label} <Icon name="arrow" size={12} />
                      </a>
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ----- Skills ----------------------------------------------------- */
function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-head">
          <div className="section-num">04 · Skills</div>
          <div>
            <h2 className="section-title">Range, with depth where it matters.</h2>
            <p className="section-kicker">Cloud-native primary today; deep hardware and reliability fundamentals underneath.</p>
          </div>
        </div>
        <div className="skills-matrix">
          {window.SKILLS.map((g) => (
            <div className="skill-cell" key={g.title}>
              <h3><span className="icon"><Icon name={g.icon} size={12} /></span>{g.title}</h3>
              {g.items.map((it) => (
                <div className="row" key={it.name}>
                  <span className="name">{it.name}</span>
                  <span className="level">{it.level}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----- Education ------------------------------------------------- */
function Education() {
  return (
    <section id="education">
      <div className="container">
        <div className="section-head">
          <div className="section-num">05 · Education</div>
          <div>
            <h2 className="section-title">Two masters. Two bachelors. Always learning.</h2>
            <p className="section-kicker">Formal education on the left; recent / ongoing programs on the right.</p>
          </div>
        </div>
        <div className="edu-grid">
          <div className="edu-list">
            {window.EDUCATION.map((e) => {
              const content = (
                <>
                  <div className="yr">{e.yr}</div>
                  <div>
                    <div className="deg">{e.deg}</div>
                    <div className="school">{e.school}</div>
                  </div>
                </>
              );
              return e.href ? (
                <a className="edu-row" key={e.deg + e.yr} href={e.href} target="_blank" rel="noopener noreferrer">{content}</a>
              ) : (
                <div className="edu-row" key={e.deg + e.yr}>{content}</div>
              );
            })}
          </div>
          <div className="edu-list">
            {window.RECENT_LEARNING.map((e) => {
              const content = (
                <>
                  <div className="yr">{e.yr}</div>
                  <div>
                    <div className="deg">{e.deg}</div>
                    <div className="school">{e.school}</div>
                  </div>
                </>
              );
              return e.href ? (
                <a className="edu-row" key={e.deg} href={e.href} target="_blank" rel="noopener noreferrer">{content}</a>
              ) : (
                <div className="edu-row" key={e.deg}>{content}</div>
              );
            })}
          </div>
        </div>

        <div style={{ marginTop: 56 }}>
          <h3 className="subsection-label">Certifications</h3>
          <div className="cert-grid">
            {window.CERTS.map((c) => {
              const inner = (
                <>
                  <div className="cert-thumb">
                    {c.img ? <img src={c.img} alt={c.label} loading="lazy" /> : <div className="cert-pdf">PDF</div>}
                  </div>
                  <div className="label">{c.label}</div>
                </>
              );
              return c.href ? (
                <a className="cert-card" key={c.label} href={c.href} target="_blank" rel="noopener noreferrer">{inner}</a>
              ) : (
                <div className="cert-card" key={c.label}>{inner}</div>
              );
            })}
          </div>
        </div>

        <div style={{ marginTop: 48 }}>
          <h3 className="subsection-label">Endorsements</h3>
          <div className="doc-links">
            {window.DOCUMENTS.map((d) => (
              <a key={d.label} href={d.href} target="_blank" rel="noopener noreferrer" className="doc-link">
                <Icon name="doc" size={13} />
                {d.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----- Contact --------------------------------------------------- */
function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="section-head">
          <div className="section-num">06 · Contact</div>
          <div>
            <h2 className="section-title">Let's build something reliable.</h2>
          </div>
        </div>
        <div className="contact-card">
          <h3>Open to senior roles<br />and federal contract work.</h3>
          <p>SRE, platform / infrastructure, systems engineering, electronics engineering, or ML-platform-adjacent. On-site Los Angeles, hybrid, or remote.</p>
          <div className="contact-actions">
            <a className="btn-primary" href="mailto:mikealtamirano@yahoo.com">
              <Icon name="mail" size={14} /> mikealtamirano@yahoo.com
            </a>
            <a className="btn-ghost" href="https://www.linkedin.com/in/michaelaltamirano/" target="_blank" rel="noopener noreferrer">
              <Icon name="linkedin" size={14} /> LinkedIn
            </a>
            <a className="btn-ghost" href="https://github.com/HighviewOne" target="_blank" rel="noopener noreferrer">
              <Icon name="github" size={14} /> GitHub
            </a>
          </div>
          <div className="contact-meta">
            <span><span className="k">LOC</span> Los Angeles, CA</span>
            <span><span className="k">CITZ</span> U.S. Citizen</span>
            <span><span className="k">AVAIL</span> Immediate</span>
            <span><span className="k">CLR</span> Cleared-eligible</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----- Footer ---------------------------------------------------- */
function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>© 2026 Michael Altamirano</div>
        <div>Last updated · May 2026</div>
        <div>Hosted on GitHub Pages</div>
      </div>
    </footer>
  );
}

Object.assign(window, {
  Topbar, Hero, About, CareerArc, Projects, Skills, Education, Contact, Footer,
});
