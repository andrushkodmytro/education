import React, { useState, useEffect, useMemo } from "react";
import { Paper, Button } from "@mui/material";
import useSpeechSynthesis from "../../utils/useSpeechSynthesis";
import successSrc from "../../assets/audio/success.mp3";
import failureSrc from "../../assets/audio/failure.mp3";
import useStyles from "./styles";

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const successSound = new Audio(successSrc);
const failureSrcSound = new Audio(failureSrc);

const Days = ({ data: arr }) => {
  const classes = useStyles();
  const [index, setIndex] = useState(0);
  const data = arr[index];
  const randomizedArr = useMemo(
    () => shuffle([...data.value.split("")]),
    [data]
  );

  const { speak } = useSpeechSynthesis();
  const [word, setWord] = useState([]);
  const [hiddenLetters, setHiddenLetters] = useState([]);

  useEffect(() => {
    setWord(Array.from(data.value, () => ""));
  }, [data]);

  useEffect(() => {
    if (word.length && word.every((item) => !!item)) {
      // alert("Success");
    }
  }, [word]);

  useEffect(() => {
    setHiddenLetters(Array.from(randomizedArr, () => ""));
  }, [randomizedArr]);

  const prevHandler = () => {
    setIndex((prev) => {
      if (index > 0) {
        return --prev;
      }
      setIndex(arr.length - 1);

      return prev;
    });

    clearResults();
  };

  const nextHandler = () => {
    setIndex((prev) => {
      if (index < arr.length - 1) {
        return ++prev;
      }

      setIndex(0);

      return prev;
    });

    clearResults();
  };

  const spellHandler = () => {
    speak({ text: data.value });
  };

  const clearResults = () => {
    const res = document.querySelectorAll(".result-letters > div");
    const letterEls = Array.from(res || []);
    letterEls.map((el) => (el.innerHTML = ""));

    const res2 = document.querySelectorAll(".start-letters > div");
    const letterEls2 = Array.from(res2 || []);
    letterEls2.map((el) => el.classList.remove("hidden-letter"));
  };

  const onDragStart = (e) => {
    e.dataTransfer.setData("letter", e.target.dataset.letter);
    e.dataTransfer.setData("index", e.target.dataset.index);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e) => {
    const letter = e.dataTransfer.getData("letter");
    const index = e.dataTransfer.getData("index");

    failureSrcSound.pause();
    failureSrcSound.currentTime = 0;
    successSound.pause();
    successSound.currentTime = 0;

    if (e.target.dataset.letter === letter) {
      setWord((prev) => {
        const x = [...prev];
        x[e.target.dataset.index] = letter;
        return x;
      });

      setHiddenLetters((prev) => {
        const x = [...prev];
        x[index] = letter;
        return x;
      });

      successSound.play();
      return;
    }

    failureSrcSound.play();
  };

  return (
    <>
      <div>
        Timer:
        <div>Total: </div>
      </div>
      <Paper className={classes.paper}>
        <div className={classes.imgContainer}>
          <img src={data.src} alt={data.value} />
        </div>

        <div className={classes.spellBtnContainer}>
          <Button
            variant="contained"
            color="secondary"
            style={{ marginLeft: 30, marginRight: 30 }}
            onClick={spellHandler}
          >
            Spell
          </Button>
        </div>

        <div className={classes.letterContainer}>
          {randomizedArr.map((letter, index) => (
            <div
              key={index}
              id={`${letter}-${index}`}
              draggable="true"
              onDragStart={onDragStart}
              data-letter={letter}
              data-index={index}
              className={`${classes.letter} ${
                !!hiddenLetters[index] && "hidden-letter"
              }`}
              style={{
                backgroundColor: "lightgrey",
              }}
            >
              {letter}
            </div>
          ))}
        </div>
        <div className={`${classes.letterContainer} result-letters`}>
          {data.value.split("").map((letter, index) => (
            <div
              key={index}
              onDrop={onDrop}
              onDragOver={onDragOver}
              draggable="true"
              data-letter={letter}
              data-index={index}
              className={classes.letter}
            >
              {word[index]}
            </div>
          ))}
        </div>
        <div>
          <Button
            variant="contained"
            color="secondary"
            style={{ marginLeft: 30, marginRight: 30 }}
            onClick={prevHandler}
          >
            {"< Prev"}
          </Button>

          <Button
            variant="contained"
            color="secondary"
            style={{ marginLeft: 30, marginRight: 30 }}
            onClick={nextHandler}
          >
            {"Next >"}
          </Button>
        </div>
      </Paper>
    </>
  );
};

export default Days;
