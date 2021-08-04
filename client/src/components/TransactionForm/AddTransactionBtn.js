import React from 'react'
import AddIcon from '@material-ui/icons/Add';
import { Card, Grid } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(1),
        maxWidth: 850,
        backgroundColor: theme.palette.secondary.light,
        cursor: 'pointer',
        borderRadius: 16,
        marginLeft: 24,
    },
}));

const AddTransactionBtn = (props) => {
    const classes = useStyles();  
    
    return (
        <Card className='add' className={classes.paper} onClick={() => {props.handleClickOpen("")}}>
            <Grid container xs={12}
                justifyContent="center"
                alignItems="center"
            >
            <Typography variant="h5">
                New Transaction
            </Typography>
            </Grid>
      </Card>
    )
}

export default AddTransactionBtn
