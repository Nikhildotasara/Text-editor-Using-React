import React ,{useState} from 'react'
export default function TextForm(props) {
    const [text,setText]=useState("")

    const handleUpClick=()=>{
        let changedText=text.toUpperCase();
        setText(changedText)
    }
    const handleLowClick=()=>{
        let changedText=text.toLowerCase();
        setText(changedText)
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }

    const extractEmail=()=>{
      for(let i=0;i<text.length;i++){
        if(text[i]==="@"){
          let x=i;
          while(text[x]!==" " && x>0){
            x--;
          }
          x=x+1;
          let extractedEmail="";
          while(text[x]!==" " && x<text.length){
            extractedEmail=extractedEmail+text[x];
            x++;
          }
          return extractedEmail;
        }
      }
    }

    const copyText=()=>{
      if(text.length===0){
        return;
      }
      navigator.clipboard.writeText(text);      
    }
  return (
    <>
    
    <div className='container '>
        <h1 className={`text-${props.mode==="light"?'dark':'light'}`}>{props.heading}</h1>
      <div className="mb-3" >
    <textarea className="form-control" id="myBox" onChange={handleOnChange} value={text} rows="12"></textarea>
  </div>
  <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
  <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
  <button className="btn btn-primary mx-2" onClick={extractEmail}>Extract Email</button>
  <button className="btn btn-primary mx-2" onClick={copyText}>Copy Text</button>
      
    </div>

    <div className='container my-5'>
        <h1 className={`text-${props.mode==="light"?'dark':'light'}`}>The summary of text here</h1>
        <p className={`text-${props.mode==="light"?'dark':'light'}`}>Your text consisted {text.split(" ").length} words and {text.length} letters</p>
    </div>

    <div className='container'>
      <h1 className={`text-${props.mode==="light"?'dark':'light'}`}>Preview</h1>
      <p className={`text-${props.mode==="light"?'dark':'light'}`}>{text}</p>
    </div>

    </>
  )
}
