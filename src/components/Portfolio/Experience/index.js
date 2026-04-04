import React from 'react'

export default function Experience() {
const EXP = [
  {
    title: "Frontend Developer",
    co: "Newage Products Inc.",
    period: "Jan 2023 – Present",
    desc: "Building new pages in Next.js, implementing business logic across the website, developing dynamic product detail pages with complex data handling, and owning all cart functionality end-to-end.",
  },
  {
    title: "ReactJS Developer",
    co: "Homesfy Realty Ltd",
    period: "Nov 2020 – Jan 2023",
    desc: "Implemented features in a ReactJS CRM — product detail module with filtering logic, REST API integration. Also delivered static websites in HTML, CSS & JavaScript.",
  },
];
  return (
    <div>
       {/* EXPERIENCE */}
      <section id="experience" className="section" style={{paddingTop:0}}>
        <p className="section-tag fade-up">Career</p>
        <h2 className="section-h fade-up">Work <span>Experience</span></h2>
        <div className="exp-list">
          {EXP.map((e, i) => (
            <div key={i} className="exp-card fade-up">
              <div className="exp-top">
                <span className="exp-title">{e.title}</span>
                <span className="exp-badge">{e.period}</span>
              </div>
              <div className="exp-co">{e.co}</div>
              <div className="exp-desc">{e.desc}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
