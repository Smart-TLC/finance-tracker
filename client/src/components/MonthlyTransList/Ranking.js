import React from 'react'
import { Tabs, useTabState, Panel } from '@bumaga/tabs';
import {
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Divider,
    Avatar,
} from '@material-ui/core';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import { makeStyles } from '@material-ui/core/styles';
import "../../index.css";

const cn = (...args) => args.filter(Boolean).join(' ')

const Tab = ({ children }) => {
  const { isActive, onClick } = useTabState()

  return (
    <button className={cn('tab', isActive && 'active')} onClick={onClick}>
      {children}
    </button>
  )
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 330,
        backgroundColor: theme.palette.background.paper,
    },
    text: {
        JustifyContent: 'center',
        color: theme.palette.secondary.dark,
    },
  }));

export default function Ranking() {
    const classes = useStyles();

    return (
    <Tabs>
        <div className='tabs'>
            <div className='tab-list'>
                <Tab>Date</Tab>

                <Tab>Month</Tab>

                <Tab>Year</Tab>
            </div>
            <div className='tab-progress' />
            <Panel className='panel'>
                <List component="nav" className={classes.root}>
                {/* {ListItemData.map((text, index) => ( */}
                    <ListItem button>
                        <ListItemAvatar>
                            <Avatar>
                                <BeachAccessIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Education"/>
                        <ListItemText className={classes.text}>$13</ListItemText>
                    </ListItem>
                    <Divider/>
                    <ListItem button > 
                        <ListItemAvatar>
                            <Avatar>
                                <BeachAccessIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Education"/>
                        <ListItemText className={classes.text}>$13</ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemAvatar>
                            <Avatar>
                                <BeachAccessIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Education"/>
                        <ListItemText className={classes.text}>$13</ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemAvatar>
                            <Avatar>
                                <BeachAccessIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Education"/>
                        <ListItemText className={classes.text}>$13</ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemAvatar>
                            <Avatar>
                                <BeachAccessIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Education"/>
                        <ListItemText className={classes.text}>$13</ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemAvatar>
                            <Avatar>
                                <BeachAccessIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Education"/>
                        <ListItemText className={classes.text}>$13</ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemAvatar>
                            <Avatar>
                                <BeachAccessIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Education"/>
                        <ListItemText className={classes.text}>$13</ListItemText>
                    </ListItem>
                {/* ))} */}
                </List>
            </Panel>

            <Panel>
                <p>
                The input range must be a linear series of numbers. The output range
                can be any value type supported by Framer Motion: numbers, colors,
                shadows, etc.
                </p>
            </Panel>

            <Panel>
                <p>
                Creates a MotionValue that, when set, will use a spring animation to
                animate to its new state.
                </p>
            </Panel>
        </div>
    </Tabs>
    );
}