import React, { useState } from "react";
import "./Textarea.css";
const Textarea = (props) => {
  const [text, setText] = useState("");

  const whiteSpace = (text) => {
    return (text.match(/\ /g) || []).length;
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpCLick = (event) => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLwCLick = (event) => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClCLick = (event) => {
    let newText = "";
    setText(newText);
  };

  const handleCpCLick = (event) => {
    navigator.clipboard.writeText(text);
  };

  const handleResCLick = (event) => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  return (
    <div>
      <textarea
        placeholder="Write your text here ..."
        rows="20"
        name="comment[text]"
        id="comment_text"
        cols="40"
        className="ui-autocomplete-input "
        role="textbox"
        aria-autocomplete="list"
        autoComplete="new-password"
        aria-haspopup="true"
        value={text}
        onChange={handleOnChange}
      ></textarea>
      <section
        className={`btnClass ${props.mode === "dark" ? "darkMode" : ""}`}
      >
        <p>
          <button
            className="btn btn-outline-primary btn-lg mx-3 "
            onClick={handleUpCLick}
          >
            Convert to Uppercase
          </button>
          <button
            className="btn btn-outline-primary btn-lg mx-3"
            onClick={handleLwCLick}
          >
            Convert to Lowercase
          </button>
          <button
            className="btn btn-outline-primary btn-lg mx-3"
            onClick={handleResCLick}
          >
            Remove extra spaces
          </button>
          <button
            className="btn btn-outline-success btn-lg mx-3"
            onClick={handleCpCLick}
          >
            Copy Text
          </button>
          <button
            className="btn btn-outline-danger btn-lg mx-3"
            onClick={handleClCLick}
          >
            Clear Text
          </button>
        </p>
      </section>
      {text.length === 0 || text.charAt(0) === " " ? (
        <div>
          <section className="btnClass">
            <p>
              <strong>Text Summary</strong>
            </p>
            <p className="summary">
              {
                text.split(/\s+/).filter((element) => {
                  return element.length !== 0;
                }).length
              }{" "}
              words and {text.length - whiteSpace(text)} characters
            </p>
          </section>
        </div>
      ) : (
        <div>
          <section className="btnClass">
            <p>
              <strong>Text Summary</strong>
            </p>
            <p className="summary">
              {
                text.split(/\s+/).filter((element) => {
                  return element.length !== 0;
                }).length
              }{" "}
              words and {text.length} characters
            </p>
          </section>
        </div>
      )}
    </div>
  );
};

export default Textarea;
