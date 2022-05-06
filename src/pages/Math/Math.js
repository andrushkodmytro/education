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
import { Link, useParams } from "react-router-dom";
import { updateStore } from "../../utils/store";
import useStyle from "./styles";

// min and max included
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const countInit = 3;
const minInit = 0;
const multiples = 5;

function MathComponent() {
  const classes = useStyle();

  const { levelId } = useParams();

  const count = countInit;
  const min = minInit;
  const max = levelId * multiples;

  const [showResults, setShowResults] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [showDialog, setShowDialog] = useState(false);

  const [data, setData] = useState([]);
  const [answers, setAnswers] = useState([]);

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

  const reset = () => {
    setData(initData());
    setAnswers(initAnswers());
    setShowResults(false);
    setCorrectCount(0);
  };

  const hasAllAnswers = answers.every((item) => item !== "");
  const touchedRowsLength = answers.filter((item) => item !== "").length;

  const saveData = () => {
    const data = {
      date: new Date().toString(),
      duration: 35,
      correct: correctCount || 0,
      incorrect: touchedRowsLength - correctCount || 0,
    };

    updateStore({ data, levelId });
  };

  return (
    <>
      <Paper>
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
            variant="outlined"
            color="primary"
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
                saveData();
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
            style={{ marginRight: 16 }}
            variant="contained"
            color="primary"
            to="/math"
            component={Link}
          >
            Завершити
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              setShowDialog(false);
            }}
          >
            Продовжити
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default React.memo(MathComponent);
