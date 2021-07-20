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
  }));

export default function AddTransaction() {
  const classes = useStyles();  
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [cost, setCost] = useState();
  const [category, setCategory] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <Tooltip title="Add Expense" aria-label="add">
            <Fab color="secondary" className={classes.absolute} onClick={handleClickOpen}>
                <AddIcon />
            </Fab>
        </Tooltip>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title" align="center">
              <h3 style={{color: "white", fontFamily: "Arial", backgroundColor: "deeppink", padding: 4,}}>EXPENSE ADDITION FORM</h3>
            </DialogTitle>
            <DialogContent>
              <DialogContentText style={{color: "navy", fontWeight: 'bold'}}>
                  Information
              </DialogContentText>

              <TextField
                id="outlined-number"
                label="Name"
                type="text"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
        />
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
                value={cost}
                onChange={(e) => setCost(e.target.value)}
                className={classes.field}
                label="Cost"
                className={classes.textField}
                type="number"
                variant="outlined"
                
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
                  <MenuItem value="emergency">Meal</MenuItem>
                  <MenuItem value="emergency">Emergency</MenuItem>
                  <MenuItem value="emergency">Other</MenuItem>
                </Select>
              </FormControl>
            </DialogContent>

            <DialogContent>
              <DialogContentText style={{color: "navy", fontWeight: 'bold'}}>
                Additional Details
              </DialogContentText>
              <TextField
                className={classes.field}
                label="Note"
                variant="outlined"
                multiline
                rows={5}
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


