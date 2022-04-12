import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.elem}>
        <Link to="/math">Math</Link>
      </div>
      <div className={classes.elem}>Logic</div>
      <div className={classes.elem}>Math</div>
      <div className={classes.elem}>Logic</div>
    </div>
  );
}
