import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Sidebar from '../../components/Sidebar/Sidebar';
import PieChartContainer from '../../components/Progress/PieChartContainer';
import CategoryDetails from '../../components/Progress/CategoryDetails';
import { useSelector } from 'react-redux';
import { Categories } from '../../types/categories';
import { Colors } from '../../types/categoriesColors';

const useStyles = makeStyles((theme) => ({
  root: {
    //...theme.typography.button,
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
  }
}));

export default function ProgressPage() {
  const classes = useStyles();
  const state = useSelector((state) => ({
    auth: state.auth,
    errors: state.errors,
    data: state.data,
  }))

  let cateAllTransactions = [];
  for (const key in Categories) {
    let CateData = state.data.transactions.filter((transaction) => transaction.category === Categories[key]);
    let sum = 0;
    for (let i = 0; i < CateData.length; i++) {
      sum += CateData[i].amount
    }
    let cateObject = {
      title: Categories[key],
      value: sum,
      color: Colors[key]
    }
    cateAllTransactions.push(cateObject);
  }

  cateAllTransactions = cateAllTransactions.filter((transaction) => transaction.value !== 0)
  
  let sumOfCosts = 0;
  for (let i = 0; i < cateAllTransactions.length; i ++) {
    sumOfCosts += cateAllTransactions[i].value;
  }

  for (let i = 0; i < cateAllTransactions.length; i++) {
    cateAllTransactions[i].percentage = (cateAllTransactions[i].value / sumOfCosts).toFixed(2);
  }

  return (
    <div className={classes.root}>
      <Sidebar />
      <Grid 
        container xs={12}
        direction='row'
        justifyContent='space-between'
        alignItems="flex-start"
      >
        <Grid item container lg={6} xs={12} className={classes.pieChartContainer}>
          <PieChartContainer cateAllTransactions={cateAllTransactions} sumOfCosts={sumOfCosts} />
        </Grid>
        <Grid item lg={6} xs={12} className={classes.categoryDetails}>
          <CategoryDetails cateAllTransactions={cateAllTransactions} sumOfCosts={sumOfCosts} /> 
        </Grid>
      </Grid>
    </div>
  );
}
