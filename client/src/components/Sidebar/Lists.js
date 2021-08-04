import React from "react";
import {
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { ListItemData } from "./ListItemData";
import { Link } from "react-router-dom";
import CategoryList from '../Category/CategoryList';

const useStyles = makeStyles((theme) => ({
  list: {
    color: theme.palette.secondary.dark,
  },
}));

export default function Lists() {
  const classes = useStyles();

  return (
    <List>
      {ListItemData.map((text, index) => (
        <Link to={text.link} key={index} style={{textDecoration: 'none', color: 'black'}}>
          <ListItem key={index} button>
            <ListItemIcon className={classes.list}>{text.icon}</ListItemIcon>
            <ListItemText primary={text.title} />
          </ListItem>
        </Link>
      ))}
      <CategoryList />
    </List>
  );
}
