import React, {useState} from 'react';
import clsx from 'clsx';
import { 
    Grid,
    Card,
    CardHeader,
    CardContent,
    Collapse,
    Typography,
    IconButton,
    ButtonBase,
} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 700,
        flexGrow: 1,
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    hide: {
        display: 'none',
    },
    header: {
        color: "red",
    }
}));

export default function TransactionListItem(props) {
    const {id, name, category, date, money, note} = props.transList;
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    return (
            <Grid item key={id} xs={9}>
                <Card className={classes.root}>
                    <CardHeader 
                        className={classes.header}
                        title={
                            <Typography variant="h5" color="textPrimary">
                                {name}
                            </Typography>
                        }
                        subheader = {  
                            // <Typography variant="body1" color="textSecondary" className={clsx(expanded && classes.hide)}>
                            //     {date}
                            // </Typography>
                            <ButtonBase>
                                <Typography variant="subtitle1" color="secondary" button onClick={() => {window.location.pathname = `/category/${category}`}}>
                                    {category}
                                </Typography>
                            </ButtonBase>
                        }
                        action={
                            // <IconButton>
                            //   <MoreVertIcon />
                            // </IconButton>
                            <Typography variant="body1" color="textSecondary" className={clsx(expanded && classes.hide)}>
                                {date}
                            </Typography>
                          }
                    />
                    <CardContent>
                        <Grid 
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <ButtonBase>
                                <Typography variant="h5" color="secondary" button onClick={() => {window.location.pathname = `/category/${category}`}}>
                                    {category}
                                </Typography>
                            </ButtonBase>
                            {/* <Typography color="textSecondary">
                                {note}
                            </Typography> */}
                            <Typography variant="h4">
                                ${money}
                            </Typography>
                        </Grid>
                    </CardContent>
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <IconButton aria-label="change your infomation">
                                <EditIcon />
                            </IconButton>
                            <IconButton aria-label="delete transaction">
                                <DeleteIcon />
                            </IconButton>
                            <IconButton 
                                className={clsx(classes.expand, {
                                    [classes.expandOpen]: expanded,
                                })}
                                onClick={() => {setExpanded(!expanded)}}
                                aria-expanded={expanded}
                            >
                                <ExpandMoreIcon />
                            </IconButton>
                        </Grid>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
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

 
