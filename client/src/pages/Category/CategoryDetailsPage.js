import React from 'react'
import { useParams } from 'react-router-dom';
import "../../index.css";
import {
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from '../../components/Sidebar/Sidebar';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1),
        marginLeft: 75,
    },
}));

export default function CategoryDetailsPage() {
    const { cate } = useParams(); 
    const classes = useStyles();

    return (            
        <div className={classes.root}>
            <Sidebar />
            <Typography variant='h3'>
                {cate} Page
            </Typography>
        </div>
    )
}

