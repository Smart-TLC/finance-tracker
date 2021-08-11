import React, { useState } from "react";
import {
  makeStyles,
  Card,
  Grid,
  Typography,
  Collapse,
  CardContent,
  Divider,
} from "@material-ui/core";
import {
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
} from "@material-ui/lab";
import SettingHover from "./SettingHover";

const useStyles = makeStyles((theme) => ({
  card: {
    paddingLeft: 7,
    marginBottom: "2em",
    marginTop: "-1.5em",
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
    cursor: "pointer",
  },
  hover: {
    padding: 0,
    margin: 0,
  },
  gridItem: {
    minHeight: 70,
  },
  timelineItem: {
    "&::before": {
      padding: 0,
      flex: 0,
    },
  },
  timelineItemOpposite: {
    paddingTop: 0,
    flexGrow: 0.15,
    height: "10%",
    paddingLeft: 0,
  },
}));

const BudgetItem = (props) => {
  const classes = useStyles();
  const { _id, amount, note, spentAt } = props.item;
  const [expanded, setExpanded] = useState(false);
  return (
    <TimelineItem key={_id} className={classes.timelineItem}>
      <TimelineOppositeContent className={classes.timelineItemOpposite}>
        <Typography variant="subtitle1" color="textSecondary">
          {spentAt}
        </Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        {props.id != props.dataLength - 1 ? <TimelineConnector /> : <></>}
      </TimelineSeparator>
      <TimelineContent>
        <Card
          className={classes.card}
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          <Grid
            container
            spacing={1}
            alignItems="center"
            className={classes.gridItem}
          >
            <Grid item xs={6} container>
              <Typography variant="subtitle1">
                Added <span style={{ fontWeight: "bold" }}>${amount}</span> to
                budget
              </Typography>
            </Grid>
            <Grid item xs={6} container justifyContent="flex-end">
              <SettingHover _id={_id} handleFormOpen={props.handleClickOpen} />
            </Grid>
          </Grid>
          <Collapse in={expanded} timeout="auto">
            <Divider variant="middle" style={{ paddingRight: "6%" }} />
            <CardContent>
              <Typography>{note}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      </TimelineContent>
    </TimelineItem>
  );
};

export default BudgetItem;
