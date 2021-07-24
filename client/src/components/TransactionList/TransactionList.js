import React, { useEffect, useState } from 'react'
import TransactionListItem from "./TransactionListItem";
import { 
    Container,
    Grid,
} from '@material-ui/core';

export default function TransactionList() {
    const [transLists, setTransLists] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/transactions')
            .then(res => res.json())
            .then(data => setTransLists(data))
    }, [])
    
    return (
        <Container>
            <Grid container spacing={3}>
                {transLists.map((transList) => (
                     <TransactionListItem transList={transList} />  
                ))}    
            </Grid>
        </Container>
    )
}


