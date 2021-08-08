import React, { useState } from "react";
import { ButtonGroup, IconButton, Grid, Slide } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import { deleteTransaction } from "../../actions/transactionAction";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
  },
  btnColor: {
    backgroundColor: theme.palette.secondary.dark,
  },
}));

export default function SettingHover(props) {
  const _id = props._id;
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handlePopover = () => {
    setOpen(!open);
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
            // variant="container"
            // className={classes.btnColor}
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
              }}
            >
              <DeleteOutlinedIcon fontSize="" />
            </IconButton>
          </ButtonGroup>
        </Slide>
      </Grid>
    </div>
  );
}
