import React, {useState} from 'react';
import clsx from 'clsx';
import { 
    Grid,
    Card,
    CardContent,
    CardActions, 
    Collapse,
    Typography,
    IconButton,
} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 700,
      },
      expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
}));

export default function TransactionListItem(props) {
    const {id, name, category, date, money, note} = props.transList;
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    return (
            <Grid item key={id} xs={9}>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography variant="body1" color="textPrimary">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" button onClick={() => {window.location.pathname = `/category/${category}`}}>
                            {category}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton 
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded,
                              })}
                              onClick={() => {setExpanded(!expanded)}}
                              aria-expanded={expanded}
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>
                                {note}
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            </Grid>
    )
}

 
