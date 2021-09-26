import React, {useState} from 'react';

function Form(props) {
    const [text, setText] = useState("");
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText); 
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText); 
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    return (
<> 
  <div className="container">
  <h1>{props.heading}</h1>
  <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
  <button className="btn btn-primary" onClick={handleUpClick}>Uppercase</button>
  <button className="btn btn-primary mx-2" onClick={handleLoClick}>Lowercase</button>
  </div>
  </div>
  <div className="container my-3">
      <h2>Your text stats</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.08 * text.split(" ").length} minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
  </div>

     
</>

    )
}

export default Form;
