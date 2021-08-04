import React from 'react'
import AddIcon from '@material-ui/icons/Add';
import { makeStyles, Fab, Tooltip } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    absolute: {
      position: 'absolute',
      bottom: theme.spacing(1),
      right: theme.spacing(1),
    },
}));

const AddTransactionBtn = (props) => {
    const classes = useStyles();  
    return (
        <Tooltip title="Add Expense" aria-label="add">
            <Fab color="secondary" className={classes.absolute} onClick={() => {props.handleClickOpen("")}}>
                <AddIcon />
            </Fab>
        </Tooltip>
    )
}

export default AddTransactionBtn
