import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Button,
  Menu, 
  MenuItem,
  ListItemIcon,
  Typography,
  ListItemText,

} from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ExpandMore from '@material-ui/icons/ExpandMore';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

import { logoutUser } from "../../actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import {SWITCH_MODE} from '../../actions/types';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);


export default function UserButton() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();
  
  const state = useSelector((state) => ({
    auth: state.auth,
    errors: state.errors,
    data: state.data,
  }));

  return (
    <div>
      <Button
        onClick={handleClick}
      >
        <PermIdentityIcon />
        <Typography variant='subtitle1'>
            {state.auth.user.name}
        </ Typography>
        <ExpandMore />
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem onClick={(e) => {
          e.preventDefault();
          dispatch({type: SWITCH_MODE, payload: !state.auth.setting.darkMode})
        }}>
          {state.auth.setting.darkMode ? (
            <ListItemIcon>
            <WbSunnyIcon fontSize="small" />
          </ListItemIcon>
          ) : (
            <ListItemIcon>
              <Brightness2Icon fontSize="small" />
            </ListItemIcon>
          )}
          {state.auth.setting.darkMode ? (
            <ListItemText primary="Light Mode"/>
          ) : (
            <ListItemText primary="Dark Mode"/>
          )}
        </StyledMenuItem>
        <StyledMenuItem onClick={(e) => {
            e.preventDefault();
            dispatch(logoutUser());
          }}> 
          <ListItemIcon>
            <ExitToAppIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Log out" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
