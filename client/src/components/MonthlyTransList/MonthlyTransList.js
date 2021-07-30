import React, { useEffect, useState } from 'react'
import moment from 'moment'
import "../../index.css";
import TransactionListItem from "../TransactionList/TransactionListItem";
import { 
    Container,
    Grid,
    Paper, 
    Typography,
    IconButton,
} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { getTransactions } from "../../actions/transactionAction";
import { useDispatch, useSelector } from "react-redux";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 23,
    },
    paper: {
        padding: theme.spacing(0),
        marginRight: 25,
        maxWidth: 879,
        backgroundColor: theme.palette.secondary.light,
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

    const [value, setValue] = useState(moment());

    function currMonth() {
        return value.format("MMMM");
    }

    function currYear() {
        return value.format("YYYY");
    }

    function prevMonth() {
        return value.clone().subtract(1, "month");
    }

    function nextMonth() {
        return value.clone().add(1, "month");
    } 

    useEffect(() => {
        dispatch(getTransactions(state.auth.user.id));
    }, []);

    const mon = `${value.format("YYYY")}-${value.format("MM")}`

    // Filter transactions based on each month
    const monthData = state.data.transactions.filter((transaction) => transaction.spentAt.slice(0,7) === mon);

    return (
        <Container>
            <Grid className={classes.root}>
            <Paper className={classes.paper}>
                <Grid
                    item
                    container
                    xs={12}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Grid item xs={1}>
                        <IconButton onClick={() => {setValue(prevMonth())}}>
                            <ArrowBackIosIcon />
                        </IconButton>
                    </Grid>
                    <Grid item container
                        direction="column"
                        alignItems="center"
                        xs={10}
                    >
                        <Grid item xs>
                            <Typography variant="h6">{currMonth()}</Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography variant="body1">{currYear()}</Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs className='arrowforward'>
                        <IconButton onClick={() => {setValue(nextMonth())}}>
                            <ArrowForwardIosIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Paper>
            </Grid>
            <Container className="scrollbar scrollbar-primary">
            <Grid container spacing={1}>
                {monthData.map((item, id) => (
                     <TransactionListItem item={item} />  
                ))}    
            </Grid>
            </Container>
        </Container>
    )
}


