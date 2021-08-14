import React from "react";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { PieChart } from "react-minimal-pie-chart";

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
  arrow: {
    marginLeft: 22,
  },
}));

export default function PieChartContainer({ cateAllTransactions }) {
  const classes = useStyles();
  return (
    <Container disableGutters={true} className={classes.root}>
      <Grid container direction="row" alignItems="flex-start" spacing={4}>
        {cateAllTransactions.length ? (
          <PieChart
            data={cateAllTransactions}
            // label={({ dataEntry }) => dataEntry.title}
            label={({ x, y, dx, dy, dataEntry }) => (
              <text
                x={x}
                y={y}
                dx={dx}
                dy={dy}
                dominant-baseline="central"
                text-anchor="middle"
                style={{ fontSize: 3, fontWeight: "bold" }}
              >
                {dataEntry.percentage > 0.05 ? dataEntry.title : ""}
              </text>
            )}
            radius={40}
          />
        ) : (
          <PieChart 
            data = {[{title: "", value: 1, percentage: "1.00", color: "#cecece"}]}
            radius={40}
          />
        )}
      </Grid>
    </Container>
  );
}
