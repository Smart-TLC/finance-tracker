import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from '../../components/Sidebar/Sidebar';
import MonthlyTransList from '../../components/MonthlyTransList/MonthlyTransList';

const useStyles = makeStyles((theme) => ({
  root: {
    //...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    marginLeft: 75,
  },
  title: {
    color: "secondary",
  },
}));

export default function MonthlyTransPage() {
  const classes = useStyles();

    return (
        <div className={classes.root}>
            <Sidebar />
            <MonthlyTransList/>
        </div>
  );
}
