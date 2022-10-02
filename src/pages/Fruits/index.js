import React, { useState } from "react";
import { Button } from "@mui/material";
import useSpeechSynthesis from "../../utils/useSpeechSynthesis";

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

const Days = () => {
  const [index, setIndex] = useState(0);
  const data = arr[index];
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
    speak({ text: data.value });
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
            width: 300,
            height: 300,
            overflow: "hidden",
            borderRadius: 12,
          }}
        >
          <img
            src={data.src}
            alt={data.value}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
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

export default Days;
