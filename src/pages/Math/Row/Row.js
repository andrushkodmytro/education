import React, { useState, useEffect, useCallback } from "react";
import useStyle from "./styles";

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const Row = ({
  showResults,
  correctHandler,
  incorrectHandler,
  setTouchedCount,
}) => {
  const classes = useStyle();

  const [inputVal, setInputVal] = useState("");
  const [state, setState] = useState(null);
  const [a, setA] = useState();
  const [b, setB] = useState();
  const [operand, setOperand] = useState();

  const onChange = (e) => {
    setInputVal(e.target.value);

    if (inputVal === "") {
      setTouchedCount((prev) => ++prev);
    }
  };

  const onBlur = () => {
    resultHandler();
  };

  useEffect(() => {
    setOperand(Math.random() < 0.5 ? "-" : "+");
    const a = randomIntFromInterval(0, 10);
    const b = randomIntFromInterval(0, 10);
    if (a > b) {
      setA(a);
      setB(b);
    } else {
      setA(b);
      setB(a);
    }

    return () => {};
  }, []);

  const resultHandler = useCallback(() => {
    let res;
    if (operand === "-") {
      res = a - b;
    } else {
      res = a + b;
    }

    if (res.toString() === inputVal) {
      setState("success");

      correctHandler((prev) => ++prev);
      incorrectHandler((prev) => --prev);
    } else {
      setState("error");

      correctHandler((prev) => --prev);
      incorrectHandler((prev) => ++prev);
    }
  }, [a, b, operand, inputVal, correctHandler, incorrectHandler]);

  const res = operand === "-" ? a - b : a + b;

  return (
    <div className={classes.row}>
      <span className={classes.operand}>{a}</span>
      <span className={classes.operator}>{operand}</span>
      <span className={classes.operand}>{b}</span>
      <span className={classes.operator}>=</span>
      <input
        className={classes.input}
        maxLength="3"
        disabled={showResults}
        value={inputVal}
        onChange={onChange}
        onBlur={onBlur}
      />

      {showResults && state === "success" && (
        <span className={classes.success}> {res}</span>
      )}
      {showResults && state === "error" && (
        <span className={classes.error}>{res}</span>
      )}
    </div>
  );
};

export default React.memo(Row);
