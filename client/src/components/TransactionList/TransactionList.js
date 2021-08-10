import React, { useState } from "react";
import "../../index.css";
import TransactionListItem from "./TransactionListItem";
import {
  makeStyles,
  Container,
  Grid,
  Typography,
  Divider,
  Tabs,
  Tab,
} from "@material-ui/core";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
} from "@material-ui/lab";
import { useSelector } from "react-redux";
import TransactionForm from "../TransactionForm/TransactionForm";
import AddTransactionBtn from "../TransactionForm/AddTransactionBtn";
import Balance from "./Balance";
import { motion } from "framer-motion";
import { isSooner } from "../../utils/transactionFunc";
import BudgetItem from "./BudgetItem";

const textVariants = {
  hidden: {
    opacity: 0,
    y: -100,
    x: -20,
  },
  visible: {
    opacity: 1,
    y: -33,
    x: -20,
  },
};

const useStyles = makeStyles((theme) => ({
  tabs: {
    marginTop: "-4%",
    marginBottom: 10,
    marginLeft: "3%",
  },
  tab: {
    fontSize: "1.2em",
    fontWeight: "bold",
    minWidth: "90px",
  },
  timeline: {
    padding: 0,
  },
  timelineItem: {
    "&::before": {
      padding: 0,
      flex: 0,
    },
  },
  timelineItemOpposite: {
    paddingTop: 0,
    flexGrow: 0.15,
    height: "10%",
    paddingLeft: 0,
  }
}));

export default function TransactionList() {
  const classes = useStyles();
  const state = useSelector((state) => ({
    auth: state.auth,
    data: state.data,
  }));

  const [open, setOpen] = useState(false);
  const [formId, setFormId] = useState("");
  const [type, setType] = useState("expense");

  // open action of form
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

  const data = state.data.transactions
    .filter((item) => item.type == type)
    .sort((item1, item2) => isSooner(item1.spentAt, item2.spentAt));

  return (
    <Container maxWidth="lg" disableGutters={false}>
      <motion.h2
        variants={textVariants}
        initial="hidden"
        animate="visible"
        transition={{ type: "spring", delay: 0.5, stiffness: 300 }}
      >
        Welcome back, {state.auth.user.name}
      </motion.h2>
      <Balance />
      <Tabs
        id="type"
        value={type}
        className={classes.tabs}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleTabChange}
      >
        <Tab className={classes.tab} label="Expense" value="expense" />
        <Tab className={classes.tab} label="Budget" value="budget" />
      </Tabs>
      {/* <Typography variant='h6' className="typo">List of Expense</Typography> */}
      {/* <Divider p={2}/> */}

      <Container className="scrollbar scrollbar-winter-neva">
        {type == "expense" ? (
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
              <TimelineItem key={item._id} className={classes.timelineItem}>
                <TimelineOppositeContent className={classes.timelineItemOpposite}>
                  <Typography variant="subtitle1" color="textSecondary">
                    {item.spentAt}
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  {id != data.length - 1 ? <TimelineConnector /> : <></>}
                </TimelineSeparator>
                <TimelineContent>
                  <BudgetItem item={item} handleClickOpen={handleClickOpen} />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        )}
      </Container>
      <Grid>
        <AddTransactionBtn handleClickOpen={handleClickOpen} />
        <TransactionForm
          open={open}
          handleClose={handleClose}
          id={formId}
          transactionType={type}
        />
      </Grid>
    </Container>
  );
}
