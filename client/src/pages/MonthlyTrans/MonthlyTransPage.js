import React from 'react'
import { useSelector } from 'react-redux';
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
  const state = useSelector((state) => ({
    auth: state.auth,
    data: state.data,
  }));

  console.log(state.data.transactions);

  // Group transactions on each category

  const categoryDailyData = {};

  // Group transactions on each category on month and then sum it all

  // Group transactions on each category on year and then some it all

  return (
    <div className={classes.root}>
      <Sidebar />
      <MonthlyTransList/>
    </div>
  );
}
