import React from "react";
import { Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";

import useStyles from "./styles";

export default function English() {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.container}>
      <Grid item xs={3}>
        <Button
          className={classes.elem}
          variant="contained"
          color="secondary"
          to="/english/alphabet/learn"
          component={Link}
        >
          Alphabet learning
        </Button>
      </Grid>
      {/* <Grid item xs={3} >
        <Button
          className={classes.elem}
          variant="contained"
          color="secondary"
          to="/english/alphabet/test"
          component={Link}
        >
          Alphabet checking
        </Button>
      </Grid> */}
      <Grid item xs={3} >
        <Button
          className={classes.elem}
          variant="contained"
          color="secondary"
          to="/english/numbers/learn"
          component={Link}
        >
          Numbers
        </Button>
      </Grid>
      <Grid item xs={3} >
        <Button
          className={classes.elem}
          variant="contained"
          color="secondary"
          to="/english/days/learn"
          component={Link}
        >
          Days
        </Button>
      </Grid>

      <Grid item xs={3} >
        <Button
          className={classes.elem}
          variant="contained"
          color="secondary"
          to="/english/fruits/learn"
          component={Link}
        >
          Fruits
        </Button>
      </Grid>
    </Grid>
  );
}
