// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import { useState } from 'react';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {
  const [mode, setmode] = useState('light')

  const togglemode =()=>{
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = 'grey'
      showalert(": Dark mode enabled","success")
      // document.title = 'title change'; //changing title dynamically
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showalert(": Dark mode disabled","success")
    }
  }
  const [alert, setalert] = useState(null)

  const showalert = (message,type) =>{
    setalert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setalert(null);
    },900)
  }
  return (
   <>
    {/* <Navbar title="TitleONE" navbaritemone="Services" career="Jobs"/> */}
    {/* <Router> */}
    <Navbar title='kuchBhi.com' career="About" navbaritemone="Home" mode={mode} togglemode={togglemode}  />
    <Alert Alert={alert}/>
    
    <div className="container">  
    {/* <Routes> */}
          {/* <Route path="/about" element={<About/>}/> */}
          {/* <Route path="/" element={<TextForm showalert={showalert} heading="Enter Your Text" mode={mode}/>}/>  */}
          <TextForm showalert={showalert} heading="Enter Your Text" mode={mode}/>
    {/* </Routes> */}
    </div>
    {/* </Router> */}
   </> 
  );
}

export default App;
