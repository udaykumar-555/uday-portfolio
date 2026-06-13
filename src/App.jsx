import heroImg from './assets/hero.png'
import './App.css'

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

const signalCards = [
  {
    number: '1',
    kicker: 'Profile',
    title: 'Resume story',
    copy: 'Clear, fast, and built around the work you want recruiters to notice first.',
  },
  {
    number: '2',
    kicker: 'Projects',
    title: 'Proof of skill',
    copy: 'Featured builds with crisp outcomes, stacks, and visible product thinking.',
  },
  {
    number: '3',
    kicker: 'Contact',
    title: 'Easy next step',
    copy: 'Direct links for hiring teams, collaborators, and interview follow-ups.',
  },
]

const projects = [
  {
    id: '01',
    title: 'Portfolio Refresh',
    type: 'React / Vite',
    copy: 'A bright single-page profile built for resume traffic, quick scanning, and recruiter follow-up.',
    metric: 'Fast profile read',
    color: 'red',
  },
  {
    id: '02',
    title: 'E-Commerce Storefront',
    type: 'UI Engineering',
    copy: 'Responsive product browsing, clear category cards, and checkout-friendly interface patterns.',
    metric: 'Shop-ready UI',
    color: 'yellow',
  },
  {
    id: '03',
    title: 'Auth Workflow',
    type: 'Frontend Logic',
    copy: 'Sign up and sign in flows with practical form states, validation feedback, and tidy routing.',
    metric: 'Clean user flow',
    color: 'green',
  },
  {
    id: '04',
    title: 'Game Prototype',
    type: 'Interactive Web',
    copy: 'Keyboard-driven browser gameplay with motion, score feedback, and replayable loops.',
    metric: 'Playful polish',
    color: 'blue',
  },
]

const skills = [
  'React',
  'JavaScript',
  'HTML',
  'CSS',
  'Vite',
  'Responsive UI',
  'Git',
  'APIs',
  'Accessibility',
  'Performance',
]

const resumeHighlights = [
  'Frontend developer focused on polished user interfaces',
  'Comfortable turning rough ideas into working React experiences',
  'Strong attention to layout, responsiveness, and visual hierarchy',
  'Interested in internship, freelance, and junior developer opportunities',
]

const contactLinks = [
  { label: 'Email', href: 'mailto:uk1277733@gmail.com', value: 'uk1277733@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/udaykumar-555', value: 'github.com/udaykumar-555' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/uday-sampangi-2815a4205', value: 'linkedin.com/in/uday-sampangi-2815a4205' },
]

function Marquee({ children }) {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {children}
        {children}
        {children}
      </div>
    </div>
  )
}

function App() {
  return (
    <main className="site-shell">
      <Marquee>
        <span>Available for roles</span>
        <span>React developer</span>
        <span>javascript developer</span>
        <span>HTML5</span>
        <span>CSS3</span>
        <span>Git</span>
        <span>Git Hub</span>
        <span>Tailwind css</span>
        <span>Vite</span>
        <span>Node js</span>
        <span>portfolio</span>
      </Marquee>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Uday portfolio home">
          <span className="brand__mark">U</span>
          <span>Uday</span>
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Portfolio</p>
          <h1>
            <span>Uday</span>
            <span>builds</span>
            <span>web work</span>
          </h1>
          <p className="hero-intro">
            A bright, recruiter-friendly portfolio for showing frontend projects,
            practical skills, and the kind of product polish that belongs on a resume.
          </p>

          <div className="hero-actions" aria-label="Portfolio actions">
            <a className="button button--primary" href="#work">
              View work
            </a>
            <a className="button button--secondary" href="#contact">
              Contact
            </a>
          </div>
        </div>

        <div className="hero-art" aria-label="Layered portfolio visual">
          <img src={heroImg} alt="" />
          <span className="code-chip code-chip--top">React</span>
          <span className="code-chip code-chip--left">UI</span>
          <span className="code-chip code-chip--right">CV</span>
        </div>
      </section>

      <section className="signal-strip" aria-label="Portfolio strengths">
        {signalCards.map((card) => (
          <article className="signal-card" key={card.number}>
            <span className="signal-card__number">{card.number}</span>
            <p>{card.kicker}</p>
            <h2>{card.title}</h2>
            <span>{card.copy}</span>
          </article>
        ))}
      </section>

      <section className="about-section" id="about">
        <div>
          <p className="section-kicker">About Uday</p>
          <h2>Frontend profile with a bold first impression.</h2>
        </div>
        <p>
          I build modern web pages and interfaces with React, JavaScript, HTML,
          and CSS. This portfolio is shaped like a punchy storefront: quick to
          scan, visually memorable, and focused on helping hiring teams understand
          what I can make.
        </p>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <p className="section-kicker">Selected work</p>
          <h2>Projects with flavor, structure, and proof.</h2>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project-card project-card--${project.color}`} key={project.id}>
              <div className="project-card__top">
                <span>{project.id}</span>
                <span>{project.type}</span>
              </div>
              <div className="project-card__visual" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.copy}</p>
              <strong>{project.metric}</strong>
            </article>
          ))}
        </div>
      </section>

      <Marquee>
        <span>Clean layout</span>
        <span>Sharp projects</span>
        <span>clear component structure</span>
        <span>well-maintained UI</span>
      </Marquee>

      <section className="skills-section" id="skills">
        <div className="section-heading">
          <p className="section-kicker">Skills shelf</p>
          <h2>Tools and strengths ready for the profile.</h2>
        </div>

        <div className="skills-grid" aria-label="Technical skills">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="resume-section" aria-label="Resume highlights">
        <div>
          <p className="section-kicker">Resume signal</p>
          <h2>What this page should make obvious.</h2>
        </div>
        <ul>
          {resumeHighlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <footer className="contact-section" id="contact">
        <div className="contact-copy">
          <p className="section-kicker">Contact</p>
          <h2>Ready for the next conversation.</h2>
        </div>

        <div className="contact-links">
          {contactLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              <span>{link.label}</span>
              <strong>{link.value}</strong>
            </a>
          ))}
        </div>
      </footer>
    </main>
  )
}

export default App
