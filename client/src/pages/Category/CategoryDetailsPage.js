import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Card, CardContent} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTransaction } from "../../actions/transactionAction";
import CategoryItem from '../../components/CategoryList/CategoryItem';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
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
                <CategoryItem item = {item}/>
              })}
            </div>        
        </div>
    )
}

