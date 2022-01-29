import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Textform(props) {
  const [text, setText] = useState("");

  const Color = (theme, num) => {
    if (theme === "light" && num === 1) {
      return "black";
    } else {
      if (num === 2) {
        return "white";
      } else {
        return "#258e3c";
      }
    }
  };

  const BgColor = (theme, num) => {
    if (theme === "light" && num === 1) {
      return "rgb(244, 245, 255)";
    } else if (theme === "dark" && num === 2) {
      return "rgb(50,57,71)";
    } else {
      return "#100c08";
    }
  };

  const handleOnChange = (event) => {
    //     console.log("On change");
    setText(event.target.value);
  };

  const handleUpclick = () => {
    //     console.log("Uppercase was clicked");
    setText(text.toUpperCase());
    props.showAlert("success", "Text is converted to uppercase");
  };

  const handleLowclick = () => {
    //   console.log("Lowercase was clicked");
    setText(text.toLowerCase());
    props.showAlert("success", "Text is converted to lowercase");
  };

  const handleClsclick = () => {
    setText("");
    props.showAlert("success", "Text is Cleared!");
  };
  const handleCpyclick = () => {
    // let text = document.getElementById("myBox");
    // text.select();
    navigator.clipboard.writeText(text);
    props.showAlert("success", "Copied to Clipboard!");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("success", "Extra spaces removed!");
  };
  //Variables:-
  let numOfWords = text.split(/\s+/).filter((ele) => {
    return ele.length !== 0;
  }).length;
  let numOfChar = text.length;
  // if (numOfChar === 0) {
  //   numOfWords = 0;
  // }
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: BgColor(props.mode, props.num),

              // props.mode === "dark" ? "rgb(50,57,71)" : "rgb(244, 245, 255)", (ternery if statement)
              // color: props.mode === "dark" ? "white" : "black",
              //Don't use ternary operator for nested if statements,

              color: Color(props.mode, props.num),
              resize: "none",
            }}
            id="myBox"
            rows="11"
            placeholder={props.place}
          ></textarea>
        </div>

        <button
          disabled={text.length === 0}
          className={`btn btn-${props.btnColor}  mx-1 my-1`}
          onClick={handleUpclick}
        >
          Convert to uppercase
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${props.btnColor} mx-1 my-1`}
          onClick={handleLowclick}
        >
          Convert to lowercase
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${props.btnColor} mx-1 my-1`}
          onClick={handleCpyclick}
        >
          Copy
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${props.btnColor} mx-1 my-1`}
          onClick={handleExtraSpaces}
        >
          Remove extra spaces
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${props.btnColor} mx-1 my-1`}
          onClick={handleClsclick}
        >
          Clear
        </button>
      </div>

      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {numOfWords} words , {numOfChar} characters
        </p>
        <p>{0.008 * numOfWords} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
Textform.propTypes = {
  heading: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
};

Textform.defaultProps = {
  heading: "Enter the text",
  place: "Enter text here",
};
