import React, { useEffect } from "react";
import { makeStyles, Typography, Card, CardContent} from "@material-ui/core";
import Sidebar from "../../components/Sidebar/Sidebar";
import Form02 from "../../components/TransactionForm/Form02";

import { getTransactions, deleteTransaction, updateTransaction } from "../../actions/transactionAction";
import { useDispatch, useSelector } from "react-redux";

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
  const dispatch = useDispatch();
  const state = useSelector((state) => ({
    auth: state.auth,
    errors: state.errors,
    data: state.data,
  }));

  console.log(state);

  // load user transactions data at the beginning
  useEffect(() => {
    dispatch(getTransactions(state.auth.user.id));
  }, []);

  return (
    <div className={classes.root}>
      <Sidebar />
      <Typography variant="h3" className={classes.title}>
        Transaction Page
      </Typography>
      <Form02 />
      {/* Sua UI phan nay nhe 
        Giu cai key={item._id} va ham onclick cua delete button nhe !
      */}
      <div>
          {state.data.transactions.map((item) => {
            return (
              <Card key={item._id}> 
                <CardContent>
                  <h4>Name: {item.name}</h4>
                  <p>Note: {item.note}</p>
                  <p>Amount: {item.amount}</p>
                  <p>CreatedAt: {item.createdAt}</p>
                  <p>Category: {item.category}</p>
                  <p>Owner: {item.owner}</p>
                  <button onClick={(e) => {
                    e.preventDefault();
                    dispatch(deleteTransaction(item._id))
                  }}>Delete</button>
                  <button>Change</button> 
                </CardContent>
              </Card>
            );
          })}
        </div>
    </div>
  );
}
