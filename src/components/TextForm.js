import React, { useState } from "react";

export default function TextForm(props) {
//   const [text, setText] = useState("Enter Text here");
  const [text, setText] = useState("");
 
  const handleuppercase= () => {
    // console.log("Uppercase was clicked"+ text)
    let newText = text.toUpperCase();
    setText(newText)
    props.showalert(": Converted to Uppercase","success")
  };

  const handlelowercase= () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showalert(": Converted to Lowercase","success")
  };

  const handleclear= () => {
    let newText = "";
    setText(newText)
    props.showalert(": All text Cleared","success")
  };

  // const handleEncrypt= () => {
  //   let arr = (text + "THIS IS ENCRYPTED TEXT")
  //   console.log(arr)
  //   setText(text)
  // };

  // const handleDecrypt= () => {
  
  // };
  const handlecopy= () => {
   var text= document.getElementById("mybox");
   text.select();
   navigator.clipboard.writeText(text.value);
   props.showalert(": TEXT COPIED","success")
};

  const handleonchange= (event) => {
    // console.log("Onchange")
    setText(event.target.value);
  };
  return (
    <>
    <div className="container " style={{color:props.mode ==='dark'?'white':'black'}}>
      <h1>
        {props.heading}
      </h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor:props.mode==='dark'?'#595959':'white', color:props.mode==='light'?'black':'white'}} id="mybox" rows="6"></textarea>
        <button className="btn btn-danger my-2" onClick={handleuppercase}>Convert to UpperCase</button>
        <button className="btn btn-warning my-2 mx-2" onClick={handlelowercase}>Convert to LowerCase</button>
        {/* <button className="btn btn-success my-2 " onClick={handleEncrypt}>Encrpyt </button> */}
        {/* <button className="btn btn-success my-2 mx-2" onClick={handleDecrypt}>Decrypt </button> */}
        <button className="btn btn-primary my-2 " onClick={handleclear}>Clear All </button>
        <button className="btn btn-primary my-2 mx-2  " onClick={handlecopy}>Copy</button>
      </div>
    </div>

    <div className="container " style={{color:props.mode ==='dark'?'white':'black'}}> 
        <h2>You text summary</h2>
        <p>{text.split(" ").length} words and {text.length} character</p>
        <p>{0.008*text.split(" ").length} minutes to read.</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}
