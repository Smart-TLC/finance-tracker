import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    fab: {
      margin: theme.spacing(2),
    },
    absolute: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(3),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

export default function AddTransaction() {
  const classes = useStyles();  
  const [open, setOpen] = useState(false);
  const [type, setType] = useState('');
  const [amount, setAmount] = useState();
  const [category, setCategory] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <Tooltip title="Add" aria-label="add">
            <Fab color="secondary" className={classes.absolute} onClick={handleClickOpen}>
                <AddIcon />
            </Fab>
        </Tooltip>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">ADD NEW TRANSACTION</DialogTitle>
            <DialogContent>
              <DialogContentText >
                  Transaction
              </DialogContentText>
              <FormControl variant="outlined" className={classes.formControl} >
                <InputLabel id="type-label">Type</InputLabel>
                <Select
                  labelId="type-label"
                  id="demo-simple-select-outlined"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  label="Type"
                >
                  <MenuItem value="income">Income</MenuItem>
                  <MenuItem value="expense">Expense</MenuItem>
                </Select>
              </FormControl>
              <TextField
                variant="outlined"
                id="date"
                label="Date"
                type="date"
                defaultValue=""
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </DialogContent>
            <DialogContent>
              <TextField
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className={classes.field}
                label="Amount"
                type="number"
                variant="outlined"
                required
              />
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  label="Category"
                >
                  <MenuItem value="entertianment">Entertainment</MenuItem>
                  <MenuItem value="education">Education</MenuItem>
                  <MenuItem value="shopping">Shopping</MenuItem>
                  <MenuItem value="insurance">Insurance</MenuItem>
                  <MenuItem value="emergency">Emergency</MenuItem>
                </Select>
              </FormControl>
            </DialogContent>
            <DialogContent>
              <DialogContentText>
                Additional Details
              </DialogContentText>
              <TextField
                className={classes.field}
                label="Note"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
              />
            </DialogContent>
            
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                  Cancel
              </Button>
              <Button onClick={handleClose} color="primary">
                  Save
              </Button>
            </DialogActions>
        </Dialog>
    </div>
  );
}
