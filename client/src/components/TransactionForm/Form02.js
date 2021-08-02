import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import { 
  makeStyles,
  Button, 
  Fab, 
  Tooltip, 
  TextField, 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogContentText, 
  DialogTitle, 
  InputLabel, 
  FormControl, 
  Select,
  Paper, 
  Grid, 
  Typography, 
  ButtonBase,
  Card,
} from '@material-ui/core';
import '../../index.css';
import { addTransaction } from "../../actions/transactionAction";
import { useFormik } from "formik";

import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
    absolute: {
      position: 'absolute',
      bottom: theme.spacing(1),
      right: theme.spacing(1),
    },
    formControl: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 240,
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 240,
    },
    paper: {
      padding: theme.spacing(1),
      maxWidth: 800,
      backgroundColor: theme.palette.secondary.light,
      cursor: 'pointer',
      borderRadius: 16,
  },
  }));

export default function AddTransaction() {
  const classes = useStyles();  

  const dispatch = useDispatch();
  const state = useSelector((state) => ({
    auth: state.auth,
    errors: state.errors,
    data: state.data,
  }));

  const formik = useFormik({
    initialValues: {
      name: "",
      note: "",
      amount: "",
      category: "",
      spentAt: "",
    },
    onSubmit: (values) => {
      dispatch(addTransaction({...values, owner: state.auth.user.id}));
    },
  });
  
  // open action of form 
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        {/* <Tooltip title="Add Expense" aria-label="add">
            <Fab color="secondary" className={classes.absolute} onClick={handleClickOpen}>
                <AddIcon />
            </Fab>
        </Tooltip> */}
        <Card className='add' className={classes.paper} onClick={handleClickOpen}>
          <Grid container xs={12}
              justifyContent="center"
              alignItems="center"
          >
            <Typography variant="h5">
              New Transaction
            </Typography>
          </Grid>
        </Card>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <form onSubmit={formik.handleSubmit} >
                <DialogTitle id="form-dialog-title" align="center">
                  <h3 style={{color: "white", fontFamily: "Arial", backgroundColor: "deeppink", padding: 4}}>EXPENSE ADDITION FORM</h3>
                </DialogTitle>
                <DialogContent>
                  <DialogContentText style={{color: "navy", fontWeight: 'bold'}}>
                      Information
                  </DialogContentText>

                  <TextField
                    id="name"
                    name="name"
                    label="Name"
                    type="text"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    onChange={formik.handleChange}
                  />
                  <TextField
                    variant="outlined"
                    id="spentAt"
                    name="spentAt"
                    label="Date"
                    type="date"
                    defaultValue=""
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={formik.handleChange}
                  />
                </DialogContent>

                <DialogContent>
                  <TextField
                    id="amount"
                    label="Cost"
                    name="amount"
                    className={classes.textField}
                    type="number"
                    variant="outlined"
                    onChange={formik.handleChange}
                  />
                  <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
                    <Select
                      native 
                      id="category"
                      name="category"
                      label="Category"
                      onChange={formik.handleChange}
                    >
                      <option value="none">None</option>
                      <option value="entertainment">Entertainment</option>
                      <option value="education">Education</option>
                      <option value="shopping">Shopping</option>
                      <option value="insurance">Insurance</option>
                      <option value="meal">Meal</option>
                      <option value="emergency">Emergency</option>
                      <option value="other">Other</option>
                    </Select>
                  </FormControl>
                </DialogContent>

                <DialogContent>
                  <DialogContentText style={{color: "navy", fontWeight: 'bold'}}>
                    Additional Details
                  </DialogContentText>
                  <TextField
                    id="note"
                    name="note"
                    label="Note"
                    variant="outlined"
                    multiline
                    rows={5}
                    fullWidth
                    onChange={formik.handleChange}
                  />
                </DialogContent>
                
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                      Cancel
                  </Button>
                  <Button type="submit" onClick={handleClose} color="primary">
                      Save
                  </Button>
                </DialogActions>
            </form>
        </Dialog>
    </div>
  );
}


