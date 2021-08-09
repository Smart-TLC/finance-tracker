import React from 'react';
import { Grid, Card, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 12,
  },
  paper: {
    marginLeft: 25,
    backgroundColor: theme.palette.secondary.light,
    borderRadius: 15,
    maxWidth: 888,
    marginBottom: 10,
  },
  container: {
    backgroundColor: theme.palette.secondary.dark,
  },
  category: {
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    padding: 10
  },
  categoryItem: {
    padding: 5
  }
}))


export default function CategoryDetails({ cateAllTransactions, sumOfCosts }) {
  const classes = useStyles()
  return (
    <Grid container xs={12} className={classes.root}>
      <Grid item xs={10} spacing={1}>
        {cateAllTransactions.map((category) => (
          <Grid container className={classes.categoryItem}>
            <Grid item container xs={8}>
              <Box bgcolor={category.color} p={3}></Box>
              <Typography className={classes.category}>{category.title}</Typography>
            </Grid>
            <Grid item container xs={4}>
              <Grid item xs={6}>
                <Typography className={classes.category}>{category.percentage * 100} %</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className={classes.category}>$ {category.value}</Typography>
              </Grid>
            </Grid>
          </Grid>
        ))}
        <Grid container>
          <Grid item container xs={8}>
          </Grid>
          <Grid item container xs={4}>
            <Grid item xs={6}>
              <Typography className={classes.category}>100 %</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography className={classes.category}>$ {sumOfCosts}</Typography>
            </Grid>
          </Grid>
        </Grid>
        
      </Grid>

    </Grid>
  )
}