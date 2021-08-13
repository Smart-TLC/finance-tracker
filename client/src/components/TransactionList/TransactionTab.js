import React from "react";
import { makeStyles, Tabs, Tab } from "@material-ui/core";

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
}));

const TransactionTab = (props) => {
  const classes = useStyles();
  return (
    <Tabs
      value={props.transactionType}
      className={classes.tabs}
      indicatorColor="primary"
      textColor="primary"
      onChange={props.handleTabChange}
    >
      <Tab className={classes.tab} label="Expense" value="expense" />
      <Tab className={classes.tab} label="Budget" value="budget" />
    </Tabs>
  );
};

export default TransactionTab;
