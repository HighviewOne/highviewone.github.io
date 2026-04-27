/* global React, window */
const {
  useState,
  useEffect,
  useRef,
  useMemo
} = React;

/* ----- Icons ----------------------------------------------------- */
const Icon = ({
  name,
  size = 16
}) => {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };
  const map = {
    arrow: /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
      d: "M7 17 17 7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 7h8v8"
    })),
    download: /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
      d: "M12 3v12"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m7 10 5 5 5-5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5 21h14"
    })),
    mail: /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("rect", {
      width: "20",
      height: "16",
      x: "2",
      y: "4",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
    })),
    linkedin: /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
    }), /*#__PURE__*/React.createElement("rect", {
      width: "4",
      height: "12",
      x: "2",
      y: "9"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "4",
      cy: "4",
      r: "2"
    })),
    github: /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 18c-4.51 2-5-2-7-2"
    })),
    cloud: /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
      d: "M17.5 19a4.5 4.5 0 0 0 0-9 7 7 0 0 0-13.6 2A4 4 0 0 0 6 19h11.5z"
    })),
    ops: /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
      d: "M2 12h4l3-9 4 18 3-9h6"
    })),
    code: /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
      d: "m16 18 6-6-6-6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m8 6-6 6 6 6"
    })),
    ml: /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 1v6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 17v6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M4.2 4.2l4.3 4.3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M15.5 15.5l4.3 4.3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M1 12h6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M17 12h6"
    })),
    hw: /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "4",
      width: "16",
      height: "16",
      rx: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "9",
      y: "9",
      width: "6",
      height: "6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 1v3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M15 1v3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 20v3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M15 20v3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M20 9h3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M20 14h3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M1 9h3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M1 14h3"
    })),
    sec: /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
      d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
    })),
    doc: /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
      d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "14 2 14 8 20 8"
    }))
  };
  return map[name] || null;
};

/* ----- Top bar --------------------------------------------------- */
function Topbar({
  active
}) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [["about", "About"], ["work", "Work"], ["projects", "Projects"], ["skills", "Skills"], ["education", "Education"], ["contact", "Contact"]];
  return /*#__PURE__*/React.createElement("header", {
    className: "topbar",
    style: {
      borderBottomColor: scrolled ? "var(--line)" : "transparent"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container topbar-inner"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    className: "brand"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono-mark"
  }, "MA"), /*#__PURE__*/React.createElement("div", {
    className: "brand-name"
  }, "Michael Altamirano ", /*#__PURE__*/React.createElement("span", {
    className: "dim"
  }, "/ engineer"))), /*#__PURE__*/React.createElement("nav", {
    className: "nav-links"
  }, links.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: `#${id}`,
    className: active === id ? "active" : ""
  }, label))), /*#__PURE__*/React.createElement("div", {
    className: "top-actions"
  }, /*#__PURE__*/React.createElement("a", {
    className: "icon-btn",
    href: "https://github.com/HighviewOne",
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "GitHub"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "github"
  })), /*#__PURE__*/React.createElement("a", {
    className: "icon-btn",
    href: "https://www.linkedin.com/in/michaelaltamirano/",
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "LinkedIn"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "linkedin"
  })), /*#__PURE__*/React.createElement("a", {
    className: "btn-primary",
    href: "assets/documents/Michael_Altamirano_Resume.pdf",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Resume ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow",
    size: 14
  })))));
}

/* ----- Rotator --------------------------------------------------- */
function Rotator({
  words
}) {
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
  return /*#__PURE__*/React.createElement("span", {
    className: "rotator"
  }, text || " ");
}

