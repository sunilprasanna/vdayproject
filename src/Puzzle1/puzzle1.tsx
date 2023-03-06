import React from "react";
import { useNavigate } from "react-router-dom";
import Crossword from "@jaredreisinger/react-crossword";
import { Button } from "@mui/material";

const data = {
  across: {
    3: {
      clue: "See no evil, fear no evil",
      answer: "NOPE",
      row: 3,
      col: 3,
    },
    5: {
      clue: "Goblets and swords and bows",
      answer: "SCARBOROUGH",
      row: 5,
      col: 1,
    },
    6: {
      clue: "Shaking ground and changing lights",
      answer: "SEISMIQUE",
      row: 7,
      col: 0,
    },
  },
  down: {
    1: {
      clue: "Try again and again to no avail",
      answer: "BRAZOSBEND",
      row: 0,
      col: 1,
    },
    2: {
      clue: "First helping of hot soup",
      answer: "JINYA",
      row: 1,
      col: 3,
    },
    4: {
      clue: "Spice before the stars",
      answer: "CHILIS",
      row: 4,
      col: 11,
    },
  },
};

const Puzzle1 = () => {
  const navigate = useNavigate();

  const crosswordComplete = (complete: boolean) => {
    if (complete) {
      navigate("puzzle2");
    }
  };

  return (
    <>
      <p>This is Puzzle 1 - lets begin! </p>
      <Crossword data={data} onCrosswordComplete={crosswordComplete} />
      <Button>Click Me</Button>
    </>
  );
};

export default Puzzle1;
