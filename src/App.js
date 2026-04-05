//  S.M.A.R.T 
// Specific Measurable Aligent Time Bound

import { ThemeContext } from "context/theme";
import Header from "../src/components/Header";
import Products from "./components/Products";
import Carts from "./components/Carts";
import { Route, Routes } from "react-router-dom";
import Hero from "./components/Portfolio/Hero";
import Skills from "./components/Portfolio/Skills";
import Contact from "./components/Portfolio/Contact";
import { useEffect, useState } from "react";
import About from "./components/Portfolio/About";
import Experience from "./components/Portfolio/Experience";
import Education from "./components/Portfolio/Education";


function App() {
    /* fade-up on scroll */
  useEffect(() => {
    const els = document.querySelectorAll(".fade-up");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const go = (id) => {
    setActive(id);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="App">
      <ThemeContext.Provider value={'dark'} >
           {/* bg orbs */}
      <div className="orb orb1" />
      <div className="orb orb2" />
      <div className="orb orb3" />
        <Header go={go}/>
        <Hero  go={go}/>
        <About/>
        <Skills  go={go}/>
        <Experience/>
        <Education/>
        <Contact/>
        <Routes>
        <Route path='/products'element={<Products/>}/>
        <Route path='/cart'element={<Carts/>}/>
      </Routes>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
