import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {ListItemData} from './ListItemData';
import CategoryList from '../Category/CategoryList';

function Lists() {
    return (
        <List>
          {ListItemData.map((text, index) => (
            <ListItem key={index} button onClick={() => {window.location.pathname = text.link}}>
              <ListItemIcon>{text.icon}</ListItemIcon>
              <ListItemText primary={text.title} />
            </ListItem>
          ))}
          <CategoryList />
        </List>
    )
}

export default Lists;
