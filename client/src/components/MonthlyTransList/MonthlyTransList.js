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
  Card,
} from "@material-ui/core";
import { Timeline } from "@material-ui/lab";
import { useSelector } from "react-redux";
import Balance from "../TransactionList/Balance";
import { motion } from "framer-motion";
import BudgetItem from "../TransactionList/BudgetItem";
import { isSooner, calculateBalance, filterMonthTransaction } from "../../utils/transactionFunc";
import MonthBar from "./MonthBar";
import { filter } from "lodash";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 12,
  },
  paper: {
    marginLeft: 25,
    backgroundColor: theme.palette.secondary.light,
    borderRadius: 15,
    maxWidth: 888,
    marginBottom: 40,
  },
  container: {
    backgroundColor: theme.palette.secondary.dark,
  },
  timeline: {
    padding: 0,
  },
}));

export default function MonthlyTransList({
  dailyTransactions,
  monthlyTransactions,
  yearlyTransactions,
}) {
  const classes = useStyles();
  const state = useSelector((state) => ({
    data: state.data,
  }));

  const [date, setDate] = useState(moment());
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
  const handleTabChange = (event, newType) => {
    setType(newType);
  };

  function prevMonth() {
    setDate(date.clone().subtract(1, "month"));
  }
  function nextMonth() {
    setDate(date.clone().add(1, "month"));
  }

  const monthData = filterMonthTransaction(state.data.transactions, date)
  const data = monthData
    .filter((item) => item.type === type)
    .sort((item1, item2) => isSooner(item1.spentAt, item2.spentAt));

  const balance = calculateBalance(monthData);

  return (
    <Container disableGutters={true}>
      <Grid container direction="row" alignItems="flex-start" spacing={4}>
        <Grid item container xs={9} direction="column">
          <Grid item>
            <Balance expenseMoney={balance[1]} budgetMoney={balance[0]} />
          </Grid>
          <Grid
            item
            container
            xs={9}
            direction="row"
            justifyContent="center"
            alignItems="center"
            className={classes.paper}
          >
            <MonthBar date={date} prevMonth={prevMonth} nextMonth={nextMonth} />
          </Grid>
          <Grid item>
            <TransactionTab
              transactionType={type}
              handleTabChange={handleTabChange}
            />
            <Container className="scrollbar scrollbar-primary">
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
            </Container>
          </Grid>
          <Grid item container justifyContent="flex-end">
            <Link to="/transaction" style={{ textDecoration: "none" }}>
              <Typography variant="h6" color="success">
                View all transactions
              </Typography>
            </Link>
          </Grid>
        </Grid>
        <Grid item xs={3}>
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
