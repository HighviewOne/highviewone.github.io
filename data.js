/* global window */

const ARC_NODES = [{
  id: "nasa",
  year: "1996",
  short: "NASA / JPL",
  company: "Allied Signal · NASA Deep Space Network",
  role: "Computer Technician",
  span: "1996 — 1997",
  loc: "Pasadena, CA",
  headline: "Maintained ground systems for the spacecraft that talk to other planets.",
  summary: "Started my career on NASA's Deep Space Network — the same antenna network that ran Voyager, Cassini, and the Mars rovers. Learned that reliability is not an opinion.",
  bullets: ["Maintained workstations and computer systems supporting DSN operations", "Earned NASA/JPL certifications: hand soldering, wire wrap, ESD awareness", "Foundation in test discipline and safety-critical workflow"]
}, {
  id: "ir",
  year: "2000",
  short: "Int'l Rectifier",
  company: "International Rectifier / Infineon",
  role: "Engineering Technician → Device Engineer",
  span: "2000 — 2012 · 12 yrs",
  loc: "El Segundo, CA",
  headline: "12 years validating power semiconductors that ship in millions of devices.",
  summary: "Worked the bench and the data — performance characterization, failure analysis, validating MOSFETs / IGBTs / DirectFET / GaN. Designed test stations from scratch.",
  bullets: ["Validated DirectFET technology for improved thermal performance", "Evaluated GaN platform for next-generation power semiconductors", "Designed specialized test stations for product validation", "Supervised second-shift operations & failure analysis"]
}, {
  id: "directv",
  year: "2012",
  short: "DirecTV",
  company: "DirecTV (AT&T)",
  role: "STB Hardware → SRE",
  span: "2012 — 2025 · 13 yrs",
  loc: "El Segundo, CA",
  headline: "Ran the infrastructure delivering VOD & streaming to 21M subscribers.",
  summary: "Started in STB hardware, moved up through Application Engineering, Production Engineering, and finally SRE — owning a 1,000+ server fleet.",
  bullets: ["Managed 1,000+ server fleet for VOD and Streaming services", "Cloud migration: AWS, Docker, Kubernetes", "Built Bash/Python automation reducing downtime via metric-driven response", "Led encryption & smart-card upgrades for 21M subscribers (AT&T merger)", "ActiveMQ queuing for scale; performance auto-remediation"]
}, {
  id: "leidos",
  year: "2025",
  short: "Leidos / FAA",
  company: "Leidos (FAA Western Service Area)",
  role: "Electronics Engineer",
  span: "Dec 2025 — Present",
  loc: "El Segundo, CA",
  headline: "Currently: modernizing the National Airspace System.",
  summary: "Engineering support to the FAA Los Angeles Communications Engineering Center on the Legacy Infrastructure Future Technologies (LIFT) program.",
  bullets: ["System integration packages for NEXCOM Radios, A/G Protocol Converters, Airport Cable Loops", "Engineering risk assessments and feasibility analyses for site/facility changes", "Transition plans, testing protocols, and stakeholder coordination across the Western Service Area"]
}, {
  id: "ml",
  year: "2026",
  short: "Active",
  company: "Continuous learning",
  role: "Data & ML Engineering",
  span: "2025 — ongoing",
  loc: "Remote / cohort",
  headline: "Closing the loop: from reliability engineer to ML-aware infrastructure.",
  summary: "Active learner: ML Zoomcamp 2025, AI Dev Tools Zoomcamp 2025, AI Hero crash course, Data Engineering Zoomcamp 2026 in progress.",
  bullets: ["ML Zoomcamp 2025 — deep learning, serverless, K8s for ML (Passed)", "AI Dev Tools Zoomcamp 2025 — MCP, end-to-end agents", "Peer reviewer for ML Zoomcamp & AI Dev Tools Zoomcamp", "Data Engineering Zoomcamp 2026 — Docker, SQL, Terraform (in progress)"]
}];
const PROJECTS = [{
  id: "directv-fleet",
  featured: true,
  index: "01",
  title: "1,000-server VOD & Streaming fleet",
  summary: "At DirecTV, owned the operational infrastructure that delivered Video on Demand and streaming to 21M+ subscribers. Built Bash/Python automation, migrated workloads to AWS / Docker / Kubernetes, and used ActiveMQ queuing to scale ingest. Auto-remediation against performance metrics measurably reduced downtime.",
  tags: ["AWS", "Kubernetes", "Docker", "Python", "ActiveMQ", "SRE"],
  domains: ["cloud", "sre"],
  links: [{
    label: "Resume (PDF)",
    href: "assets/documents/Michael_Altamirano_Resume.pdf"
  }]
}, {
  id: "ml-registry",
  title: "ML Model Registry & Deployment Dashboard",
  summary: "Full-stack tool for managing and deploying ML models. React + TypeScript frontend, FastAPI backend, deployed on Railway.",
  tags: ["FastAPI", "React", "TypeScript", "Railway"],
  domains: ["ml", "cloud"]
}, {
  id: "ml-pipelines",
  title: "End-to-End ML Pipelines",
  summary: "Production ML pipelines orchestrated with Docker and Kubernetes — reproducibility, reliability, scalable training-to-serving.",
  tags: ["Docker", "Kubernetes", "MLOps"],
  domains: ["ml", "cloud"]
}, {
  id: "transfer-learning",
  title: "Transfer Learning for Vision",
  summary: "Computer vision projects applying transfer learning to image classification and human activity recognition with state-of-the-art models.",
  tags: ["Computer Vision", "TensorFlow", "Python"],
  domains: ["ml"]
}, {
  id: "realtime",
  title: "Real-Time Collaborative Platform",
  summary: "WebSocket-driven collaborative editor with synchronized state across many concurrent users.",
  tags: ["WebSocket", "Real-Time", "Full-Stack"],
  domains: ["cloud"]
}, {
  id: "solar",
  title: "Solar Charging Circuit (40W)",
  summary: "Designed and built a solar-powered charger: 40W PV panel feeding a Buck converter to safely charge a 6V 12Ah lead-acid battery. Schematic, simulation, build, and enclosure. CSULB EE458.",
  tags: ["Power Electronics", "Hardware", "Circuit Design"],
  domains: ["hw"],
  image: "assets/projects/solar-panel-assembly.jpg",
  links: [{
    label: "Full report (PDF)",
    href: "assets/projects/solar-panel-charging-circuit-report.pdf"
  }]
}, {
  id: "admedia",
  title: "AdMedia, LLC — Capstone Business Plan",
  summary: "MBA capstone: full business plan for a video-display advertising network deployed at Sonic Drive-In franchises. Marketing, financial projections, operations, rollout. Keller GM600.",
  tags: ["Business Plan", "Strategy", "MBA"],
  domains: ["other"],
  links: [{
    label: "Business plan (PDF)",
    href: "assets/projects/admedia-business-plan.pdf"
  }]
}];
const PROJECT_FILTERS = [{
  id: "all",
  label: "All"
}, {
  id: "cloud",
  label: "Cloud / SRE"
}, {
  id: "ml",
  label: "ML / Data"
}, {
  id: "hw",
  label: "Hardware"
}, {
  id: "other",
  label: "Business"
}];
const SKILLS = [{
  title: "Cloud & Infrastructure",
  icon: "cloud",
  items: [{
    name: "AWS (EC2, S3, VPC, IAM)",
    level: "Production"
  }, {
    name: "Docker",
    level: "Production"
  }, {
    name: "Kubernetes",
    level: "Production"
  }, {
    name: "Terraform",
    level: "Working"
  }, {
    name: "VMware / ESXi",
    level: "Expert"
  }]
}, {
  title: "Reliability & Ops",
  icon: "ops",
  items: [{
    name: "SRE practices",
    level: "Expert"
  }, {
    name: "Splunk / Prometheus / Grafana",
    level: "Production"
  }, {
    name: "ActiveMQ",
    level: "Production"
  }, {
    name: "Linux / UNIX",
    level: "Expert"
  }, {
    name: "CIS / STIG hardening",
    level: "Production"
  }]
}, {
  title: "Programming",
  icon: "code",
  items: [{
    name: "Python",
    level: "Production"
  }, {
    name: "Bash",
    level: "Expert"
  }, {
    name: "SQL",
    level: "Production"
  }, {
    name: "C++ / Java",
    level: "Working"
  }]
}, {
  title: "Data & ML",
  icon: "ml",
  items: [{
    name: "ML Zoomcamp 2025 (Passed)",
    level: "Recent"
  }, {
    name: "PyTorch / TensorFlow",
    level: "Working"
  }, {
    name: "FastAPI",
    level: "Production"
  }, {
    name: "MLOps (Docker/K8s for ML)",
    level: "Working"
  }]
}, {
  title: "Hardware & Test",
  icon: "hw",
  items: [{
    name: "Oscilloscopes / Spectrum analyzers",
    level: "Expert"
  }, {
    name: "RF / Analog / Digital test",
    level: "Expert"
  }, {
    name: "MOSFETs / IGBTs / GaN",
    level: "Expert"
  }, {
    name: "MATLAB / LabVIEW",
    level: "Production"
  }]
}, {
  title: "Security & Compliance",
  icon: "sec",
  items: [{
    name: "Vulnerability mgmt",
    level: "Production"
  }, {
    name: "Nessus / Qualys",
    level: "Production"
  }, {
    name: "ISO 9001",
    level: "Working"
  }, {
    name: "FAA / DoD-adjacent process",
    level: "Active"
  }]
}];
const EDUCATION = [{
  yr: "2013",
  deg: "M.S. Electrical Engineering",
  school: "California State University, Long Beach",
  href: "assets/degrees/CSULB_MasterOfScienceInElectricalEngineering.pdf"
}, {
  yr: "2011",
  deg: "M.B.A.",
  school: "Keller Graduate School of Management",
  href: "assets/degrees/KellerMasterOfBusinessAdministration.pdf"
}, {
  yr: "2010",
  deg: "B.S. Computer Engineering Tech.",
  school: "DeVry University, Long Beach",
  href: "assets/degrees/DeVryComputerEngineeringTechnology.pdf"
}, {
  yr: "2009",
  deg: "B.S. Electronics Engineering Tech.",
  school: "DeVry University, Long Beach",
  href: "assets/degrees/DeVryElectronicsEngineeringTechnology.pdf"
}, {
  yr: "1998",
  deg: "A.S. Electronics & Computer Tech.",
  school: "Don Bosco Technical Institute",
  href: "assets/degrees/DonBoscoTechASElectronicsAndComputerTechnology.pdf"
}];
const RECENT_LEARNING = [{
  yr: "2026",
  deg: "Data Engineering Zoomcamp 2026",
  school: "DataTalksClub · in progress"
}, {
  yr: "2026",
  deg: "7-Day AI Agents Crash Course",
  school: "AI Hero · completed"
}, {
  yr: "2026",
  deg: "AI Dev Tools Zoomcamp 2025",
  school: "DataTalksClub · completed"
}, {
  yr: "2026",
  deg: "Machine Learning Zoomcamp 2025",
  school: "DataTalksClub · passed"
}, {
  yr: "2025",
  deg: "AI with Data Science",
  school: "AAA Institute · completed"
}];
const CERTS = [{
  label: "CompTIA A+",
  img: "assets/certificates/CompTIA A+ Certificate.jpg",
  href: "assets/certificates/CompTIA A+ Certificate.jpg"
}, {
  label: "Microsoft Certified Professional",
  img: "assets/certificates/MCP Certificate.jpg",
  href: "assets/certificates/MCP Certificate.jpg"
}, {
  label: "NASA JPL — ESD Awareness",
  img: "assets/certificates/NASA JPL ESD Awareness Certificate.jpg",
  href: "assets/certificates/NASA JPL ESD Awareness Certificate.jpg"
}, {
  label: "NASA JPL — Hand Soldering",
  img: "assets/certificates/NASA JPL Hand Soldering Certificate.jpg",
  href: "assets/certificates/NASA JPL Hand Soldering Certificate.jpg"
}, {
  label: "NASA JPL — Wire Wrap",
  img: "assets/certificates/NASA JPL Wire Wrap Certificate.jpg",
  href: "assets/certificates/NASA JPL Wire Wrap Certificate.jpg"
}, {
  label: "Kester Lead-Free Soldering",
  img: "assets/certificates/Kester LeadFree Soldering.jpg",
  href: "assets/certificates/Kester LeadFree Soldering.jpg"
}, {
  label: "IRF Measurement System Analysis",
  img: "assets/certificates/IRF Measurement System Analysis.jpg",
  href: "assets/certificates/IRF Measurement System Analysis.jpg"
}, {
  label: "ATI — A+ / MCSE / CCNA",
  img: "assets/certificates/ATI A+ MCSE CCNA.jpg",
  href: "assets/certificates/ATI A+ MCSE CCNA.jpg"
}, {
  label: "Advanced Distributed Systems Design",
  img: "assets/certificates/AdvancedDistributedSystemsDesign.PNG",
  href: "assets/certificates/AdvancedDistributedSystemsDesign.PNG"
}, {
  label: "AI Agents Crash Course",
  img: null,
  href: "assets/certificates/AI Agents Crash Course Certificate.pdf"
}, {
  label: "AI with Data Science",
  img: null,
  href: "assets/certificates/Michael Altamirano.pdf"
}];
const DOCUMENTS = [{
  label: "Resume (PDF)",
  href: "assets/documents/Michael_Altamirano_Resume.pdf"
}, {
  label: "Letter of Recommendation — Al Diy",
  href: "assets/documents/Al Diy Letter of Recommendation.jpg"
}, {
  label: "Letter of Recommendation — John Ambrus",
  href: "assets/documents/John Ambrus Letter of Recommendation.jpg"
}, {
  label: "Letter of Recommendation — M Ahsan",
  href: "assets/documents/Letter of Recommendation from M Ahsan.pdf"
}];
const ROTATOR = ["systems", "reliability", "platforms", "infrastructure", "ML systems"];
Object.assign(window, {
  ARC_NODES,
  PROJECTS,
  PROJECT_FILTERS,
  SKILLS,
  EDUCATION,
  RECENT_LEARNING,
  CERTS,
  DOCUMENTS,
  ROTATOR
});