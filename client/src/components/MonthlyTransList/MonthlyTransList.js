import React, { useEffect, useState } from 'react'
import moment from 'moment'
import "../../index.css";
import TransactionListItem from "../TransactionList/TransactionListItem";
import StartScreenPage from "../../pages/StartScreen/StartScreenPage";
import Ranking from './Ranking';
import { 
    Container,
    Grid,
    Paper, 
    Typography,
    IconButton,
    Card,
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
        maxWidth: 840,
        backgroundColor: theme.palette.secondary.light,
    },
    ranking: {
        padding: theme.spacing(0),
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
        // <>
        // {(monthData.length>0) ? (
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
                            <Typography variant="h6">{value.format("MMMM")}</Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography variant="body1">{value.format("YYYY")}</Typography>
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
            <Grid 
                container
                xs={12}
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={5}
            >
                <Grid item xs={9}>
                    <Container className="scrollbar scrollbar-primary">
                        <Grid container spacing={1}>
                            {monthData.map((item, id) => (
                                <TransactionListItem item={item} key={id}/>  
                            ))}    
                        </Grid>
                    </Container>
                </Grid>
                <Grid item xs={3}>
                    <Card className={classes.ranking}>
                        <Ranking/>
                    </Card>
                </Grid>
            </Grid>
        </Container>
        // ):(
        //     <StartScreenPage/>
        // )}
    // </>  
    )
}


