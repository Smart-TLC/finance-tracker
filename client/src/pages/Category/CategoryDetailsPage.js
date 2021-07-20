import React from 'react'
import { useParams } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        ...theme.typography.button,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1),
        marginLeft: 75,
    },
    title: {
        color: 'secondary',
        
    }
}));

export default function CategoryDetailsPage() {
    const { cate } = useParams(); 
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant='h3' className={classes.title}>
                {cate} Page
            </Typography>
        </div>
    )
}

