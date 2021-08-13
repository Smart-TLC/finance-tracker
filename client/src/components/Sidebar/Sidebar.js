import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Drawer, AppBar, Toolbar, CssBaseline, IconButton,
  Avatar, Snackbar, Modal, Backdrop, Fade, Typography, Grid,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import WarningIcon from '@material-ui/icons/Warning';
import {motion} from 'framer-motion';
import Lists from './Lists';
import UserButton from './UserButton';
const drawerWidth = 215;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: theme.palette.secondary.dark,
  },
  menuButton: {
    marginRight: 15,
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    cursor: 'pointer',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
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
}));

export default function Sidebar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [state, setState] = useState({
    opening: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, opening } = state;
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
      setState({opening: false, ...newState});
      setHack(true);
      setCount(0);
    } else {
      setState({opening: true, ...newState});
      setMess(message[count]);
      setCount(count+1);
    }
  };

  const handleClose = () => {
    setState({ ...state, opening: false });
    setHack(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={classes.appBar}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(!open)}
            edge="start"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
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
            open={opening}
            onClose={handleClose}
            autoHideDuration={1500}
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
          <UserButton />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <Avatar/>
        </div>
        <Lists />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
    </div>
  );
}
