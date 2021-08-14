import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { Container } from '@material-ui/core';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

let allViews = Object.keys(Views).filter(k => k === "MONTH").map(k => Views[k])

const useStyles = makeStyles(() => ({
  root: {
    padding: 12,
  }
}))

export default function CalendarContainer() {
  const state = useSelector((state) => ({
    auth: state.auth,
    errors: state.errors,
    data: state.data,
  }));

  console.log(state.data.transactions);
  const dailySpent = {};

  state.data.transactions.forEach((transaction) => {
    dailySpent[transaction.spentAt] = 0;
  })

  state.data.transactions.forEach((transaction) => {
    if (transaction.type === "budget") {
      dailySpent[transaction.spentAt] += transaction.amount;
    } else if (transaction.type === "expense") {
      dailySpent[transaction.spentAt] -= transaction.amount;
    }
    
  })

  const newEvents = Object.keys(dailySpent).map((key) => {
    const timeArray = key.split("-");
    const date = parseInt(timeArray[0]);
    const month = parseInt(timeArray[1]);
    const year = parseInt(timeArray[2]);
    const value = (dailySpent[key] >= 0) ? `+$${dailySpent[key]}` : `-$${-dailySpent[key]}`
    return ({
      'value': dailySpent[key],
      'title': value,
      'start': new Date(year, month-1, date),
      'end': new Date(year, month-1, date)
    })
  })

  const classes = useStyles();
  const eventStyleGetter = (event) => {
    console.log(event.value);
    const style = {
        justifyContent: 'center',
        borderRadius: '0px',
        opacity: 0.8,
        color: (event.value >= 0) ? 'green': 'red',
        backgroundColor: 'white',
        border: '0px',
        display: 'flex',
        padding: '7px',
        fontSize: '1.2em',
        fontWeight: 'bold'
    };
    return {
        style: style
    };
  };

  return (
    <Container className={classes.root}>
      <Calendar
        selectable
        localizer={localizer}
        eventPropGetter={eventStyleGetter}
        events={newEvents}
        views={allViews}
        style={{ height: 500 }}
      />
    </Container>
  )
}