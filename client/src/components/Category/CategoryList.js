import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import {CategoryListData} from '../Category/CategoryListData';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    nested: {
        paddingLeft: theme.spacing(4),
    },
    list: {
        color: theme.palette.secondary.dark,
    },
}));

export default function CategoryList() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    return (
        <List>
            <ListItem button onClick={() => setOpen(!open)}>
              <ListItemIcon className={classes.list}> <CardTravelIcon/> </ListItemIcon>
              <ListItemText primary="Category" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {CategoryListData.map((text, index) => (
                    <ListItem 
                        key={index} 
                        button onClick={() => {window.location.pathname = text.link}}
                        className={classes.nested}
                    >
                        <ListItemIcon className={classes.list}>{text.icon}</ListItemIcon>
                        <ListItemText primary={text.title} />
                    </ListItem>
                ))}
              </List>
          </Collapse>
        </List>
    )
} 