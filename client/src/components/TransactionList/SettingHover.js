import React from 'react';
import {
    ButtonGroup,
    IconButton,
    Grid,
    Slide,
    Zoom,
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { deleteTransaction, updateTransaction } from "../../actions/transactionAction";
import { useDispatch } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';

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
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
    setAnchorEl(null);
    };

    const dispatch = useDispatch();

    const open = Boolean(anchorEl);

    return (
    <div>
    <Grid item>
        <Zoom
            id="mouse-over-popover"
            in={!open}
            unmountOnExit
        >
            <IconButton 
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen} 
            >
                <MoreVertIcon/>
            </IconButton>
        </Zoom>
        <Slide
            id="mouse-over-popover"
            in={open}
            unmountOnExit
            direction="right"
        >
            <ButtonGroup
                orientation="vertical"
                color="primary"
                variant="contained"
                className={classes.btnColor}
                onMouseLeave={handlePopoverClose}
            > 
                <IconButton onClick={handlePopoverClose}>
                    <EditOutlinedIcon fontSize="small" />
                </IconButton>
                <IconButton 
                    onClick={(e) => {
                        e.preventDefault()
                        dispatch(deleteTransaction(_id))
                    }}>
                    <DeleteOutlinedIcon fontSize="small"/>
                </IconButton>
            </ButtonGroup>
        </Slide>
    </Grid>
    </div>
    );
}