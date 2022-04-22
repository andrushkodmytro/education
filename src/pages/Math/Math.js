import React, { useState } from "react";
import { Grid, Paper, Button } from "@mui/material";
import Row from "./Row/Row";
import clsx from "clsx";
import { Link } from "react-router-dom";
import useStyle from "./styles";

export default function Math({ count = 3, min = 0, max = 10 }) {
  const classes = useStyle();

  const [showResults, setShowResults] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(count);
  const [touchedCount, setTouchedCount] = useState(0);

  const reset = () => {
    setShowResults(false);
    setCorrectCount(0);
    setIncorrectCount(count);
    setTouchedCount(0);
  };
console.log(touchedCount, count)
  return (
    <>
      <Button variant='contained' color='secondary' to="/math" component={Link}>
        Назад
      </Button>

      <Paper style={{ padding: 24, backgroundColor: "##bfffc4" }}>
        <Grid container>
          {[...Array(count)].map((val, index) => {
            return (
              <Grid item xs={4} key={index}>
                <Row
                  min={min}
                  max={max}
                  showResults={showResults}
                  correctHandler={setCorrectCount}
                  incorrectHandler={setIncorrectCount}
                  setTouchedCount={setTouchedCount}
                />
              </Grid>
            );
          })}
        </Grid>

        <div className={classes.resultContainer}>
          <div className={clsx(classes.resultText, classes.successResultText)}>
            Правельних відповідей: <span>{showResults ? correctCount : 0}</span>
          </div>
          <div className={clsx(classes.resultText, classes.errorResultText)}>
            Не правельних відповідей:{" "}
            <span>{showResults ? incorrectCount : 0}</span>
          </div>
          <Button
            className={classes.resultBtn}
            variant="contained"
            disabled={touchedCount !== count}
            onClick={() => {
              if (showResults) {
                reset();
              } else {
                setShowResults(true);
              }
            }}
          >
            {showResults ? "Далі" : "Перевірити"}
          </Button>
        </div>
      </Paper>
    </>
  );
}
