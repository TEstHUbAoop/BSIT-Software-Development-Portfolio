import { useState } from "react";

type Project = {
  title: string;
  meta: string;
  description: string;
  tags: string[];
  category: "Cloud & Web" | "Systems" | "Automation";
};

const projects: Project[] = [
  {
    title: "KaBarangayConnect",
    meta: "Capstone 2",
    description:
      "A web-based barangay management and incident reporting application deployed through AWS.",
    tags: ["AWS Amplify", "IAM", "SES"],
    category: "Cloud & Web",
  },
  {
    title: "FinMark",
    meta: "Group project",
    description:
      "A microservice-based subscription platform designed for modularity and reliable service delivery.",
    tags: ["Microservices", "Web app", "Team"],
    category: "Systems",
  },
  {
    title: "Smart Tracking System",
    meta: "Group project",
    description:
      "An asset tracking concept connecting IoT data, blockchain records, and Tableau dashboards.",
    tags: ["IoT", "Blockchain", "Tableau"],
    category: "Systems",
  },
  {
    title: "ChillBites",
    meta: "Web project",
    description:
      "A responsive food website built with core web technologies and published through GitHub.",
    tags: ["HTML", "CSS", "GitHub"],
    category: "Cloud & Web",
  },
  {
    title: "Billing Automation",
    meta: "HealEx",
    description:
      "Redesigned an Excel billing workflow, repaired Apps Script automation, and documented an AdvancedMD SOP.",
    tags: ["Apps Script", "Excel", "AdvancedMD"],
    category: "Automation",
  },
  {
    title: "NationalOn Proposal",
    meta: "Web proposal",
    description: "A website structure and content direction deck prepared for nationalon.com.au.",
    tags: ["Information architecture", "Web", "Deck"],
    category: "Cloud & Web",
  },
];

const experience = [
  {
    company: "HealEx / SMI",
    role: "Billing Specialist",
    date: "2026 — Present",
    location: "Remote",
    detail: "EDI/ERA workflows, Apps Script troubleshooting, and operational SOP development.",
  },
  {
    company: "Lab Testing Solutions",
    role: "Virtual Assistant",
    date: "Jul 2025 — Feb 2026",
    location: "Remote",
    detail: "Managed portal operations and SOPs supporting a network of 10,000+ testing sites.",
  },
  {
    company: "Carelon",
    role: "Insurance Verification",
    date: "Apr 2023 — Jun 2025",
    detail: "Handled insurance verification in Salesforce with zero HIPAA violations.",
  },
  {
    company: "Panasiatic",
    role: "Customer Service Representative",
    date: "Mar 2022 — Mar 2023",
    detail: "Supported customers for a U.S. telecommunications account.",
  },
  {
    company: "Danny's Hardware",
    role: "Branch Manager",
    date: "Feb 2016 — Jan 2022",
    detail: "Led daily branch operations and managed a team of 8–10 staff.",
  },
];

const skillGroups = [
  {
    number: "01",
    title: "Web / Cloud",
    skills: ["HTML", "CSS", "JavaScript", "Apps Script", "AWS Amplify", "IAM", "SES"],
  },
  {
    number: "02",
    title: "Data",
    skills: ["Excel", "Tableau", "Salesforce"],
  },
  {
    number: "03",
    title: "Operations",
    skills: ["AdvancedMD", "EDI / ERA", "SOP development"],
  },
  {
    number: "04",
    title: "Remote setup",
    skills: ["100 Mbps fiber", "UPS backup"],
  },
];

