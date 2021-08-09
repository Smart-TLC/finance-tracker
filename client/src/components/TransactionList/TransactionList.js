import React, {useState} from 'react'
import "../../index.css";
import TransactionListItem from "./TransactionListItem";
import { 
    Container,
    Grid,
    Typography,
    Divider,
} from '@material-ui/core';
import { useSelector } from "react-redux";
import TransactionForm from "../TransactionForm/TransactionForm";
import AddTransactionBtn from "../TransactionForm/AddTransactionBtn";
import Balance from './Balance';
import {motion} from 'framer-motion'

const textVariants = {
    hidden: {
        opacity: 0,
        y: -100,
        x: -20
    },
    visible: {
        opacity: 1, 
        y: -33,
        x: -20
    }
}

export default function TransactionList() {
    const state = useSelector((state) => ({
        auth: state.auth,
        errors: state.errors,
        data: state.data,
    }));

    // open action of form 
    const [open, setOpen] = useState(false);
    const [formId, setFormId] = useState("");
    const handleClickOpen = (id) => {
        setOpen(true);
        setFormId(id);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container maxWidth="lg" disableGutters={false}>
            <motion.h2
                variants={textVariants}
                initial = "hidden"
                animate = "visible"
                transition={{type: 'spring', delay: 0.5, stiffness: 300 }}
            >
                Welcome back, {state.auth.user.name}
            </motion.h2>
            <Balance/>
            
            <Typography variant='h6' className="typo">List of Expense</Typography>
            {/* <Divider p={2}/> */}
            
            <Container fixed>
                <Grid container spacing={1}>
                    {state.data.transactions.map((item) => (
                        <TransactionListItem item={item} key={item._id} handleClickOpen={handleClickOpen}/>  
                    ))}    
                </Grid>
            </Container>
            <Grid> 
                <AddTransactionBtn handleClickOpen={handleClickOpen} />
                <TransactionForm open={open} handleClose={handleClose} id={formId}/>                   
            </Grid>
        </Container>
    )
}


