import React, {useState} from 'react';
import clsx from 'clsx';
import "../../index.css";
import { 
    Grid,
    Card,
    CardContent,
    Collapse,
    Typography,
    ButtonBase,
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
    },
    btnColor: {
        backgroundColor: theme.palette.secondary.dark,
    },
    vert: {
        "&:hover": {
            display: 'none',
        },
    },
}));

export default function TransactionListItem(props) {
    const {_id, name, category, spentAt, amount, note} = props.item;
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    
    return (
            <Grid item key={_id} xs={12}>
                <Card className={classes.card}>
                    <Grid 
                        container
                        spacing={1}
                    >
                        <Grid item xs={10} container 
                            justifyContent="flex-start"
                            alignItems="center"
                            onClick={() => {
                                setExpanded(!expanded)
                            }}
                        >
                            <Grid item xs={6} className="name">
                                <Typography variant="h5" color="textPrimary" >
                                    {name}
                                </Typography>
                                <ButtonBase>
                                    <Typography variant="h6" color="secondary" onClick={() => {window.location.pathname = `/category/${category}`}}>
                                        {category}
                                    </Typography>
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="h6" color="textSecondary" className={clsx(expanded && classes.hide)}>
                                    {spentAt}
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant="h4" color="secondary" className="amount">
                                    ${amount}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid 
                            item xs={2} 
                            container
                            justifyContent="flex-end"
                            alignItems="center"
                        >
                            <SettingHover _id={_id}/>
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

 
