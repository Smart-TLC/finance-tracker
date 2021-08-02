import React, { useEffect } from 'react'
import "../../index.css";
import TransactionListItem from "./TransactionListItem";
import { 
    Container,
    Grid,
    Typography,
    Divider,
} from '@material-ui/core';
import { getTransactions } from "../../actions/transactionAction";
import { useDispatch, useSelector } from "react-redux";
import Form02 from "../TransactionForm/Form02";
import Balance from './Balance';

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
        <Container maxWidth="md" >
            <Typography variant='h6'>Welcome back, {state.auth.user.name}</Typography>
            <Balance/>
            <Grid>
            <Typography variant='h6' className="typo">List of Expense</Typography>
            {/* <Divider p={2}/> */}
            </Grid>
            <Container className="scrollbar scrollbar-winter-neva">
                <Grid container spacing={1}>
                    {state.data.transactions.map((item, id) => (
                        <TransactionListItem item={item} key={id}/>  
                    ))}    
                </Grid>
            </Container>
            <Form02 />
        </Container>
    )
}


