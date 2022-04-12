import React, { useState } from "react";
import { Grid, Paper, Button } from "@mui/material";
import Row from "./Row/Row";
import clsx from "clsx";
import useStyle from "./styles";

const count = 3;

export default function Math() {
  const classes = useStyle();

  const [showResults, setShowResults] = useState();
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(count);
  const [touchedCount, setTouchedCount] = useState(0);
  console.log(incorrectCount);
  return (
    <Paper style={{ padding: 24, backgroundColor: "##bfffc4" }}>
      <Grid container>
        {[...Array(count)].map((val, index) => {
          return (
            <Grid item xs={4} key={index}>
              <Row
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
            setShowResults(true);
          }}
        >
          {showResults ? "Далі" : "Перевірити"}
        </Button>
      </div>
    </Paper>
  );
}
