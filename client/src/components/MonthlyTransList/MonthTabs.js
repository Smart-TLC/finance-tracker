import React from 'react'
import {
    Card,
    CardContent,
    Paper,
    Grid,
    Typography,
    IconButton,
} from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
    paper: {
        padding: theme.spacing(1),
        margin: 'auto',
        maxWidth: 1000,
    },
}))

export default function MonthTabs() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={1}
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="flex-end"
                >
                    <Grid item xs={1}>
                        <IconButton>
                            <ArrowBackIosIcon />
                        </IconButton>
                    </Grid>
                    <Grid item >
                        <Grid item>
                            <Typography variant="h6">month</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6">year</Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={1}>
                        <IconButton>
                            <ArrowForwardIosIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}


