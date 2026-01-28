import "./index.css";
import portfolioHeadshot from "./assets/portfolio_headshot.jpg";

const skills = [
  { label: "React", value: 80 },
  { label: "JavaScript (ES6+)", value: 85 },
  { label: "HTML5 / CSS3", value: 85 },
  { label: "Java (OOP)", value: 90 },
  { label: "SQL (Schemas, Join)", value: 95 },
  { label : "Data Modeling & ETL Concepts", value: 75},
];

const experience = [
  {
    title: "Software Engineer",
    org: "Revature (Training / Projects)",
    range: "04/2025 - 07/2025",
    body:
      "Built Java + web projects, practiced API integration, debugging, and delivering features on a schedule.",
  },
  {
    title: "Customer-Facing Ops Roles",
    org: "UNIQLO / Universal (Guest Experience)",
    range: "02/2018 – 04/2024",
    body:
      "High-volume customer support, problem solving, and communication, skills I bring into product and front-end work.",
  },
];

const education = [
  {
    title: "B.A. Computer Science",
    org: "Florida International University (FIU)",
    range: "Completed 05/2025",
    body:
      "Coursework and projects across software engineering, data, and systems fundamentals.",
  },
];

export default function App() {
  return (
    <div className="site">
      {/* Sticky top nav */}
      <header className="topbar">
        <nav className="topnav" aria-label="Primary">
          <a href="#home" className="navlink">
            HOME
          </a>
          <a href="#about" className="navlink">
            ABOUT
          </a>
          <a href="#resume" className="navlink">
            RESUME
          </a>
          <a href="#projects" className="navlink">
            PROJECTS
          </a>
          <a href="#contact" className="navlink">
            CONTACT
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="heroInner">
          <p className="eyebrow">Hi there, thanks for visiting my website!</p>
          <h1 className="heroTitle">Diego Nieves-Alvarado</h1>
          <p className="heroSub">Front-End Developer | Software Engineer</p>

          <div className="iconRow" aria-label="Social links">
            <a className="iconBtn" href="https://github.com/diegonievesalvarado/cragscore.git" target="_blank" rel="noreferrer">
              GH
            </a>
            <a className="iconBtn" href="https://www.linkedin.com/in/diego-nieves-alvarado/" target="_blank" rel="noreferrer"
            aria-label="LinkedIn"
            >
              in
              
            </a>
            <a className="iconBtn" href="mailto:diegonieves98@gmail.com"> <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 13.065L2 6.5V18a1 1 0 001 1h18a1 1 0 001-1V6.5l-10 6.565z"/>
    <path d="M12 11L2 4h20l-10 7z"/>
  </svg>
</a>
          </div>

          <a className="downCue" href="#about" aria-label="Scroll to About">
            ⌄
          </a>
        </div>
      </section>

      {/* ABOUT (dark section with two columns + skill bars) */}
      <section id="about" className="section sectionDark">
        <div className="container">
          <div className="centerHead">
            <span className="sectionLabel">About</span>
            <h2 className="sectionTitle">Let me introduce myself.</h2>
          </div>

          <div className="twoCol">
            <div className="panel">
              <div className="aboutTop">
                <img className="avatar" src={portfolioHeadshot} alt="Diego Nieves-Alvarado" />
                <p className="muted">
                  I’m a Computer Science graduate (FIU) focused on building modern, polished
                  front-end experiences with React. I like clean UI, good structure, and shipping.
                </p>
              </div>

              <div className="miniGrid">
                <div>
                  <h3 className="kicker">Profile</h3>
                  <p className="muted">
                    Open to front-end, Data Engineer, and Software Engineer roles. Strong customer communication background + strong dev fundamentals.
                  </p>
                </div>
                <div>
                  <h3 className="kicker">Focus</h3>
                  <p className="muted">
                  Front-end experiences with React, plus engineering fundamentals: data modeling, SQL, and code that scales cleanly.
                  </p>
                </div>
              </div>

              <div className="ctaRow">
                <a className="btn" href="#contact">Hire Me</a>
                <a className="btn ghost" href="/Nieves.Diego (2).pdf">Download CV</a>
              </div>
            </div>

            <div className="panel">
              <h3 className="kicker">Skills</h3>
              <p className="muted">
                Highlights of technical skills.
              </p>

              <div className="bars">
                {skills.map((s) => (
                  <div key={s.label} className="bar">
                    <div className="barTop">
                      <span className="barLabel">{s.label}</span>
                      <span className="barPct">{s.value}%</span>
                    </div>
                    <div className="barTrack">
                      <div className="barFill" style={{ width: `${s.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESUME (light section with centered timeline) */}
      <section id="resume" className="section sectionLight">
        <div className="container">
          <div className="centerHead">
            <span className="sectionLabel">Resume</span>
            <h2 className="sectionTitle">More of my credentials.</h2>
            <p className="mutedDark">Work experience and education.</p>
          </div>

          <div className="timeline">
            <h3 className="timelineHead">Work Experience</h3>
            {experience.map((x) => (
              <div key={x.title + x.org} className="tRow">
                <div className="tLeft">
                  <div className="tRole">{x.title}</div>
                  <div className="tRange">{x.range}</div>
                </div>

                <div className="tMid" aria-hidden="true">
                  <span className="tDot" />
                  <span className="tLine" />
                </div>

                <div className="tRight">
                  <div className="tOrg">{x.org}</div>
                  <p className="tBody">{x.body}</p>
                </div>
              </div>
            ))}

            <h3 className="timelineHead" style={{ marginTop: 36 }}>
              Education
            </h3>
            {education.map((x) => (
              <div key={x.title + x.org} className="tRow">
                <div className="tLeft">
                  <div className="tRole">{x.title}</div>
                  <div className="tRange">{x.range}</div>
                </div>

                <div className="tMid" aria-hidden="true">
                  <span className="tDot" />
                  <span className="tLine" />
                </div>

                <div className="tRight">
                  <div className="tOrg">{x.org}</div>
                  <p className="tBody">{x.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS (light section with grid like screenshot) */}
      <section id="projects" className="section sectionLight">
        <div className="container">
          <div className="centerHead">
            <span className="sectionLabel">Projects</span>
            <h2 className="sectionTitle">Check out my creations.</h2>
          </div>

          <div className="projGrid">
            <a className="projCard" href="https://cragscore.vercel.app" target="_blank" rel="noreferrer">
              <div className="projThumb">CragScore</div>
              <div className="projMeta">
                <div className="projName">CragScore</div>
                <div className="projDesc">React app • ratings • routing • local persistence</div>
              </div>
              
            </a>

            <a className="projCard" href="https://github.com/diegonievesalvarado/portfolio" target="_blank" rel="noreferrer">
              <div className="projThumb mutedThumb">Portfolio Website</div>
              <div className="projMeta">
                <div className="projName">Portfolio</div>
                <div className="projDesc">React-based portfolio showcasing production-grade UI, data-driven projects, and engineering-focused case studies.
                </div>
              </div>
            </a>

            <div className="projCard">
              <div className="projThumb mutedThumb">Screenshot</div>
              <div className="projMeta">
                <div className="projName">Placeholder</div>
                <div className="projDesc">Replace with real screenshots</div>
              </div>
            </div>

            <div className="projCard">
              <div className="projThumb mutedThumb">Screenshot</div>
              <div className="projMeta">
                <div className="projName">Placeholder</div>
                <div className="projDesc">Replace with real screenshots</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT (dark section with 3 columns) */}
      <section id="contact" className="section sectionDark">
        <div className="container">
          <div className="centerHead">
            <span className="sectionLabel">Contact</span>
            <h2 className="sectionTitle">I’d love to connect with you.</h2>
            <p className="muted">Reach out any time.</p>
          </div>

          <div className="contactGrid">
            <div className="contactCard">
              <div className="bigIcon">✈</div>
              <div className="contactHead">Where to find me</div>
              <div className="muted">Orlando, FL</div>
            </div>

            <div className="contactCard">
              <div className="bigIcon">✉</div>
              <div className="contactHead">Email me at</div>
              <a className="contactLink" href="mailto:diegonieves98@gmail.com">diegonieves98@gmail.com</a>
            </div>

            <div className="contactCard">
              <div className="bigIcon">in</div>
              <div className="contactHead">Let’s connect</div>
              <a
                className="contactLink"
                href="https://www.linkedin.com/in/diego-nieves-alvarado/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.linkedin.com/in/diego-nieves-alvarado/
              </a>
            </div>
          </div>

          <footer className="footerDark">
            © {new Date().getFullYear()} Diego Nieves-Alvarado
          </footer>

          <a className="toTop" href="#home" aria-label="Back to top">
            ^
          </a>
        </div>
      </section>
    </div>
  );
}