/* ----- Counter --------------------------------------------------- */
function Counter({
  to,
  suffix,
  duration = 1400
}) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  const fired = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(ents => {
      ents.forEach(e => {
        if (e.isIntersecting && !fired.current) {
          fired.current = true;
          const start = performance.now();
          const tick = t => {
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(to * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, {
      threshold: 0.4
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref
  }, n.toLocaleString(), suffix && /*#__PURE__*/React.createElement("span", {
    className: "suffix"
  }, suffix));
}

/* ----- Hero ------------------------------------------------------- */
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    className: "hero",
    id: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), " Available \xB7 Los Angeles \xB7 U.S. Citizen"), /*#__PURE__*/React.createElement("h1", null, "Senior engineer", /*#__PURE__*/React.createElement("br", null), "shipping reliable\xA0", /*#__PURE__*/React.createElement(Rotator, {
    words: window.ROTATOR
  })), /*#__PURE__*/React.createElement("p", {
    className: "hero-lede"
  }, "25+ years building things that don't fall over \u2014 from ", /*#__PURE__*/React.createElement("strong", null, "NASA's Deep Space Network"), " to a ", /*#__PURE__*/React.createElement("strong", null, "1,000-server fleet at DirecTV"), " serving 21M subscribers, to ", /*#__PURE__*/React.createElement("strong", null, "FAA airspace modernization"), " today. Now closing the loop with cloud-native and ML-aware infrastructure."), /*#__PURE__*/React.createElement("div", {
    className: "hero-actions"
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn-primary",
    href: "assets/documents/Michael_Altamirano_Resume.pdf",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "download",
    size: 14
  }), " Download Resume"), /*#__PURE__*/React.createElement("a", {
    className: "btn-ghost",
    href: "#contact"
  }, "Get in touch")), /*#__PURE__*/React.createElement("div", {
    className: "stat-band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-num"
  }, /*#__PURE__*/React.createElement(Counter, {
    to: 25,
    suffix: "+ yrs"
  })), /*#__PURE__*/React.createElement("div", {
    className: "stat-label"
  }, "Building reliable systems")), /*#__PURE__*/React.createElement("div", {
    className: "stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-num"
  }, /*#__PURE__*/React.createElement(Counter, {
    to: 1000,
    suffix: "+"
  })), /*#__PURE__*/React.createElement("div", {
    className: "stat-label"
  }, "Server fleet (DirecTV)")), /*#__PURE__*/React.createElement("div", {
    className: "stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-num"
  }, /*#__PURE__*/React.createElement(Counter, {
    to: 21,
    suffix: "M"
  })), /*#__PURE__*/React.createElement("div", {
    className: "stat-label"
  }, "Subscribers served")), /*#__PURE__*/React.createElement("div", {
    className: "stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-num"
  }, "FAA"), /*#__PURE__*/React.createElement("div", {
    className: "stat-label"
  }, "NAS modernization \xB7 current")))));
}

