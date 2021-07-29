import React, { useEffect } from 'react'
import "../../index.css";
import TransactionListItem from "../TransactionList/TransactionListItem";
import MonthTabs from "./MonthTabs";
import { 
    Container,
    Grid,
} from '@material-ui/core';
import { getTransactions } from "../../actions/transactionAction";
import { useDispatch, useSelector } from "react-redux";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 30,
    },
}))

export default function MonthlyTransList() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const state = useSelector((state) => ({
        auth: state.auth,
        errors: state.errors,
        data: state.data,
    }));

    useEffect(() => {
        dispatch(getTransactions(state.auth.user.id));
      }, []);

    return (
        <Container>
            <Grid className={classes.root}>
                <MonthTabs/>
            </Grid>
            <Grid container spacing={1} className="scrollbar scrollbar-primary">
                {state.data.transactions.map((item, id) => (
                     <TransactionListItem item={item} />  
                ))}    
            </Grid>
        </Container>
    )
}


