import React, { useState } from 'react'
//useState is hook   
//  hooks se  witout class banaye class ke feature  use kar sakte he

export default function Textform(props) {


  function handleupClick() {
    console.log("click" + text);
    let newtext = text.toUpperCase()
    setText(newtext);
    props.showAlert("Uppercase", "danger")
    document.title ="Text-U:Uppercase"

  }
  function handlelowClick() {
    // console.log("click" + text);
    let newtext = text.toLowerCase()
    setText(newtext);
        props.showAlert("lowerercase", "warning")
        document.title ="Text-U:Lowerercase"
  }

  function valueChange(e) {
    // console.log("on change");
    // console.log(e.target);
    setText(e.target.value)
    // props.showAlert("lowerercase", "success")


  }


  function handleclearClick() {
    // console.log(document.getElementById("mybox").value)
    document.getElementById("mybox").value = " ";
    props.showAlert("Clear all text", "dark")
    document.title ="Text-U:Clear"
  }

  function handleboldClick() {

    if (document.getElementById("mybox").style.fontWeight !== "900") {
      document.getElementById("mybox").style.fontWeight = "900"

    }
    else {
      document.getElementById("mybox").style.fontWeight = "normal"
    }

  }

  function handlefstyleClick() {
    if (document.getElementById("mybox").style.fontFamily !== "monospace") {
      document.getElementById("mybox").style.fontFamily = "monospace"
    }
    else {
      document.getElementById("mybox").style.fontFamily = "normal"
    }

  }

  function handledarkClick() {
    if (document.getElementById("mybox").style.backgroundColor !== "black") {

      document.getElementById("mybox").style.backgroundColor = "black"
      document.getElementById("mybox").style.color = "white"
    }
    else {
      document.getElementById("mybox").style.backgroundColor = "white"
      document.getElementById("mybox").style.color = "black"

    }
  }

  function handlecopyClick() {
    let text = document.getElementById("mybox")
    text.select()
    //  text.setselectionRange(0,9999);
    navigator.clipboard.writeText(text.value)
  }

  function handlespacelick() {
    let newtext = text.split(/[ ]+/)
    setText(newtext.join(" "))
  }
  const [text, setText] = useState("");    //declare new state variable ,text is variable  ,settext use for change value of text varialble


  return (
    <>
      <div className='container'>
        <h1  className="text-center">{props.heading}-{/*{text}*/}</h1>
        <div className="form-group">
          <textarea  className="form-control" value={text} onChange={valueChange} id="mybox" rows="10" style={{backgroundColor : props.toggleMode === "light"? "grey" :"light"}}></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleupClick}>Convert to Uppercase</button>
        <button className="btn btn-warning mx-1" onClick={handlelowClick}>Convert to Lowerrcase</button>
        <button className="btn btn-danger mx-1" onClick={handleclearClick}>Clear all Text</button>
        <button className="btn btn-success mx-1" onClick={handleboldClick}>Bold to Text</button>
        <button className="btn btn-success mx-1" onClick={handlefstyleClick}>Change Font Style</button>
        <button className="btn btn-dark mx-1" onClick={handledarkClick}>Change to Darkmode</button>
        <button className="btn btn-danger mx-1" onClick={handlecopyClick}>Copy text</button>
        <button className="btn btn-warning mx-1 my-3" onClick={handlespacelick}>Remove spaces</button>
      </div>
      <div className="container my-2">
        <h2>Your text summary</h2>
        <p>{text.trim().split(" ").length} Word  and {text.trim().length} Character</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text:"Enter Text For Preview" }</p>
      </div>
    </>
  )
}