/* ----- About ----------------------------------------------------- */
function About() {
  return /*#__PURE__*/React.createElement("section", {
    id: "about"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-num"
  }, "01 \xB7 About"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "Depth, judgment, and a long memory for what breaks."), /*#__PURE__*/React.createElement("p", {
    className: "section-kicker"
  }, "A senior engineer's bet on reliability \u2014 from solder joints to Kubernetes."))), /*#__PURE__*/React.createElement("div", {
    className: "about-grid"
  }, /*#__PURE__*/React.createElement("dl", {
    className: "about-meta"
  }, /*#__PURE__*/React.createElement("dt", null, "Based"), /*#__PURE__*/React.createElement("dd", null, "Los Angeles, CA"), /*#__PURE__*/React.createElement("dt", null, "Status"), /*#__PURE__*/React.createElement("dd", null, "U.S. Citizen \xB7 Available"), /*#__PURE__*/React.createElement("dt", null, "Currently"), /*#__PURE__*/React.createElement("dd", null, "Electronics Engineer, Leidos (FAA)"), /*#__PURE__*/React.createElement("dt", null, "Focus"), /*#__PURE__*/React.createElement("dd", null, "SRE \xB7 Platforms \xB7 ML systems")), /*#__PURE__*/React.createElement("div", {
    className: "about-prose"
  }, /*#__PURE__*/React.createElement("p", null, "I'm a Systems / Reliability Engineer with 25+ years of experience \u2014 and the kind of background that's hard to manufacture. I started on NASA's Deep Space Network, spent 12 years validating power semiconductors at International Rectifier / Infineon, then 13 years at DirecTV running infrastructure for 21M subscribers."), /*#__PURE__*/React.createElement("p", null, "Today, I'm at Leidos supporting ", /*#__PURE__*/React.createElement("strong", null, "FAA National Airspace System modernization"), " \u2014 designing system integration packages for NEXCOM Radios, Air-to-Ground Protocol Converters, and Airport Cable Loop infrastructure across the Western Service Area."), /*#__PURE__*/React.createElement("p", null, "Across all of it, the through-line is the same: rigorous testing, a healthy fear of single points of failure, and clean handoffs to whoever runs it next. I bring depth where the system is unforgiving \u2014 and I'm actively extending that depth into modern data and ML platforms."), /*#__PURE__*/React.createElement("div", {
    className: "now-card"
  }, /*#__PURE__*/React.createElement("h3", null, "Currently building"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Data Engineering Zoomcamp 2026 \u2014 Docker, SQL, Terraform"), /*#__PURE__*/React.createElement("li", null, "Peer reviewer for ML Zoomcamp 2025 & AI Dev Tools Zoomcamp 2025"), /*#__PURE__*/React.createElement("li", null, "ML Zoomcamp 2025 \u2014 computer vision, deployment, K8s for ML (Passed)")))))));
}

/* ----- Career arc ------------------------------------------------- */
function CareerArc() {
  const [active, setActive] = useState("directv");
  const node = window.ARC_NODES.find(n => n.id === active) || window.ARC_NODES[0];
  return /*#__PURE__*/React.createElement("section", {
    id: "work"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-num"
  }, "02 \xB7 Work"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "Three decades, one arc."), /*#__PURE__*/React.createElement("p", {
    className: "section-kicker"
  }, "Click a node to dive in. Each chapter built on the last \u2014 hardware \u2192 infrastructure \u2192 cloud \u2192 ML."))), /*#__PURE__*/React.createElement("div", {
    className: "arc"
  }, /*#__PURE__*/React.createElement("div", {
    className: "arc-track"
  }, /*#__PURE__*/React.createElement("div", {
    className: "arc-line"
  }), window.ARC_NODES.map(n => /*#__PURE__*/React.createElement("div", {
    key: n.id,
    className: "arc-node" + (active === n.id ? " active" : ""),
    onClick: () => setActive(n.id)
  }, /*#__PURE__*/React.createElement("div", {
    className: "arc-year"
  }, n.year), /*#__PURE__*/React.createElement("div", {
    className: "arc-dot"
  }), /*#__PURE__*/React.createElement("div", {
    className: "arc-name"
  }, n.short)))), /*#__PURE__*/React.createElement("div", {
    className: "arc-detail",
    key: node.id
  }, /*#__PURE__*/React.createElement("div", {
    className: "arc-detail-meta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "role"
  }, node.role), /*#__PURE__*/React.createElement("div", {
    className: "span"
  }, node.span), /*#__PURE__*/React.createElement("div", {
    className: "loc"
  }, node.loc)), /*#__PURE__*/React.createElement("div", {
    className: "arc-detail-body"
  }, /*#__PURE__*/React.createElement("h3", null, node.company), /*#__PURE__*/React.createElement("p", {
    className: "summary"
  }, node.headline), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--ink-3)",
      fontSize: 13,
      marginBottom: 14
    }
  }, node.summary), /*#__PURE__*/React.createElement("ul", null, node.bullets.map((b, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, b))))))));
}

