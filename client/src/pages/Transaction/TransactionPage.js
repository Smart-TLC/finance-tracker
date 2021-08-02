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
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function TransactionPage() {
  const classes = useStyles();

    return (
        <div className={classes.root}>
            <Sidebar />
            <TransactionList className={classes.content}/>
        </div>
  );
}
