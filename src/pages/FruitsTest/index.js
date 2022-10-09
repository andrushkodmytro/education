import React, { useState, useEffect, useMemo, useRef } from "react";
import { Paper, Button } from "@mui/material";
import useSpeechSynthesis from "../../utils/useSpeechSynthesis";
import successSrc from "../../assets/audio/success.mp3";
import failureSrc from "../../assets/audio/failure.mp3";
import useStyles from "./styles";

const arr = [
  {
    value: "apple",
    src: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    value: "banana",
    src: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1539&q=80",
  },
  {
    value: "apricot",
    src: "https://images.unsplash.com/photo-1624835020714-f9521e3e1421?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    value: "peach",
    src: "https://images.unsplash.com/photo-1642372849486-f88b963cb734?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    value: "kiwi",
    src: "https://images.unsplash.com/photo-1609889132698-1625aefc7f6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80",
  },
  {
    value: "cherry",
    src: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    value: "melon",
    src: "https://images.unsplash.com/photo-1563288525-8f1ee0f874a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    value: "watermelon",
    src: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    value: "lemon",
    src: "https://images.unsplash.com/photo-1582287014914-1db836ccf0f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    value: "orange",
    src: "https://images.unsplash.com/photo-1560607162-26b0344e6943?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
  },
  {
    value: "strawberry",
    src: "https://images.unsplash.com/photo-1583070161414-7314e034d18b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    value: "mandarin",
    src: "https://images.unsplash.com/photo-1482012792084-a0c3725f289f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    value: "lime",
    src: "https://images.unsplash.com/photo-1622957461168-202e611c8077?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    value: "pineapple",
    src: "https://images.unsplash.com/photo-1611873101970-dfa544c23494?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    value: "pomegranate",
    src: "https://images.unsplash.com/photo-1541179328528-b0b1b4ff1ef3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1138&q=80",
  },
  {
    value: "coconut",
    src: "https://images.unsplash.com/photo-1580984969071-a8da5656c2fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    value: "pear",
    src: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
  {
    value: "plum",
    src: "https://images.unsplash.com/photo-1603408209093-cd3c9af497d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    value: "grape",
    src: "https://images.unsplash.com/photo-1603186741833-4a7cf699a8eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    value: "raspberry",
    src: "https://images.unsplash.com/photo-1624813743954-d32f24df6cf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    value: "blackberry",
    src: "https://images.unsplash.com/photo-1615218370629-da07db3571a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    value: "blueberry",
    src: "https://images.unsplash.com/photo-1597474561103-0773c378a1fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },

  {
    value: "nut",
    src: " https://images.unsplash.com/photo-1600189020840-e9918c25269d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  { value: "", src: "" },
  { value: "", src: "" },
  { value: "", src: "" },
];

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

const Days = () => {
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

  const [timer, setTimer] = useState(60);

  // const timerRef = useRef(null);

  // useEffect(() => {
  //   if
  //   timerRef.current = setInterval(() => {

  //   }, 1000);

  //   return () => {
  //     timerRef.current.clearTimeout();
  //   };
  // }, []);

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

  // useEffect(() => {
  //   if (hiddenLetters.length && hiddenLetters.every((item) => !!item)) {

  //   }
  // }, [hiddenLetters]);

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
