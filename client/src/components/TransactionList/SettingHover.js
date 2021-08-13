import React, { useState } from "react";
import { ButtonGroup, IconButton, Grid, Slide, Snackbar } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import MuiAlert from '@material-ui/lab/Alert';
import { deleteTransaction } from "../../actions/transactionAction";
import { useDispatch } from "react-redux";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function SettingHover(props) {
  const _id = props._id;
  const [open, setOpen] = useState(false);
  const [openSave, setOpenSave] = React.useState(false);

  const handlePopover = () => {
    setOpen(!open);
  };

  const handleOff = () => {
    setOpenSave(true);
  };

  const dispatch = useDispatch();

  return (
    <div>
      <Grid item container direction="row">
        <IconButton
          aria-owns={open ? "mouse-over-popover" : undefined}
          aria-haspopup="true"
          onClick={handlePopover}
        >
          <MoreVertIcon />
        </IconButton>
        <Slide id="mouse-over-popover" in={open} unmountOnExit direction="left">
          <ButtonGroup
            color="primary"
            onMouseLeave={handlePopover}
            size="medium"
            fullHeight={true}
          >
            <IconButton
              onClick={(e) => {
                e.preventDefault();
                props.handleFormOpen(_id);
              }}
            >
              <EditOutlinedIcon fontSize="" />
            </IconButton>
            <IconButton
              onClick={(e) => {
                e.preventDefault();
                dispatch(deleteTransaction(_id));
                setOpenSave(true);
              }}
            >
              <DeleteOutlinedIcon fontSize="" />
            </IconButton>
          </ButtonGroup>
        </Slide>
        <Snackbar open={openSave} autoHideDuration={2000} onClose={handleOff}>
          <Alert onClose={handleOff} severity="success">
            Succesfully Deleted
          </Alert>
        </Snackbar>
      </Grid>
    </div>
  );
}
