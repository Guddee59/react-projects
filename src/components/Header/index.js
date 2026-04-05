import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const MainContaier=styled.div`
header{
  .header-container{
    display:flex;
    position:absolute;
    align-items:center;
    justify-content: space-between;
    width:100%;
    .logo img{
    width:80px;
    height:80px;
    }
    ul{
      display:flex; 
      list-style:none;
      gap:20px;
    }
    .nav{
      display:flex;
      justify-content:center;
      align-items:center;
      gap:20px;
    }
}
}`

 function Header({go,active,setActive}) {

 const NAV = ["Home","About","Skills","Experience","Education","Contact"];
   /* active nav highlight */
   useEffect(() => {
     const sections = NAV.map((n) => document.getElementById(n.toLowerCase())).filter(Boolean);
     const obs = new IntersectionObserver(
       (entries) => entries.forEach((e) => {
         if (e.isIntersecting) setActive(e.target.id.charAt(0).toUpperCase() + e.target.id.slice(1));
       }),
       { threshold: 0.45 }
     );
     sections.forEach((s) => obs.observe(s));
     return () => obs.disconnect();
   }, [ NAV]);
    return (
    <MainContaier>
     <header className="header">
       {/* NAV */}
      <nav className="nav">
        <div className="nav-logo">Guddee.</div>
        <div className="nav-links">
          {NAV.map((n) => (
            <button key={n} className={`nav-btn${active === n ? " active" : ""}`} onClick={() => go(n)}>{n}</button>
          ))}
        </div>
      </nav>
    </header>
    </MainContaier>
  )
}

export default Header;
