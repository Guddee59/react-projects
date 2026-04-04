const Contact = () => {
  return (
     <section id="contact" className="section" style={{paddingTop:0}}>
        <div className="contact-box fade-up">
          <p className="section-tag" style={{marginBottom:"0.75rem"}}>Say Hello</p>
          <h2 className="contact-h">
            Let's Work{" "}
            <span style={{background:"linear-gradient(135deg,var(--primary2),var(--cyan))", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent"}}>
              Together
            </span>
          </h2>
          <p className="contact-sub">
            I'm open to frontend opportunities — full-time roles or freelance projects. Let's build something great together.
          </p>
          <div className="contact-links">
            <a href="mailto:guddeenoudiyal5@gmail.com" className="contact-pill">✉ guddeenoudiyal5@gmail.com</a>
            <a href="tel:+919004727971" className="contact-pill">📞 +91 9004727971</a>
          </div>
        </div>
      </section>
  );
};

export default Contact;