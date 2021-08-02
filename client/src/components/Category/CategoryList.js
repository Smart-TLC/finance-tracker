import React from 'react'
import { Link } from 'react-router-dom';
import { CategoryListData } from '../Category/CategoryListData';
import { makeStyles, List, ListItem, ListItemIcon, ListItemText, Collapse } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import CardTravelIcon from '@material-ui/icons/CardTravel';

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
                    <Link to={text.link} key={index}>
                      <ListItem 
                        key={index} 
                        button
                        className={classes.nested}
                      >
                        <ListItemIcon className={classes.list}>{text.icon}</ListItemIcon>
                        <ListItemText primary={text.title} />
                      </ListItem>                      
                    </Link>

                ))}
              </List>
          </Collapse>
        </List>
    )
} 