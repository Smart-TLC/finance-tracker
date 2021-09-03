import React, { useState } from 'react';
import moment from "moment";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Sidebar from '../../components/Sidebar/Sidebar';
import PieChartContainer from '../../components/Progress/PieChartContainer';
import CategoryDetails from '../../components/Progress/CategoryDetails';
import { useSelector } from 'react-redux';
import { Categories } from '../../types/categories';
import { Colors } from '../../types/categoriesColors';
import { costsSum, calculatePercentage, removeZeroValueTransactions, cateTransactions, filterMonthTransaction } from '../../utils/transactionFunc';
import MonthBar from '../../components/MonthlyTransList/MonthBar';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    marginLeft: 70,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  categoryDetails: {
    padding: 10,
  },
  pieChartContainer: {
    padding: 10
  },
  monthbar: {
    backgroundColor: "#6bbef9",
    borderRadius: 15,
    maxWidth: 600,
    marginBottom: 40,
  }
}));

export default function ProgressPage() {
  const classes = useStyles();
  const state = useSelector((state) => ({
    data: state.data,
  }))

  const [date, setDate] = useState(moment())
  function prevMonth() {
    setDate(date.clone().subtract(1, "month"));
  }
  function nextMonth() {
    setDate(date.clone().add(1, "month"));
  }

  let cateAllTransactions = [];
  cateAllTransactions = cateTransactions(filterMonthTransaction(state.data.transactions, date), Categories, Colors);
  cateAllTransactions = removeZeroValueTransactions(cateAllTransactions);
  const sumOfCosts = costsSum(cateAllTransactions);
  calculatePercentage(cateAllTransactions, sumOfCosts);
  
  return (
    <div className={classes.root}>
      <Sidebar />
      <Grid 
        container
        direction='row'
        justifyContent='space-between'
        alignItems="flex-start"
      >
        <Grid item lg={6} xs={12} className={classes.pieChartContainer}>
          <PieChartContainer cateAllTransactions={cateAllTransactions} sumOfCosts={sumOfCosts} />
        </Grid>
        <Grid item lg={6} xs={12} className={classes.categoryDetails}>
          <Grid item container xs={11} className={classes.monthbar} justifyContent="center" alignItems="center">
            <MonthBar date={date} prevMonth={prevMonth} nextMonth={nextMonth} />
          </Grid>
          <CategoryDetails cateAllTransactions={cateAllTransactions} sumOfCosts={sumOfCosts} /> 
        </Grid>
      </Grid>
    </div>
  );
}
