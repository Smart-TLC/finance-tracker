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
import {useSelector} from 'react-redux';
import CategoryList from '../Category/CategoryList';

const useStyles = makeStyles((theme) => ({
  list: {
    color: theme.palette.secondary.dark,
  },
}));

export default function Lists() {
  const classes = useStyles();

  const state = useSelector((state) => ({
    auth: state.auth,
    errors: state.errors,
    data: state.data,
  }));

  return (
    <List>
      {ListItemData.map((text, index) => (
        <Link to={text.link} key={index} style={{textDecoration: 'none', color: state.auth.setting.darkMode ? 'white': 'black'}}>
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
