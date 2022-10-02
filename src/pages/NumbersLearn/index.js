import React, { useState } from "react";
import { Button } from "@mui/material";
import useSpeechSynthesis from "../../utils/useSpeechSynthesis";

const arr = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const NumbersLearn = () => {
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
    speak({ text: text });
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
      </div>
    </div>
  );
};

export default NumbersLearn;
