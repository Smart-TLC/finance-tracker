import React from 'react'
import { Tabs, useTabState, Panel } from '@bumaga/tabs';
import {
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Grid,
    Avatar,
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import "../../index.css";
import { categoriesIcons } from '../../types/categoriesIcons';
import { capitalizeString } from '../../utils/transactionFunc';
import _ from 'lodash';

const cn = (...args) => args.filter(Boolean).join(' ')

const Tab = ({ children }) => {
  const { isActive, onClick } = useTabState()

  return (
    <button className={cn('tab', isActive && 'active')} onClick={onClick}>
      {children}
    </button>
  )
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    text: {
        JustifyContent: 'center',
        color: theme.palette.secondary.dark,
    },
    amount: {
      color: theme.palette.secondary.dark,
      marginRight: 0,
      paddingRight: 0,
    },
    noTransactions: {
      justifyContent: 'center',
      textAlign: 'center',
      padding: 4,
    },
    listItem: {
      width: '100%',
      paddingLeft: 0,
      paddingRight: 0
    }
  }));

export default function Ranking({ dailyTransactions, monthlyTransactions, yearlyTransactions }) {
    const classes = useStyles();
    return (
      <Tabs>
        <div className='tabs'>
          <div className='tab-list'>
            <Tab>Date</Tab>
            <Tab>Month</Tab>
            <Tab>Year</Tab>
          </div>
          <div className='tab-progress' />
          <Panel className='daily-panel'>
            <List component="nav" className={classes.root}>
              {_.isEmpty(dailyTransactions) ? (
                <Typography className={classes.noTransactions}>No transactions today.</Typography>
              ) : (
                dailyTransactions.map((transaction) => (
                  <ListItem button className={classes.listItem}>
                    <ListItemAvatar>
                      <Avatar>
                        {categoriesIcons[transaction.category]}
                      </Avatar>
                    </ListItemAvatar>
                    <Grid container>
                      <Grid item xs={8} >
                        <ListItemText primary={capitalizeString(transaction.category)} />
                      </Grid>
                      <Grid item xs={4} >
                        <ListItemText className={classes.amount}>{`$ ${transaction.amount}`}</ListItemText>
                      </Grid>
                    </Grid>
                  </ListItem>
                ))
              )}
            </List>
          </Panel>

          <Panel>
            <List component="nav" className={classes.root}>
              {_.isEmpty(monthlyTransactions) ? (
                <Typography className={classes.noTransactions}>No transactions this month.</Typography>
              ) : (
                monthlyTransactions.map((transaction) => (
                  <ListItem button className={classes.listItem}>
                    <ListItemAvatar>
                      <Avatar>
                        {categoriesIcons[transaction.category]}
                      </Avatar>
                    </ListItemAvatar>
                    <Grid container>
                      <Grid item xs={8} >
                        <ListItemText primary={capitalizeString(transaction.category)} />
                      </Grid>
                      <Grid item xs={4} >
                        <ListItemText className={classes.amount}>{`$ ${transaction.amount}`}</ListItemText>
                      </Grid>
                    </Grid>
                  </ListItem>
                ))
              ) }
            </List>
          </Panel>

          <Panel>
            <List component="nav" className={classes.root}>
              {_.isEmpty(yearlyTransactions) ? (
                <Typography className={classes.noTransactions}>No transactions this year.</Typography>
              ) : (
                yearlyTransactions.map((transaction) => (
                  <ListItem button className={classes.listItem}>
                    <ListItemAvatar>
                      <Avatar>
                        {categoriesIcons[transaction.category]}
                      </Avatar>
                    </ListItemAvatar>
                    <Grid container>
                      <Grid item xs={8} >
                        <ListItemText primary={capitalizeString(transaction.category)} />
                      </Grid>
                      <Grid item xs={4} >
                        <ListItemText className={classes.amount}>{`$ ${transaction.amount}`}</ListItemText>
                      </Grid>
                    </Grid>
                  </ListItem>
                ))
              )}
            </List>
          </Panel>
        </div>
      </Tabs>
    );
}