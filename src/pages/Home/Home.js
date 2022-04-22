import React from "react";
import { Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import useStyles from "./styles";

export default function Home() {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.container}>
      <Grid item xs={3}>
        <Button
          className={classes.elem}
          variant="contained"
          color="secondary"
          to="/math"
          component={Link}
        >
          Math
        </Button>
      </Grid>
      <Grid item xs={3} >
        <Button
          className={classes.elem}
          variant="contained"
          color="secondary"
          to="/math"
          component={Link}
        >
          logic
        </Button>
      </Grid>
      <Grid item xs={3} >
        <Button
          className={classes.elem}
          variant="contained"
          color="secondary"
          to="/math"
          component={Link}
        >
          ABC
        </Button>
      </Grid>
      <Grid item xs={3} >
        <Button
          className={classes.elem}
          variant="contained"
          color="secondary"
          to="/math"
          component={Link}
        >
          Animals
        </Button>
      </Grid>
    </Grid>
  );
}
