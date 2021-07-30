import React from 'react';
import {
    ButtonGroup,
    IconButton,
    Grid,
    Slide,
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
    <Grid item container 
        direction="row"
    >
            <IconButton 
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onClick={handlePopoverOpen} 
            >
                <MoreVertIcon/>
            </IconButton> 
        <Slide
            id="mouse-over-popover"
            in={open}
            unmountOnExit
            direction="left"
        >
            <ButtonGroup
                color="primary"
                onMouseLeave={handlePopoverClose}
                size='large'
            > 
                <IconButton onClick={handlePopoverClose}>
                    <EditOutlinedIcon fontSize="small"/>
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