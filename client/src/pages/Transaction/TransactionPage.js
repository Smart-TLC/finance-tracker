import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from '../../components/Sidebar/Sidebar';
import TransactionList from "../../components/TransactionList/TransactionList";

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

export default function TransactionPage() {
  const classes = useStyles();

    return (
        <div className={classes.root}>
            <Sidebar />
            <TransactionList />
        </div>
  );
}
