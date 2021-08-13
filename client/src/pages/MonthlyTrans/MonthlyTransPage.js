import React from 'react'
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from '../../components/Sidebar/Sidebar';
import MonthlyTransList from '../../components/MonthlyTransList/MonthlyTransList';
import { sortTransactions } from '../../utils/transactionFunc';

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

  const dailyTransactions = sortTransactions(state.data.transactions)
    .slice(0, 7).filter((transaction) => transaction.category !== "")
    .filter((transaction) => transaction.spentAt.split("-")[0] === (new Date()).getDate().toString());

  const currentMonth = (new Date()).getMonth() + 1;
  const monthString = currentMonth < 10 ? `0${currentMonth.toString()}` : currentMonth.toString()

  const monthlyTransactions = sortTransactions(state.data.transactions)
  .slice(0, 7).filter((transaction) => transaction.category !== "")
  .filter((transaction) => transaction.spentAt.split("-")[1] === monthString);

  const yearlyTransactions = sortTransactions(state.data.transactions)
  .slice(0, 7).filter((transaction) => transaction.category !== "")
  .filter((transaction) => transaction.spentAt.split("-")[2] === (new Date()).getFullYear().toString());

  return (
    <div className={classes.root}>
      <Sidebar />
      <MonthlyTransList 
        dailyTransactions={dailyTransactions} 
        monthlyTransactions={monthlyTransactions} 
        yearlyTransactions={yearlyTransactions}
      />
    </div>
  );
}
