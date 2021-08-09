import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from '../../components/Sidebar/Sidebar';
import TransactionList from "../../components/TransactionList/TransactionList";
import MoneyMan from "../../components/Svg_image/MoneyMan";
import {
  Grid,
  Switch,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    //...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    marginLeft: 70,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));

export default function TransactionPage(props) {
  const [darkMode, setDarkMode] = useState(props.darkMode);
  const classes = useStyles();

    return (
        <div className={classes.root}>
            
            <Sidebar />
            <Grid container
              direction='row'
              justifyContent='space-between'
              alignItems="flex-start"
            >
              <Grid item xs={12} lg={8}>
                <TransactionList className={classes.content}/>
              </Grid>
              <Grid item container xs={12} lg={4}
                direction='column'
                justifyContent=''
                alignItems="center"
              >
                <Grid item >
                <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)}/>
                  <MoneyMan/>
                </Grid>
              </Grid>
            </Grid>
        </div>
  );
}
