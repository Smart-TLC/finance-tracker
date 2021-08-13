import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Sidebar from '../../components/Sidebar/Sidebar';
import PieChartContainer from '../../components/Progress/PieChartContainer';
import CategoryDetails from '../../components/Progress/CategoryDetails';
import { useSelector } from 'react-redux';
import { Categories } from '../../types/categories';
import { Colors } from '../../types/categoriesColors';
import { costsSum, calculatePercentage, removeZeroValueTransactions, cateTransactions } from '../../utils/transactionFunc';

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
  cateAllTransactions = cateTransactions(state.data.transactions, Categories, Colors);
  cateAllTransactions = removeZeroValueTransactions(cateAllTransactions);
  const sumOfCosts = costsSum(cateAllTransactions);
  calculatePercentage(cateAllTransactions, sumOfCosts);

  console.log(cateAllTransactions);
  
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
