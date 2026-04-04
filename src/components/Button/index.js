import React from 'react';
import styled from 'styled-components';


const MainContaier=styled.div`
button{
outline:none;
background-color: #2563EB;
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  :hover {
  background-color: #1D4ED8;
   }
}
   `

export default function Button({ text, onClick }) {
  return (
    <MainContaier>
      <button onClick={onClick}>{text}</button>
    </MainContaier>
  )
}
