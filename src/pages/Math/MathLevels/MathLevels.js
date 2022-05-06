import React from "react";
import { Card, CardActionArea, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import useStyle from "./styles";

export default function MathLevels() {
  const classes = useStyle();
  return (
    <>
      <Typography variant="h1" className={classes.title}>
        Виберіть завдання і рівень
      </Typography>
      <div className={classes.container}>
        <Card className={classes.elem}>
          <CardActionArea component={Link} to="/math/operations/1">
            {"1+2=3"}
          </CardActionArea>
        </Card>
        <Card className={classes.elem}>
          <CardActionArea component={Link} to="/math/operations/2">
            {"19-17=2"}
          </CardActionArea>
        </Card>
        <Card className={classes.elem}>
          <CardActionArea component={Link} to="/math/operations/3">
            {"28-15=13"}
          </CardActionArea>
        </Card>
        <Card className={classes.elem}>
          <CardActionArea component={Link} to="/math/operations/4">
            {"38-29=9"}
          </CardActionArea>
        </Card>
      </div>
    </>
  );
}
