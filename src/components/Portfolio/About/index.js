import React from 'react'

export default function About() {

  return (
      <section id="about" className="section">
        <p className="section-tag fade-up">Introduction</p>
        <h2 className="section-h fade-up">About <span>Me</span></h2>
        <div className="about-grid fade-up">
          <div className="about-text">
            <p>I'm a frontend developer with <strong>5+ years of hands-on experience</strong> building dynamic web apps using ReactJS and Next.js. Self-motivated, reliable, and thrive under tight deadlines.</p>
            <p>I love taking complex requirements and turning them into clean, efficient UIs — from product pages and CRM dashboards to full cart systems. I keep up with modern frontend practices and industry trends.</p>
            <p>Beyond shipping features, I care about writing maintainable code and crafting experiences that users genuinely enjoy.</p>
          </div>
          <div className="about-cards">
            {[
              { num: "3.1+", lbl: "Years Experience" },
              { num: "2",    lbl: "Companies" },
              { num: "7+",   lbl: "Technologies" },
              { num: "78%",  lbl: "B.Sc Score" },
            ].map((c) => (
              <div key={c.lbl} className="acard">
                <div className="acard-num">{c.num}</div>
                <div className="acard-lbl">{c.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}
