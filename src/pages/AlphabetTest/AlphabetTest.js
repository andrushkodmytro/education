import React, { useState } from "react";
import { Button } from "@mui/material";
import useSpeechSynthesis from "../../utils/useSpeechSynthesis";
import useSpeechRecognition from "../../utils/useSpeechRecognition";

const arr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const grammar =
  "#JSGF V1.0; grammar alphabet; public <alphabet> = a | b | c | d | e | f | g | h | i | j | k | l | m | n | o | p | q | r | s | t | u | v | w | x | y | z ;";

let list = "";
if (window) {
  const SpeechGrammarList =
    window.SpeechGrammarList || window.webkitSpeechGrammarList;
  list = new SpeechGrammarList();
  list.addFromString(grammar, 1);
}

const AlphabetTest = () => {
  const [index, setIndex] = useState(0);
  const text = arr[index];
  const { speak } = useSpeechSynthesis();

  const prevHandler = () => {
    setIndex((prev) => {
      if (index > 0) {
        return --prev;
      }
      setIndex(arr.length - 1);

      return prev;
    });
  };

  const nextHandler = () => {
    setIndex((prev) => {
      if (index < arr.length - 1) {
        return ++prev;
      }

      setIndex(0);

      return prev;
    });
  };

  const spellHandler = () => {
    speak({ text });
  };

  const [value, setValue] = useState("");
  const [blocked, setBlocked] = useState(false);

  const onEnd = () => {
    // You could do something here after listening has finished
  };

  const onResult = (result) => {
    setValue(result);
  };

  const onError = (event) => {
    if (event.error === "not-allowed") {
      setBlocked(true);
    }
  };

  const { listen, listening, stop, supported } = useSpeechRecognition({
    onResult,
    onEnd,
    onError,
  });

  const toggle = listening
    ? stop
    : () => {
        setBlocked(false);
        listen({ lang: "en-US", });
      };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "500px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          outline: "1px solid red",
        }}
      >
        <div
          style={{
            fontSize: "300px",
            display: "flex",
            justifyContent: "center",
            textTransform: "capitalize",
          }}
        >
          {text}
        </div>

        <div style={{ marginBottom: 20 }}>
          <Button
            variant="contained"
            color="secondary"
            style={{ marginLeft: 30, marginRight: 30 }}
            onClick={spellHandler}
          >
            spell
          </Button>
        </div>
        <div>
          <Button
            variant="contained"
            color="secondary"
            style={{ marginLeft: 30, marginRight: 30 }}
            onClick={prevHandler}
          >
            {"<"}
          </Button>

          <Button
            variant="contained"
            color="secondary"
            style={{ marginLeft: 30, marginRight: 30 }}
            onClick={nextHandler}
          >
            {">"}
          </Button>
        </div>

        <div>
          <textarea
            id="transcript"
            name="transcript"
            placeholder="Waiting to take notes ..."
            value={value}
            rows={3}
            disabled
          />
          <button disabled={blocked} type="button" onClick={toggle}>
            {listening ? "Stop" : "Listen"}
          </button>
          {blocked && (
            <p style={{ color: "red" }}>
              The microphone is blocked for this site in your browser.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlphabetTest;
