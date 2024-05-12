// import logo from './logo.svg';
// import './App.css';
// const ele = "jsX";
// let user ={
//   name:"sanjay",
//   roll:"<b>sanjay</b>"    //can,t work this type because react sentaize external js
// }

import   { useState } from "react";

import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
// import About from "./components/Abouts";
import Alert from "./Alert";

import React from "react";
// import {
//   BrowserRouter as Router,
//   // Switch,
//   Route,
//   Routes,
//   // Link,
// } from "react-router-dom";


function App() {
  const [mode,setMode] =useState(`light`)
  const [alert,setAlert] =useState(null)
 let showAlert =(message,type)=>{
setAlert({
  msg:message,      
  type:type
})
setTimeout(() => {
  setAlert(null)
}, 1500);
 }

  const toggleMode =()=>{
    if(mode === "light" ){
      setMode("dark")
    showAlert("Dark Mode Enable","warning")
document.body.style.backgroundColor = "grey"
document.title ="Text-U:Dark Mode"

    }
    else{
      document.body.style.backgroundColor = "white"
  showAlert("Dark Mode Disable","danger")
      setMode("light")
      document.title ="Text-U:Light Mode"
    }

  }
  return (  
   // <></> {/* jsx fragment  */}   
   /*using curly brackret for js */
   // /*closing tag must important */
  // /*  <<<<===   this is jsx  */
 <>                                                                         
   {/* <Router> */}
       <Navbar title="Text-U" home="Home" mode ={mode}  toggleMode ={toggleMode}/>                    {/* passing props   */   }   {/*  props and component   */   }
    
       {/* Error===> react-refresh-runtime.development.js:329 Uncaught Error: [Textform] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment></React.Fragment>  Solution ==> use   element={componentName/} in route*/   } 
       <Alert alert ={alert}/>
       <div className="container">
        {/* <Routes> */}
          {/* <Route exact path="/" element ={<comoponentNAme/>}> */}

          <Textform heading="Enter the text to analiyze below " showAlert={showAlert} toggleMode ={toggleMode}/>

          {/* </Route>    */}
          {/* <Route exact path="/about" element={<About/>}></Route>                                
          </Routes> */}
        </div>    
        {/* </Router> */}
    </>                         
  );

  }

export default App;

/* /* <> */         //<<==   //jsx fragment */}
// {/* <h1 id='hello'>hello world</h1>

// <div className="App">
//     <header className="App-header">                               {/* <<<<===   this is jsx  */}      
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>   
//         Edit <code>src/App.js</code> and save to reload.
//       </p>                                                                              {/*using curly brackret for js */}
  
                                                                            /*closing tag must important */
/* //       <a */
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
     
//       >
//         Learn React with Sanju
//       </a>
   
/* //     </header> */
  // </div> */}
// </>
