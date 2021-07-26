import React, {useState} from 'react';
import clsx from 'clsx';
import { deleteTransaction, updateTransaction } from "../../actions/transactionAction";
import { useDispatch } from "react-redux";
import "../../index.css";
import { 
    Grid,
    Card,
    CardContent,
    Collapse,
    Typography,
    IconButton,
    ButtonBase,
    ButtonGroup,
    Fade,
} from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    hide: {
        display: 'none',
    },
    card : {
        "&:hover": {
            backgroundColor: "#00b0ff",
        },
    },
    btnColor: {
        // display: 'none',
        backgroundColor: "#ffeb3b",
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
    const [setting, setSetting] = useState(false);
    const dispatch = useDispatch();
    
    return (
            <Grid item key={_id} xs={12}>
                <Card className="card">
                    <Grid 
                        container
                        spacing={1}
                    >
                        <Grid item xs={9} container 
                            justifyContent="flex-start"
                            alignItems="center"
                            onClick={() => {
                                if(!expanded){setSetting(false)} 
                                setExpanded(!expanded)
                            }}>
                            <Grid item xs={1}></Grid>
                            <Grid item xs={7}>
                                <Typography variant="h5" color="textPrimary">
                                    {name}
                                </Typography>
                                <ButtonBase>
                                    <Typography variant="h6" color="secondary" onClick={() => {window.location.pathname = `/category/${category}`}}>
                                        {category}
                                    </Typography>
                                </ButtonBase>
                            </Grid>
                            <Grid>
                                <Typography variant="h6" color="textSecondary" className={clsx(expanded && classes.hide)}>
                                    {spentAt}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={2}
                            container
                            direction="row"
                            justifyContent="flex-end"
                            alignItems="center"
                        >
                            <Grid item>
                                <Typography variant="h4" color="primary">
                                    ${amount}
                                </Typography>
                            </Grid>
                        </Grid>
                            <Grid 
                                item xs={1} 
                                container
                                justifyContent="flex-end"
                                alignItems="center"
                            >
                            <Grid item >
                                <IconButton 
                                    // className={classes.vert}
                                    onClick={() => {
                                        setSetting(!setting) 
                                        setExpanded(false)
                                        }
                                    }
                                    className={clsx(setting && classes.hide)}
                                >
                                    <MoreVertIcon/>
                                </IconButton>
                            </Grid>
                                <Fade in={setting} unmountOnExit>
                                <ButtonGroup
                                    orientation="vertical"
                                    color="primary"
                                    variant="contained"
                                    className={classes.btnColor}
                                > 
                                    <IconButton size="small" onClick={() => {setSetting(!setting)}}>
                                        <EditOutlinedIcon />
                                    </IconButton>
                                    <IconButton 
                                        size="small" 
                                        onClick={(e) => {
                                        e.preventDefault()
                                        dispatch(deleteTransaction(_id))
                                        setSetting(false)
                                    }}>
                                        <DeleteOutlinedIcon />
                                    </IconButton>
                                </ButtonGroup>
                                </Fade>
                            </Grid>
                    </Grid>
                    <Collapse in={expanded} timeout="auto" >
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

 
