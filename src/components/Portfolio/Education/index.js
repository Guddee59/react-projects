import React from 'react'

export default function Education() {
const EDU = [
  { deg: "Bachelor of Computer Science",  school: "Tilak College of Science and Commerce", year: "2018", score: "78.09%" },
  { deg: "Higher Secondary Certificate",  school: "S.D.V College",                         year: "2015", score: "67.15%" },
  { deg: "Secondary School Certificate",  school: "Shardha Vidaya Mandir",                 year: "2013", score: "84.85%" },
];
  return (
    <div>
    <section id="education" className="section" style={{paddingTop:0}}>
        <p className="section-tag fade-up">Academic</p>
        <h2 className="section-h fade-up"><span>Education</span></h2>
        <div className="edu-list">
          {EDU.map((e, i) => (
            <div key={i} className="edu-card fade-up">
              <div>
                <div className="edu-deg">{e.deg}</div>
                <div className="edu-school">{e.school}</div>
              </div>
              <div className="edu-right">
                <div className="edu-yr">Class of {e.year}</div>
                <div className="edu-score">{e.score}</div>
              </div>
            </div>
          ))}
        </div>
    </section>
    </div>
  )
}
