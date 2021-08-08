import React, {useState} from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import "../../index.css";
import { 
    Grid,
    Card,
    CardContent,
    Collapse,
    Typography,
    Divider,
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import SettingHover from './SettingHover';

const useStyles = makeStyles((theme) => ({
    hide: {
        display: 'none',
    },
    card : {
        "&:hover": {
            backgroundColor: theme.palette.primary.light,
        },
        cursor: 'pointer',
    },
    btnColor: {
        backgroundColor: theme.palette.secondary.light,
    },
}));

export default function TransactionListItem(props) {
    const {_id, name, category, spentAt, amount, note} = props.item;
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    
    return (
            <Grid item xs={12}>
                <Card className={classes.card}>
                    <Grid 
                        container
                        spacing={1}
                    >
                        <Grid item xs={6} lg={7} container 
                            justifyContent="flex-start"
                            alignItems="center"
                            onClick={() => {
                                setExpanded(!expanded)
                            }}
                        >
                            <Grid item xs={6} lg={8} className="name">
                                <Typography variant="h6" color="textPrimary" >
                                    {name}
                                </Typography>
                                <Link to={`/category/${category}`} style={{ textDecoration: 'none' }}>
                                    <Typography variant="subtitle1" color="secondary">
                                        {category}
                                    </Typography>
                                </Link>
                            </Grid>
                            <Grid item xs={6} lg={4}>
                                <Typography variant="subtitle1" color="textSecondary" className={clsx(expanded && classes.hide)}>
                                    {spentAt}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid 
                            item xs={6} lg={5}
                            container
                            justifyContent="flex-end"
                            alignItems="center"
                            // onClick={() => {
                            //     setExpanded(false)
                            // }}
                        >
                            <Typography variant="h5" color="secondary" >
                                ${amount}
                            </Typography>
                            <SettingHover _id={_id} handleFormOpen={props.handleClickOpen} />
                        </Grid>
                    </Grid>
                    <Divider variant="middle" />
                    <Collapse in={expanded} timeout="auto" onClick={() => {setExpanded(!expanded)}}>
                        <CardContent>
                            <Typography  variant="body2" color="secondary">
                                {spentAt}
                            </Typography>
                            <Typography>
                                {note}
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            </Grid>
    )
}

 
