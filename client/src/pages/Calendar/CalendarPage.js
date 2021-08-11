import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Sidebar from '../../components/Sidebar/Sidebar';
import CalendarContainer from '../../components/Calendar/CalendarContainer';

const useStyles = makeStyles((theme) => ({
  root: {
    //...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    marginLeft: 70,
  },

}));

export default function CalendarPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Sidebar />
      <Grid 
        container 
        xs={12}
        direction="low"
        justifyContent = "space-between"
        alignItems="flex-start"
      >
        <CalendarContainer />
      </Grid>
    </div>
  )
}