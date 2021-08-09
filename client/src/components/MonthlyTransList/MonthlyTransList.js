import React, {  useState } from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment'
import "../../index.css";
import TransactionListItem from "../TransactionList/TransactionListItem";
import TransactionForm from "../TransactionForm/TransactionForm";
import Ranking from './Ranking';
import { 
    Container,
    Grid,
    Typography,
    IconButton,
    Card,
} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useSelector } from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import Balance from './Balance';
import {motion} from 'framer-motion';
import { Scrollbars } from 'react-custom-scrollbars';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 12,
    },
    paper: {
        backgroundColor: theme.palette.secondary.light,
        borderRadius: 15,
        marginBottom: 10,
    },
    container: {
        backgroundColor: theme.palette.secondary.dark,
    },
    arrow:{
        marginLeft: 22,
    }
}))

export default function MonthlyTransList() {
    const classes = useStyles();
    const state = useSelector((state) => ({
        auth: state.auth,
        errors: state.errors,
        data: state.data,
    }));

    const [value, setValue] = useState(moment());
    const [open, setOpen] = useState(false);
    const [formId, setFormId] = useState("");
    const handleClickOpen = (id) => {
        setOpen(true);
        setFormId(id);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function prevMonth() {
        return value.clone().subtract(1, "month");
    }
    function nextMonth() {
        return value.clone().add(1, "month");
    } 

    const mon = `${value.format("MM")}-${value.format("YYYY")}`

    // Filter transactions based on each month
    const monthData = state.data.transactions.filter((transaction) => transaction.spentAt.slice(3,10) === mon);

    return (
        <Container disableGutters={true}>
            <Grid 
                container
                direction="row"
                alignItems="flex-start"
                spacing={4} 
            >
                <Grid 
                    item container
                    xs={11} lg={9}
                    direction="column"
                >
                    <Grid item>
                        <Balance/>
                    </Grid>
                    <Grid
                        item
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        xs='auto'
                        className={classes.paper}
                    >
                        <Grid item xs={1} lg={1}>
                            <IconButton onClick={() => {setValue(prevMonth())}}>
                                <ArrowBackIosIcon />
                            </IconButton>
                        </Grid>
                        <Grid item container
                            direction="column"
                            alignItems="center"
                            xs={9}
                            lg={10}
                        >
                            <Grid item xs>
                                <Typography variant="h6">{value.format("MMMM")}</Typography>
                            </Grid>
                            <Grid item xs>
                                <Typography variant="body1">{value.format("YYYY")}</Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs className={classes.arrow}>
                            <IconButton onClick={() => {setValue(nextMonth())}}>
                                <ArrowForwardIosIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Scrollbars 
                            style={{ height: 350, weight: 800 }}
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}
                        >
                            {(monthData.length>0) ? (
                                <Grid container spacing={1}>
                                    {monthData.map((item) => (
                                        <TransactionListItem item={item} key={item._id} handleClickOpen={handleClickOpen}/>  
                                    ))}    
                                </Grid>
                            ):(
                                <Typography justifyContent="center">No transactions added</Typography>
                            )}
                        </Scrollbars>
                    </Grid>
                    <Grid item container 
                        justifyContent="flex-end"
                    >
                        <Link to="/transaction" style={{ textDecoration: 'none' }}>
                            <Typography variant="h6" color="success">
                                View all transactions
                            </Typography>
                        </Link>
                    </Grid>
                </Grid>
                <Grid item 
                    xs='auto' lg={3}
                >
                    <motion.h2>TOP EXPENSE</motion.h2>
                    <Card height="100%">
                        <Ranking/>
                    </Card>
                </Grid>
                <TransactionForm open={open} handleClose={handleClose} id={formId}/> 
            </Grid>
        </Container>
    )
}


