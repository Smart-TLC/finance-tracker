import React, {useState} from 'react'
import "../../index.css";
import TransactionListItem from "./TransactionListItem";
import { 
    Container,
    Grid,
} from '@material-ui/core';
import { useSelector } from "react-redux";
import TransactionForm from "../TransactionForm/TransactionForm"
import AddTransactionBtn from "../TransactionForm/AddTransactionBtn"

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
        <Container className="scrollbar scrollbar-primary">
            <Grid container spacing={1}>
                {state.data.transactions.map((item) => (
                    <TransactionListItem item={item} key={item._id} handleClickOpen={handleClickOpen}  />  
                ))}    
            </Grid>
            <Grid>
                <div> 
                    <AddTransactionBtn handleClickOpen={handleClickOpen} />
                    <TransactionForm open={open} handleClose={handleClose} id={formId}/>                   
                </div>

            </Grid>
        </Container>
    )
}


