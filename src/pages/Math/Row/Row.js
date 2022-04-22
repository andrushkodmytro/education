import React from "react";
import useStyle from "./styles";

const Row = ({
  index,
  row,
  answer,
  setAnswers,
  showResults,
  setCorrectCount,
}) => {
  const classes = useStyle();

  const onChange = (e) => {
    if (+e.target.value === row.res) {
      setCorrectCount((prev) => ++prev);
    }

    if (row.res === +answer && +e.target.value !== row.res) {
      setCorrectCount((prev) => --prev);
    }

    setAnswers((prev) => {
      const newData = [...prev];
      newData[index] = e.target.value;
      return newData;
    });
  };

  return (
    <div className={classes.row}>
      <span className={classes.operand}>{row.a}</span>
      <span className={classes.operator}>{row.operant}</span>
      <span className={classes.operand}>{row.b}</span>
      <span className={classes.operator}>=</span>
      <input
        className={classes.input}
        maxLength="3"
        disabled={showResults}
        value={answer}
        onChange={onChange}
      />

      {showResults && answer !== "" && +answer === +row.res && (
        <span className={classes.success}> {row.res}</span>
      )}

      {showResults && (answer === "" || +answer !== row.res) && (
        <span className={classes.error}>{row.res}</span>
      )}
    </div>
  );
};

export default React.memo(Row);
