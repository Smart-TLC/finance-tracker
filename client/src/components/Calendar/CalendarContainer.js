import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { Container } from '@material-ui/core';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment);

console.log(Object.keys(Views));
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
    dailySpent[transaction.spentAt] += transaction.amount;
  })
  console.log(dailySpent);

  const newEvents = Object.keys(dailySpent).map((key) => {
    const timeArray = key.split("-");
    const date = parseInt(timeArray[0]);
    const month = parseInt(timeArray[1]);
    const year = parseInt(timeArray[2]);
    return ({
      'title': `- $ ${dailySpent[key]}`,
      'start': new Date(year, month-1, date),
      'end': new Date(year, month-1, date)
    })
  })


  console.log(newEvents);

  const classes = useStyles();
  const [dateState, setDateState] = useState(new Date());
  const handleNavigate = (date) => {
    console.log(date)
  }

  const handleSelectSlot = (e) => {
    setDateState(e.slots[0]);
    console.log(dateState);
  }

  const handleChange = (e) => {
    console.log(e);
  }

  const eventStyleGetter = () => {
    const style = {
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: '0px',
        opacity: 0.8,
        color: 'red',
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
        onNavigate={handleNavigate}
        onSelectSlot={handleSelectSlot}
        onChange={handleChange}
        eventPropGetter={eventStyleGetter}
        events={newEvents}
        views={allViews}
        style={{ height: 500 }}
      />
    </Container>
  )
}