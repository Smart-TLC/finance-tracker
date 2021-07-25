import React, {useState} from 'react';
import clsx from 'clsx';
import { 
    Grid,
    Card,
    CardContent,
    Collapse,
    Typography,
    IconButton,
    ButtonBase,
    ButtonGroup,
} from "@material-ui/core";
// import MoreVertIcon from '@material-ui/icons/MoreVert';
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
        backgroundColor: "#33eaff",
    },
}));

export default function TransactionListItem(props) {
    const {id, name, category, date, money, note} = props.transList;
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    return (
            <Grid item key={id} xs={12}>
                <Card className={classes.card}>
                    <CardContent>
                    <Grid 
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="flex-start"
                    >
                        <Grid item xs={9} container onClick={() => {setExpanded(!expanded)}}>
                            <Grid item xs={6}>
                                <Typography variant="h5" color="textPrimary">
                                    {name}
                                </Typography>
                                <ButtonBase>
                                    <Typography variant="h6" color="secondary" button onClick={() => {window.location.pathname = `/category/${category}`}}>
                                        {category}
                                    </Typography>
                                </ButtonBase>
                            </Grid>
                            <Grid>
                                <Typography variant="h6" color="textSecondary" className={clsx(expanded && classes.hide)}>
                                    {date}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={3}
                            container
                            direction="row"
                            justifyContent="space-evenly"
                            alignItems="center"
                        >
                                <Grid item>
                                <Typography variant="h4" color="primary">
                                    ${money}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <ButtonGroup
                                    orientation="vertical"
                                    color="primary"
                                    variant="contained"
                                    className={classes.btnColor}
                                > 
                                    <IconButton size="small">
                                        <EditOutlinedIcon fontSize="small"/>
                                    </IconButton>
                                    <IconButton size="small">
                                        <DeleteOutlinedIcon fontSize="small"/>
                                    </IconButton>
                                </ButtonGroup>
                            </Grid>
                        </Grid>
                    </Grid>
                    </CardContent>
                    <Collapse in={expanded} timeout="auto" >
                        <CardContent>
                            <Typography  variant="body2" color="secondary">
                                {date}
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

 
