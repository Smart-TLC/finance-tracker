import React from 'react'
import { 
    Grid,
    Paper,
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
}));

export default function TransactionListItem(props) {
    const {id, name, category, date, money, note} = props.transList;
    const classes = useStyles();

    return (
            <Grid item key={id} xs={9}>
                <Paper className={classes.paper}>
                    {name}
                    {category}
                </Paper>
            </Grid>
    )
}

 