/* ----- Projects --------------------------------------------------- */
function Projects() {
  const [filter, setFilter] = useState("all");
  const counts = useMemo(() => {
    const c = {
      all: window.PROJECTS.length
    };
    window.PROJECT_FILTERS.forEach(f => {
      if (f.id === "all") return;
      c[f.id] = window.PROJECTS.filter(p => p.domains.includes(f.id)).length;
    });
    return c;
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    id: "projects"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-num"
  }, "03 \xB7 Projects"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "Things I've shipped."), /*#__PURE__*/React.createElement("p", {
    className: "section-kicker"
  }, "Production infrastructure, recent ML work, and selected hardware. Filter by domain."))), /*#__PURE__*/React.createElement("div", {
    className: "proj-toolbar"
  }, window.PROJECT_FILTERS.map(f => /*#__PURE__*/React.createElement("button", {
    key: f.id,
    className: "chip" + (filter === f.id ? " active" : ""),
    onClick: () => setFilter(f.id)
  }, f.label, " ", /*#__PURE__*/React.createElement("span", {
    className: "count"
  }, counts[f.id] || 0)))), /*#__PURE__*/React.createElement("div", {
    className: "proj-grid"
  }, window.PROJECTS.map((p, i) => {
    const visible = filter === "all" || p.domains.includes(filter);
    return /*#__PURE__*/React.createElement("article", {
      key: p.id,
      className: "proj-card" + (p.featured ? " featured" : "") + (visible ? "" : " hidden")
    }, /*#__PURE__*/React.createElement("div", {
      className: "head"
    }, /*#__PURE__*/React.createElement("span", {
      className: "index"
    }, p.index || `0${i + 1}`), p.featured && /*#__PURE__*/React.createElement("span", {
      className: "index",
      style: {
        color: "var(--accent)"
      }
    }, "FEATURED")), /*#__PURE__*/React.createElement("h3", null, p.title), /*#__PURE__*/React.createElement("p", {
      className: "summary"
    }, p.summary), /*#__PURE__*/React.createElement("div", {
      className: "proj-tags"
    }, p.tags.map(t => /*#__PURE__*/React.createElement("span", {
      key: t
    }, t))), p.links && /*#__PURE__*/React.createElement("div", {
      className: "foot"
    }, p.links.map(l => /*#__PURE__*/React.createElement("a", {
      key: l.href,
      href: l.href,
      target: "_blank",
      rel: "noopener noreferrer"
    }, l.label, " ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrow",
      size: 12
    })))));
  }))));
}

/* ----- Skills ----------------------------------------------------- */
function Skills() {
  return /*#__PURE__*/React.createElement("section", {
    id: "skills"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-num"
  }, "04 \xB7 Skills"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "Range, with depth where it matters."), /*#__PURE__*/React.createElement("p", {
    className: "section-kicker"
  }, "Cloud-native primary today; deep hardware and reliability fundamentals underneath."))), /*#__PURE__*/React.createElement("div", {
    className: "skills-matrix"
  }, window.SKILLS.map(g => /*#__PURE__*/React.createElement("div", {
    className: "skill-cell",
    key: g.title
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement("span", {
    className: "icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: g.icon,
    size: 12
  })), g.title), g.items.map(it => /*#__PURE__*/React.createElement("div", {
    className: "row",
    key: it.name
  }, /*#__PURE__*/React.createElement("span", {
    className: "name"
  }, it.name), /*#__PURE__*/React.createElement("span", {
    className: "level"
  }, it.level))))))));
}

