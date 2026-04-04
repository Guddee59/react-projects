import { useEffect, useRef, useState } from "react";

function SkillBar({ name, pct }) {
  const ref = useRef(null);
  const [w, setW] = useState(0);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setW(pct); obs.disconnect(); } }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [pct]);
  return (
    <div className="skill-row" ref={ref}>
      <span className="skill-lbl">{name}</span>
      <div className="skill-track"><div className="skill-fill" style={{ width: `${w}%` }} /></div>
      <span className="skill-pct">{pct}%</span>
    </div>
  );
}

const Skills = () => {
 const SKILLS = [
  { name: "HTML & CSS",    pct: 90 },
  { name: "JavaScript",   pct: 90 },
  { name: "React JS",     pct: 90 },
  { name: "Next JS",      pct: 90 },
  { name: "Redux",        pct: 75 },
  { name: "REST APIs",    pct: 80 },
  { name: "SQL",          pct: 80 },
];
    const TOOLS = ["GitHub","VS Code","Jira"];

  return (
   <section id="skills" className="section" style={{paddingTop:0}}>
        <p className="section-tag fade-up">What I Know</p>
        <h2 className="section-h fade-up">Skills &amp; <span>Expertise</span></h2>
        <div className="skill-rows fade-up">
          {SKILLS.map((s) => <SkillBar key={s.name} name={s.name} pct={s.pct} />)}
        </div>
        <div className="tools-section fade-up">
          <div className="tools-lbl">Tools &amp; Software</div>
          <div className="tools-wrap">
            {TOOLS.map((t) => <div key={t} className="tool-tag">⬡ {t}</div>)}
          </div>
        </div>
      </section>
  );
};

export default Skills;