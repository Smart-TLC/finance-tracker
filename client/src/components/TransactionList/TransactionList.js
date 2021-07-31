import React, { useEffect } from 'react'
import "../../index.css";
import TransactionListItem from "./TransactionListItem";
import { 
    Container,
    Grid,
} from '@material-ui/core';
import { getTransactions } from "../../actions/transactionAction";
import { useDispatch, useSelector } from "react-redux";
import Form02 from "../TransactionForm/Form02"

export default function TransactionList() {
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
        <Container className="scrollbar scrollbar-primary">
            <Grid container spacing={1}>
                {state.data.transactions.map((item, id) => (
                     <TransactionListItem item={item} />  
                ))}    
            </Grid>
            <Grid>
                <Form02 />
            </Grid>
        </Container>
    )
}


