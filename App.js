import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar'; 
import TextForm from './components/TextForm'
import React  from 'react';



function App() {
  const[mode,setMode]=useState("light");

  const toggle=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="grey";
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white";
    }
  }
  return (
    <>
    <Navbar  about="About US" mode={mode} toggle={toggle}></Navbar>
    <div className="container">

    <TextForm mode={mode}  heading="Enter your text here"></TextForm>
    
    </div>
    
    </>
  );
}

export default App;
