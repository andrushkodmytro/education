import React from "react";
import { Link } from "react-router-dom";
import useStyle from "./styles";

export default function MathLevels() {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <div className={classes.elem}>
        <Link to="/math">{"1<2"}</Link>
      </div>
      <div className={classes.elem}>
        <Link to="/math"> {"1+2<2+2"}</Link>
      </div>
      <div className={classes.elem}>
        <Link to="/math/operations-level-1">{"1+2=3"}</Link>
      </div>
      <div className={classes.elem}>
        <Link to="/math/operations-level-2">{"19-17=2"}</Link>
      </div>
      <div className={classes.elem}>
        <Link to="/math/operations-level-3">{"5-9=-4"}</Link>
      </div>
      <div className={classes.elem}>
        <Link to="/math/operations-level-4">{"21-31=-10"}</Link>
      </div>
    </div>
  );
}
