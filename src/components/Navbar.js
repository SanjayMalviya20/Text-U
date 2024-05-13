import React from 'react'  //rfc
import PropTypes from 'prop-types'   //impt
// import { Link } from 'react-router-dom'     //import link must important if u use router 
export default function Navbar(props) {
 let light = "light"
 let dark = "dark"
let mystyle ={
  color:props.mode === light ? dark:light
}
  return (
   
  
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    {/* <Link className="navbar-brand" to="/">{props.title}</Link>       <==use Link for react router  */}
   <a className="navbar-brand" href="/">{props.title}</a>       
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          {/* <Link className="nav-link" to="/">{props.home} <span className="sr-only">(current)</span></Link> */}
          <a className="nav-link" href="/">{props.home} <span className="sr-only">(current)</span></a>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li> */}
       
      </ul>
      {/* <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success hello my-2 my-sm-0" type="submit">Search</button>
      </form> */}
      <div className={`custom-control custom-switch text-${mystyle.color}`}>    {/*ternary opratores use */}
  <input type="checkbox" className="custom-control-input" id="customSwitch1"/>
  <label className="custom-control-label"  onClick={props.toggleMode} htmlFor="customSwitch1">Enable {props.mode===light ?dark:light } Mode</label>
</div>
    </div>
  </nav>  
 
  )
}

Navbar.prototype ={title:PropTypes.string,home:PropTypes.string}            // props kaisa hai uske according uski value set kar sakte hai jaise no. aur string 

// Navbar.defaultProps = {
//     home:"Home"                                    //props ki default value set kar sakte hai
// }