import React, { useEffect, useState } from 'react'
import TransactionListItem from "./TransactionListItem";
import { 
    Container,
    Grid,
} from '@material-ui/core';
import { getTransactions, deleteTransaction, updateTransaction } from "../../actions/transactionAction";
import { useDispatch, useSelector } from "react-redux";

export default function TransactionList() {
    // const [transLists, setTransLists] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:8000/transactions')
    //         .then(res => res.json())
    //         .then(data => setTransLists(data))
    // }, [])
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
            <Grid container spacing={1}>
                {state.data.transactions.map((item) => (
                     <TransactionListItem item={item} />  
                ))}    
            </Grid>
        </Container>
    )
}


