import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Card, CardContent} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useSelector, useDispatch } from 'react-redux';
import { getTransactions, deleteTransaction } from "../../actions/transactionAction";



const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.success.main,
        padding: theme.spacing(1),
        marginLeft: 75,
    },
}));

export default function CategoryDetailsPage() {
    const { cate } = useParams(); 
    const classes = useStyles();
    const dispatch = useDispatch();
    const state = useSelector((state) => ({
      auth: state.auth,
      errors: state.errors,
      data: state.data
    }))

    console.log(state);

    // load user transactions data at the beginning
    useEffect(() => {
      dispatch(getTransactions(state.auth.user.id));
    }, []);

    // Filter transactions based on each category
    const cateData = state.data.transactions.filter((transaction) => transaction.category === cate);
    console.log(cateData);

    return (            
        <div className={classes.root}>
            <Sidebar />
            <Typography variant='h3'>
                {cate} Page
            </Typography>
            <div>
          {cateData.map((item) => {
            return (
              <Card key={item._id}> 
                <CardContent>
                  <h4>Name: {item.name}</h4>
                  <p>Note: {item.note}</p>
                  <p>Amount: {item.amount}</p>
                  <p>CreatedAt: {item.createdAt}</p>
                  <p>Category: {item.category}</p>
                  <p>Owner: {item.owner}</p>
                  <button onClick={(e) => {
                    e.preventDefault();
                    dispatch(deleteTransaction(item._id))
                  }}>Delete</button>
                  <button>Change</button> 
                </CardContent>
              </Card>
            );
          })}
        </div>


        </div>
    )
}

