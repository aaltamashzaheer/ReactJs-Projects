import React, { useState } from "react";
import "./CounterInterface.css";

export default function CounterInterface(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  const [text, setText] = useState("Enter Your text here");
  return (
    <>
      <div className="wrapper">
        <label className="label">Word Counter</label>
        <textarea
          id="text-area"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <div className="buttons">
        <button 
       disabled={text.length===0} className="btn btn-success" onClick={handleUpClick}>
          Convert to Upper Case
        </button>
        <button disabled={text.length===0} className="btn btn-success" onClick={handleDownClick}>
          Convert to Lower Case
        </button>
      </div>
      <div className="buttons">
        <button disabled={text.length===0} className="btn btn-success" onClick={handleCopy}>
          Copy Text to Clipboard
        </button>
        <button disabled={text.length===0} className="btn btn-success" onClick={handleExtraSpaces}>
          Remove Extraa Spaces
        </button>
      </div>
      <div className="buttons">
        <button disabled={text.length===0} className="btn btn-success" onClick={handleClearClick}>
          Clear Text in the Panel
        </button>
        
      </div>
      <div
        className={`container text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h3>Your Text Summary </h3>
        <p>
          {text.split(" ").filter((text)=>{
            return text.length!==0
          }).length} words and {text.length} characters{" "}
        </p>
        <p>
          {" "}
          {0.25 * text.split("/\s+/").filter(()=>{
            return text.length!==0})
            .length} seconds and{" "}
          {0.00416666666 * text.split("/\s+/").filter(()=>{
            return text.length!==0})
            .length} Minutes{" "}
        </p>
        <h4 className="h4heading">Preview: </h4>
        <p className="text-preview">{text.length>0?text:"Nothing to preview. Kindly Enter Something Before: "}</p>
      </div>
    </>
  );
}
