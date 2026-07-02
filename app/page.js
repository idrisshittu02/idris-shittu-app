export default function Home() {
  const skills = [
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Crafting intuitive user interfaces and seamless experiences for web and mobile products.',
    },
    {
      icon: '🔬',
      title: 'UX Research',
      description: 'Conducting user research, analyzing insights, and translating findings into actionable design decisions.',
    },
    {
      icon: '📐',
      title: 'Design Systems',
      description: 'Building scalable component libraries and consistent design patterns using auto-layout best practices.',
    },
    {
      icon: '⚙️',
      title: 'DevOps & Automation',
      description: 'Exploring CI/CD pipelines, GitHub Actions, and automated deployment workflows via Vercel.',
    },
    {
      icon: '💳',
      title: 'Cards Page Design',
      description: 'Designed the ZojaPay cards page layout — applying modern UI principles for a clean, structured experience.',
    },
    {
      icon: '🚀',
      title: 'Product Thinking',
      description: 'Collaborating cross-functionally within the Product team to ship user-centered digital experiences.',
    },
  ]

  return (
    <>
      {/* HEADER */}
      <header>
        <div className="logo">
          IDR<span>i</span>S-Sh<span>I</span>tt<span>U</span>
        </div>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="badge">UI/UX Designer · ZojaPay</div>
        <h1>
          IDR<span className="highlight">i</span>S&#8209;Sh<span className="highlight">I</span>tt<span className="highlight">U</span>
        </h1>
        <p>
          Building thoughtful digital experiences — from user research to pixel-perfect interfaces.
          Currently revamping ZojaPay.
        </p>
      </section>

      {/* SKILLS / CARDS */}
      <div className="section" id="skills">
        <h2 className="section-title">What I Do</h2>
        <div className="cards-grid">
          {skills.map((skill, i) => (
            <div className="card" key={i}>
              <div className="card-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <p>Built by <strong>Idris Shittu</strong> · Product Team, UI/UX Design · Reports to Bryan Adamu</p>
      </footer>
    </>
  )
}
