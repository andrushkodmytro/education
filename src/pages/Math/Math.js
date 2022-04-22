import React, { useState, useEffect, useCallback } from "react";
import {
  Grid,
  Paper,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
} from "@mui/material";
import Row from "./Row/Row";
import clsx from "clsx";
import { Link } from "react-router-dom";
import useStyle from "./styles";

// min and max included
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function MathComponent({ count = 3, min = 0, max = 10 }) {
  const classes = useStyle();

  const [showResults, setShowResults] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [showDialog, setShowDialog] = useState(false);

  const [data, setData] = useState([]);
  const [answers, setAnswers] = useState([]);

  const reset = () => {
    setData(initData());
    setAnswers(initAnswers());
    setShowResults(false);
    setCorrectCount(0);
  };

  const initData = useCallback(() => {
    const initData = [...Array(count)].map(() => {
      const operant = Math.random() < 0.5 ? "-" : "+";
      let a = randomIntFromInterval(min, max);
      let b = randomIntFromInterval(min, max);

      if (a < b) {
        a = a ^ b;
        b = a ^ b;
        a = a ^ b;
      }

      const res = operant === "-" ? a - b : a + b;

      return {
        a,
        b,
        operant,
        res,
      };
    });

    return initData;
  }, [count, min, max]);

  const initAnswers = useCallback(() => {
    const initData = [...Array(count)].map(() => "");

    return initData;
  }, [count]);

  useEffect(() => {
    setData(initData());
    setAnswers(initAnswers());
  }, [initData, initAnswers]);

  const hasAllAnswers = answers.every((item) => item !== "");
  const touchedRowsLength = answers.filter((item) => item !== "").length;

  return (
    <>
      <Paper style={{ padding: 24, backgroundColor: "#bfffc4" }}>
        <Grid container>
          {data.map((row, index) => {
            return (
              <Grid item xs={4} key={index}>
                <Row
                  index={index}
                  row={row}
                  answer={answers[index]}
                  setAnswers={setAnswers}
                  showResults={showResults}
                  setCorrectCount={setCorrectCount}
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
            <span>{showResults ? touchedRowsLength - correctCount : 0}</span>
          </div>
          <Button
            style={{ marginLeft: "auto" }}
            variant="contained"
            color="secondary"
            onClick={() => {
              setShowDialog(true);
            }}
          >
            Назад
          </Button>
          <Button
            className={classes.resultBtn}
            variant="contained"
            disabled={!hasAllAnswers}
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
      <Dialog open={showDialog}>
        <DialogContent>Ви дійсно бажаєте завершити завдання?</DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="primary"
            to="/math"
            component={Link}
          >
            Так, завершити
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              setShowDialog(false);
            }}
          >
            Ні, продовжити
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default React.memo(MathComponent);
