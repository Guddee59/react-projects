

const Hero = ({go}) => {
    return (
   <section id="home" className="hero">
        <div className="hero-badge">
          <span className="hero-dot" /> Open to new opportunities
        </div>
        <h1 className="hero-name">Guddee Noudiyal</h1>
        <p className="hero-role">Frontend Developer · ReactJS &amp; Next.js</p>
        <p className="hero-desc">
          Crafting dynamic, performant web experiences with clean code and a dedicated work ethic. 5+ years of building things people actually use.
        </p>
        <div className="hero-actions">
          <button className="btn-glow" onClick={() => go("Contact")}>Get in Touch</button>
          <button className="btn-ghost" onClick={() => go("Experience")}>View Experience</button>
        </div>
        <div className="scroll-hint">
          <div className="scroll-line" />
          scroll
        </div>
      </section>
  );
};

export default Hero;