import React, {useState} from 'react';
import {Grid, Card, CardContent, Collapse, Typography, Divider,} from "@material-ui/core";
import "../../index.css";
import {makeStyles} from "@material-ui/core/styles";
import SettingHover from '../TransactionList/SettingHover';


const useStyles = makeStyles((theme) => ({
    item : {
        "&:hover": {
            backgroundColor: "gold",
        },
        border: "2px solid blue",
        // padding: 10
    },
    
}));

export default function TransactionListItem(props) {
    const {_id, name, spentAt, amount, note} = props.item;
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    console.log({name})

    return (
            <Grid item key={_id} xs={12}>
                <Card className={classes.item}>
                    <CardContent>
                    <Grid 
                        container
                    >
                        <Grid 
                            item xs={7} 
                            container 
                            justifyContent="flex-start"
                            alignItems="center"
                            onClick={() => {
                                setExpanded(!expanded)
                            }}
                        >
                            <Grid item xs={7} className="name">
                                <Typography variant="h4" style={{color: "mediumblue"}}>
                                    {name}
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography variant="h6" style={{color: "mediumblue"}}>
                                    {spentAt}
                                </Typography>
                            </Grid>
                        </Grid>
                            
                        <Grid 
                            item xs={5} 
                            container
                            justifyContent="flex-end"
                            alignItems="center"
                        >
                            <Typography variant="h4" style={{color: "mediumblue"}} className="amount">
                                    ${amount}
                                </Typography>
                            <SettingHover _id={_id}/>
                        </Grid>
                    </Grid>
                    </CardContent>
                    <Divider className = {classes.divider}/>
                    <Collapse in={expanded} timeout="auto">
                        <CardContent>
                            <Typography variant="h8" color="textPrimary">
                                Note: {note}
                            </Typography>   
                        </CardContent>
                    </Collapse>
                </Card>
            </Grid>
    )
}

 


 
