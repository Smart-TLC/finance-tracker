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
import {motion} from 'framer-motion'

const textVariants = {
    hidden: {
        opacity: 0,
        y: -100,
        x: -70
    },
    visible: {
        opacity: 1, 
        y: -30,
        x: -70
    }
}

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
            <motion.h2
                variants={textVariants}
                initial = "hidden"
                animate = "visible"
                transition={{type: 'spring', delay: 0.5, stiffness: 300 }}
            >
                Welcome back, {state.auth.user.name}
            </motion.h2>
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
            <Grid><Form02 /></Grid>
        </Container>
    )
}