/* ----- Education ------------------------------------------------- */
function Education() {
  return /*#__PURE__*/React.createElement("section", {
    id: "education"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-num"
  }, "05 \xB7 Education"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "Two masters. Two bachelors. Always learning."), /*#__PURE__*/React.createElement("p", {
    className: "section-kicker"
  }, "Formal education on the left; recent / ongoing programs on the right."))), /*#__PURE__*/React.createElement("div", {
    className: "edu-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "edu-list"
  }, window.EDUCATION.map(e => {
    const content = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "yr"
    }, e.yr), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "deg"
    }, e.deg), /*#__PURE__*/React.createElement("div", {
      className: "school"
    }, e.school)));
    return e.href ? /*#__PURE__*/React.createElement("a", {
      className: "edu-row",
      key: e.deg + e.yr,
      href: e.href,
      target: "_blank",
      rel: "noopener noreferrer"
    }, content) : /*#__PURE__*/React.createElement("div", {
      className: "edu-row",
      key: e.deg + e.yr
    }, content);
  })), /*#__PURE__*/React.createElement("div", {
    className: "edu-list"
  }, window.RECENT_LEARNING.map(e => /*#__PURE__*/React.createElement("div", {
    className: "edu-row",
    key: e.deg
  }, /*#__PURE__*/React.createElement("div", {
    className: "yr"
  }, e.yr), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "deg"
  }, e.deg), /*#__PURE__*/React.createElement("div", {
    className: "school"
  }, e.school)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "subsection-label"
  }, "Certifications"), /*#__PURE__*/React.createElement("div", {
    className: "cert-grid"
  }, window.CERTS.map(c => {
    const inner = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "cert-thumb"
    }, c.img ? /*#__PURE__*/React.createElement("img", {
      src: c.img,
      alt: c.label,
      loading: "lazy"
    }) : /*#__PURE__*/React.createElement("div", {
      className: "cert-pdf"
    }, "PDF")), /*#__PURE__*/React.createElement("div", {
      className: "label"
    }, c.label));
    return c.href ? /*#__PURE__*/React.createElement("a", {
      className: "cert-card",
      key: c.label,
      href: c.href,
      target: "_blank",
      rel: "noopener noreferrer"
    }, inner) : /*#__PURE__*/React.createElement("div", {
      className: "cert-card",
      key: c.label
    }, inner);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "subsection-label"
  }, "Endorsements"), /*#__PURE__*/React.createElement("div", {
    className: "doc-links"
  }, window.DOCUMENTS.map(d => /*#__PURE__*/React.createElement("a", {
    key: d.label,
    href: d.href,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "doc-link"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "doc",
    size: 13
  }), d.label))))));
}

/* ----- Contact --------------------------------------------------- */
function Contact() {
  return /*#__PURE__*/React.createElement("section", {
    id: "contact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-num"
  }, "06 \xB7 Contact"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "Let's build something reliable."))), /*#__PURE__*/React.createElement("div", {
    className: "contact-card"
  }, /*#__PURE__*/React.createElement("h3", null, "Open to senior roles", /*#__PURE__*/React.createElement("br", null), "and federal contract work."), /*#__PURE__*/React.createElement("p", null, "SRE, platform / infrastructure, systems engineering, electronics engineering, or ML-platform-adjacent. On-site Los Angeles, hybrid, or remote."), /*#__PURE__*/React.createElement("div", {
    className: "contact-actions"
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn-primary",
    href: "mailto:mikealtamirano@yahoo.com"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 14
  }), " mikealtamirano@yahoo.com"), /*#__PURE__*/React.createElement("a", {
    className: "btn-ghost",
    href: "https://www.linkedin.com/in/michaelaltamirano/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "linkedin",
    size: 14
  }), " LinkedIn"), /*#__PURE__*/React.createElement("a", {
    className: "btn-ghost",
    href: "https://github.com/HighviewOne",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "github",
    size: 14
  }), " GitHub")), /*#__PURE__*/React.createElement("div", {
    className: "contact-meta"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "LOC"), " Los Angeles, CA"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "CITZ"), " U.S. Citizen"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "AVAIL"), " Immediate"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "CLR"), " Cleared-eligible")))));
}

/* ----- Footer ---------------------------------------------------- */
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "site-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container footer-inner"
  }, /*#__PURE__*/React.createElement("div", null, "\xA9 2026 Michael Altamirano"), /*#__PURE__*/React.createElement("div", null, "Last updated \xB7 April 2026"), /*#__PURE__*/React.createElement("div", null, "Hosted on GitHub Pages")));
}
Object.assign(window, {
  Topbar,
  Hero,
  About,
  CareerArc,
  Projects,
  Skills,
  Education,
  Contact,
  Footer
});