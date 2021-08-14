import React from "react";
import { makeStyles, IconButton, Typography, Grid } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles((theme) => ({
  arrow: {
    textAlign: "center",
  },
}));

const MonthBar = (props) => {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={1} className={classes.arrow}>
        <IconButton onClick={props.prevMonth}>
          <ArrowBackIosIcon />
        </IconButton>
      </Grid>
      <Grid item container direction="column" alignItems="center" xs={10}>
        <Grid item xs>
          <Typography variant="h6">{props.date.format("MMMM")}</Typography>
        </Grid>
        <Grid item xs>
          <Typography variant="body1">{props.date.format("YYYY")}</Typography>
        </Grid>
      </Grid>
      <Grid item xs={1} className={classes.arrow}>
        <IconButton onClick={props.nextMonth}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Grid>
    </>
  );
};

export default MonthBar;
