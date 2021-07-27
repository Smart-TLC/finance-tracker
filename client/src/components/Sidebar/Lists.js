import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {ListItemData} from './ListItemData';
import CategoryList from '../Category/CategoryList';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  list: {
    color: theme.palette.secondary.dark,
  }

}));

export default function Lists() {
  const classes = useStyles();

    return (
        <List>
          {ListItemData.map((text, index) => (
            <ListItem key={index} button onClick={() => {window.location.pathname = text.link}}>
              <ListItemIcon className={classes.list}>{text.icon}</ListItemIcon>
              <ListItemText primary={text.title} />
            </ListItem>
          ))}
          <CategoryList />
        </List>
    )
}
