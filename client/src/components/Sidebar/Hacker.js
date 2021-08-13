import React, {useState} from 'react';
import {
  Snackbar,
  Modal,
  Backdrop,
  Fade,
  Typography,
  Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import WarningIcon from '@material-ui/icons/Warning';
import {motion} from 'framer-motion';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.error.main,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(120, 140, 130),
  },
  title: {
    flexGrow: 1,
    cursor: 'pointer',
  }
}));

export default function PositionedSnackbar() {
  const classes = useStyles();
  const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;
  const [mess, setMess] = useState('');
  const [count, setCount] = useState(0);
  const [hack, setHack] = useState(false);
  const message =  [
    'đừng kéo nữa bạn ơi!!',
    'thả tao ra thằng lồn',
    'disme tao hack máy mày bây giờ >_<',
  ]

  const handleClick = (newState) => () => {
    if (count === 3) {
      setState({open: false, ...newState});
      setHack(true);
      setCount(0);
    } else {
      setState({open: true, ...newState});
      setMess(message[count]);
      setCount(count+1);
    }
  };

  const handleClose = () => {
    setState({ ...state, open: false });
    setHack(false);
  };
  
  return (
    <div>
      {/* {buttons} */}
      <motion.h2
        drag
        dragConstraints={{left:0, top:0, right:0, bottom:0}}
        dragElastic={1}
        onDragEnd={handleClick({ vertical: 'top', horizontal: 'center' })}
        className={classes.title}
      >
        Finance Tracker
      </motion.h2>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        autoHideDuration={2000}
        message={mess}
        key={vertical + horizontal}
      />
       <Modal
        className={classes.modal}
        open={hack}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 1000,
        }}
      >
        <Fade in={hack}>
          <div className={classes.paper}>
            <Grid container 
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item container justifyContent="center">
                <WarningIcon fontSize="large" color="warning"/> 
                <Typography variant="h4"> WARNING</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5">You have been hacked!!</Typography>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