const navItems = ["About", "Projects", "Experience", "Skills", "Contact"];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect x="5" y="5" width="8" height="8" rx="1.5" />
      <path d="M3 11H2.5A1.5 1.5 0 0 1 1 9.5v-7A1.5 1.5 0 0 1 2.5 1h7A1.5 1.5 0 0 1 11 2.5V3" />
    </svg>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const visibleProjects =
    activeTab === "All" ? projects : projects.filter((project) => project.category === activeTab);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("lr.rcabugnason@mmdc.mcl.edu.ph");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <nav className="nav container" aria-label="Primary navigation">
          <a className="brand" href="#about" onClick={() => setMenuOpen(false)}>
            <span className="brand-mark">RC</span>
            <span>Rick Cabugnason</span>
          </a>

          <button
            className="menu-button"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main>
        <section className="hero container" id="about">
          <div className="eyebrow">
            <span className="status-dot" />
            486-Hour BSIT Practicum (Traditional Track)
          </div>
          <h1>
            Software Development student with <span>remote operations experience.</span>
          </h1>
          <p className="hero-copy">
            Final-year BSIT student at MMCL/MMDC on the Latin honors track—combining AWS deployment,
            Apps Script automation, and 3+ years of U.S. operations experience.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View Projects <ArrowIcon />
            </a>
            <button className="button button-secondary" type="button" onClick={copyEmail}>
              <CopyIcon /> {copied ? "Email Copied" : "Copy Email"}
            </button>
            <a
              className="text-link"
              href="https://linkedin.com/in/rick-cabugnason-959059257"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="facts" aria-label="Quick facts">
            <div>
              <span>Education</span>
              <strong>BSIT (2027)</strong>
            </div>
            <div>
              <span>Standing</span>
              <strong>Latin Honors</strong>
            </div>
            <div>
              <span>Cloud</span>
              <strong>AWS Amplify / IAM / SES</strong>
            </div>
            <div>
              <span>Location</span>
              <strong>Iloilo City, PH</strong>
            </div>
          </div>
        </section>

        <section className="section container" id="projects">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Selected work</p>
              <h2>Projects built for practical use.</h2>
            </div>
            <p>
              Academic, operational, and independent work across cloud, systems, and automation.
            </p>
          </div>

          <div className="tabs" role="tablist" aria-label="Project categories">
            {["All", "Cloud & Web", "Systems", "Automation"].map((tab) => (
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === tab}
                className={activeTab === tab ? "active" : ""}
                key={tab}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="project-grid">
            {visibleProjects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-topline">
                  <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="project-meta">{project.meta}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="section-kicker">Career path</p>
                <h2>Experience that translates.</h2>
              </div>
              <p>
                Progressive responsibility across healthcare operations, customer service, and team
                leadership.
              </p>
            </div>

            <div className="experience-list">
              {experience.map((item, index) => (
                <article className="experience-item" key={item.company}>
                  <div className="experience-index">{String(index + 1).padStart(2, "0")}</div>
                  <div className="experience-main">
                    <div>
                      <h3>{item.company}</h3>
                      <p className="role">{item.role}</p>
                    </div>
                    <p className="experience-detail">{item.detail}</p>
                  </div>
                  <div className="experience-date">
                    <strong>{item.date}</strong>
                    {item.location && <span>{item.location}</span>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section container" id="skills">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Capabilities</p>
              <h2>Technical skills, grounded in operations.</h2>
            </div>
            <p>
              A focused toolkit for building, deploying, documenting, and supporting digital
              workflows.
            </p>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <span className="skill-number">{group.number}</span>
                <h3>{group.title}</h3>
                <div className="skill-list">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="contact" id="contact">
        <div className="container">
          <div className="availability">
            <span className="status-dot" />
            Available for a 486-hour practicum
          </div>
          <div className="contact-lead">
            <p>Let’s work together</p>
            <h2>Ready to learn, contribute, and build.</h2>
          </div>
          <a className="email-link" href="mailto:lr.rcabugnason@mmdc.mcl.edu.ph">
            lr.rcabugnason@mmdc.mcl.edu.ph <ArrowIcon />
          </a>
          <div className="contact-grid">
            <div>
              <span>Phone</span>
              <a href="tel:+639946012923">+63 994 601 2923</a>
            </div>
            <div>
              <span>Student ID</span>
              <strong>2023170053</strong>
            </div>
            <div>
              <span>LinkedIn</span>
              <a
                href="https://linkedin.com/in/rick-cabugnason-959059257"
                target="_blank"
                rel="noreferrer"
              >
                rick-cabugnason-959059257 ↗
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>Rick Cabugnason</span>
            <span>BSIT · Software Development</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
