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

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 12,
    },
    paper: {
        marginLeft: 25,
        backgroundColor: theme.palette.secondary.light,
        borderRadius: 15,
        maxWidth: 888,
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
                    xs={9}
                    direction="column"
                >
                    <Grid item>
                        <Balance/>
                    </Grid>
                    <Grid
                        item
                        container
                        xs={9}
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        className={classes.paper}
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
                        <Grid item xs className={classes.arrow}>
                            <IconButton onClick={() => {setValue(nextMonth())}}>
                                <ArrowForwardIosIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Container className="scrollbar scrollbar-primary">
                            {(monthData.length>0) ? (
                                <Grid container spacing={1}>
                                    {monthData.map((item) => (
                                        <TransactionListItem item={item} key={item._id} handleClickOpen={handleClickOpen}/>  
                                    ))}    
                                </Grid>
                            ):(
                                <Typography justifyContent="center">No transactions added</Typography>
                            )}
                        </Container> 
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
                <Grid item xs={3} >
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


