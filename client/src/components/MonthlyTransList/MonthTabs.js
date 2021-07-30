import React from 'react'
import {
    Paper,
    Grid,
    Typography,
    IconButton,
} from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {makeStyles} from '@material-ui/core/styles';
import "../../index.css";

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
                <Grid
                    item
                    container
                    xs={12}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Grid item xs={1}>
                        <IconButton>
                            <ArrowBackIosIcon />
                        </IconButton>
                    </Grid>
                    <Grid item container
                        direction="column"
                        alignItems="center"
                        xs={10}
                    >
                        <Grid item xs>
                            <Typography variant="h6">month</Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography variant="body1">year</Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs className='arrowforward'>
                        <IconButton>
                            <ArrowForwardIosIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}


