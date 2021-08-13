import React, { useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "../../index.css";
import TransactionListItem from "../TransactionList/TransactionListItem";
import TransactionForm from "../TransactionForm/TransactionForm";
import TransactionTab from "../TransactionList/TransactionTab";
import Ranking from "./Ranking";
import {
  makeStyles,
  Container,
  Grid,
  Typography,
  IconButton,
  Card,
} from "@material-ui/core";
import { Timeline } from "@material-ui/lab";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useSelector } from "react-redux";
import {motion} from 'framer-motion';
import { Scrollbars } from 'react-custom-scrollbars';
import Balance from "../TransactionList/Balance";
import BudgetItem from "../TransactionList/BudgetItem";
import { isSooner, calculateBalance } from "../../utils/transactionFunc";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 12,
    },
    paper: {
        backgroundColor: theme.palette.secondary.light,
        borderRadius: 15,
        marginBottom: 10,
    },
    container: {
        backgroundColor: theme.palette.secondary.dark,
    },
    arrow:{
        marginLeft: 22,
    },
    timeline: {
      padding: 0,
    },
    list: {
      paddingTop: 30,
    },
}))

export default function MonthlyTransList({ dailyTransactions, monthlyTransactions, yearlyTransactions }) {
  const classes = useStyles();
  const state = useSelector((state) => ({
    auth: state.auth,
    errors: state.errors,
    data: state.data,
  }));

  const [value, setValue] = useState(moment());
  const [open, setOpen] = useState(false);
  const [formId, setFormId] = useState("");
  const [type, setType] = useState("expense");

  const handleClickOpen = (id) => {
    setOpen(true);
    setFormId(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // change tab action: expense and budget
  const handleTabChange = (event, newValue) => {
    setType(newValue);
  };

  function prevMonth() {
    return value.clone().subtract(1, "month");
  }
  function nextMonth() {
    return value.clone().add(1, "month");
  }

  const mon = `${value.format("MM")}-${value.format("YYYY")}`;

  // Filter transactions based on each month
  const monthData = state.data.transactions.filter(
    (transaction) => transaction.spentAt.slice(3, 10) === mon
  );
  const data = monthData
    .filter((item) => item.type === type)
    .sort((item1, item2) => isSooner(item1.spentAt, item2.spentAt));

  const balance = calculateBalance(monthData);

  return (
    <Container>
      <Grid container direction="row" alignItems="flex-start" spacing={5}>
        <Grid item container xs={11} lg={9} direction="column">
          <Grid item>
            <Balance expenseMoney={balance[1]} budgetMoney={balance[0]} />
          </Grid>
          <Grid
            item
            container
            xs='auto'
            direction="row"
            justifyContent="center"
            alignItems="center"
            className={classes.paper}
          >
            <Grid item xs={1} lg={1}>
              <IconButton
                onClick={() => {
                  setValue(prevMonth());
                }}
              >
                <ArrowBackIosIcon />
              </IconButton>
            </Grid>
            <Grid item container direction="column" alignItems="center" lg={10} xs={9}>
              <Grid item xs>
                <Typography variant="h6">{value.format("MMMM")}</Typography>
              </Grid>
              <Grid item xs>
                <Typography variant="body1">{value.format("YYYY")}</Typography>
              </Grid>
            </Grid>
            <Grid item xs className={classes.arrow}>
              <IconButton
                onClick={() => {
                  setValue(nextMonth());
                }}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </Grid>
          </Grid>
          <Grid item className={classes.list}>
            <TransactionTab
              transactionType={type}
              handleTabChange={handleTabChange}
            />
             <Scrollbars 
                style={{ height: 350 }} autoHide autoHideTimeout={1000} autoHideDuration={200}
              >
              {data.length > 0 ? (
                type === "expense" ? (
                  <Grid container spacing={1}>
                    {data.map((item) => (
                      <TransactionListItem
                        item={item}
                        key={item._id}
                        handleClickOpen={handleClickOpen}
                      />
                    ))}
                  </Grid>
                ) : (
                  <Timeline className={classes.timeline}>
                    {data.map((item, id) => (
                      <BudgetItem
                        item={item}
                        handleClickOpen={handleClickOpen}
                        id={id}
                        dataLength={data.length}
                      />
                    ))}
                  </Timeline>
                )
              ) : (
                <Typography justifyContent="center">
                  No transactions added
                </Typography>
              )}
            </Scrollbars>
          </Grid>
          <Grid item container justifyContent="flex-end">
            <Link to="/transaction" style={{ textDecoration: "none" }}>
              <Typography variant="h6" color="success">
                View all transactions
              </Typography>
            </Link>
          </Grid>
        </Grid>
        <Grid item lg={3} xs='auto'>
          <motion.h2>TOP EXPENSE</motion.h2>
          <Card height="100%">
            <Ranking 
              dailyTransactions={dailyTransactions} 
              monthlyTransactions={monthlyTransactions}
              yearlyTransactions={yearlyTransactions}
            />
          </Card>
        </Grid>
        <TransactionForm open={open} handleClose={handleClose} id={formId} />
      </Grid>
    </Container>
  );
}
