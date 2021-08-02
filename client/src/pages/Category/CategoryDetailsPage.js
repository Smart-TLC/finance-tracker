// import React, { useEffect } from 'react'
// import { useParams } from 'react-router-dom';
// import { Card, CardContent} from "@material-ui/core";
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Sidebar from '../../components/Sidebar/Sidebar';
// import { useSelector, useDispatch } from 'react-redux';
// import { getTransactions, deleteTransaction } from "../../actions/transactionAction";



// const useStyles = makeStyles((theme) => ({
//     root: {
//         backgroundColor: theme.palette.success.main,
//         padding: theme.spacing(1),
//         marginLeft: 75,
//     },
// }));

// export default function CategoryDetailsPage() {
//     const { cate } = useParams(); 
//     const classes = useStyles();
//     const dispatch = useDispatch();
//     const state = useSelector((state) => ({
//       auth: state.auth,
//       errors: state.errors,
//       data: state.data
//     }))

//     console.log(state);

//     // load user transactions data at the beginning
//     useEffect(() => {
//       dispatch(getTransactions(state.auth.user.id));
//     }, []);

//     // Filter transactions based on each category
//     const cateData = state.data.transactions.filter((transaction) => transaction.category === cate);
//     console.log(cateData);

//     return (            
//         <div className={classes.root}>
//             <Sidebar />
//             <Typography variant='h3'>
//                 {cate} Page
//             </Typography>
//             <div>
//           {cateData.map((item) => {
//             return (
//               <Card key={item._id}> 
//                 <CardContent>
//                   <h4>Name: {item.name}</h4>
//                   <p>Note: {item.note}</p>
//                   <p>Amount: {item.amount}</p>
//                   <p>CreatedAt: {item.createdAt}</p>
//                   <p>Category: {item.category}</p>
//                   <p>Owner: {item.owner}</p>
//                   <button onClick={(e) => {
//                     e.preventDefault();
//                     dispatch(deleteTransaction(item._id))
//                   }}>Delete</button>
//                   <button>Change</button> 
//                 </CardContent>
//               </Card>
//             );
//           })}
//         </div>


//         </div>
//     )
// }

import React from 'react'
import { Tabs, useTabState, Panel } from '@bumaga/tabs';
import {
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Divider,
    ListItemAvatar,
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
        maxWidth: 200,
        backgroundColor: theme.palette.background.paper,
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

        <Panel>
            <List component="nav" className={classes.root}>
            {/* {ListItemData.map((text, index) => ( */}
                <ListItem button>
                    <ListItemAvatar>
                        <Avatar>
                            <BeachAccessIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Education"/>
                </ListItem>
                <Divider/>
                <ListItem button>
                    <ListItemAvatar>
                        <Avatar>
                            <BeachAccessIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Education"/>
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemAvatar>
                        <Avatar>
                            <BeachAccessIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Education"/>
                </ListItem>
                <Divider />
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