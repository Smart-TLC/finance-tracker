import React from 'react'
import {
    Grid,
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(3),
    },
    remain: {
        color: theme.palette.warning.light,
    },
    budget: {
        color: theme.palette.success.main,
    },
    expense: {
        color: theme.palette.error.main,
    },
}));

export default function Balance() {
    const classes = useStyles();
    
    return (
        <Grid container xs={9} className={classes.paper}>
            <Grid item xs={4}
                container
                direction="column"
                alignItems="center"
            >
                <Grid item>
                    <Typography variant='h5' className={classes.remain}>
                        Remaining
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography variant='h6' className={classes.remain}>
                        $200
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={4}
                container
                direction="column"
                alignItems="center"
            >
                <Grid item>
                    <Typography variant='h5' className={classes.budget}>
                        Budget
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant='h6' className={classes.budget}>
                        $300
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={4}
                container
                direction="column"
                alignItems="center"
            >
                <Grid item>
                <Typography variant='h5' fontWeight="fontWeightMedium" className={classes.expense}>
                    Expense
                </Typography>
                </Grid>
                <Grid item>
                <Typography variant='h6' className={classes.expense}>
                    $100
                </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}