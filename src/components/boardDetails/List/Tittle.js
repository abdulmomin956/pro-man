import React, { useState } from 'react';
import { Typography, InputBase, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
// import ClearIcon from "@material-ui/icons/Clear";
import Divider from '@material-ui/core/Divider';
const useStyle = makeStyles((theme) => ({
    editableTitleContainer: {
        margin: theme.spacing(1),
        display: 'flex'
    },
    // editableTitleContainer2: {
    //     margin: theme.spacing(1),
    //     display: 'flex',
    //     justifyContent: 'center'
    // },

    editableTitle: {
        flexGrow: 1,
        fontSize: '1.2rem',
        fontWeight: 'bold'
    },
    cardwidth: {
        width: "300px",
    },
    input: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        margin: theme.spacing(1),
        '&:focus': {
            background: '#ddd',
        },
    },
}));

const Tittle = ({ title }) => {
    const [open, setOpen] = useState(false)
    const classes = useStyle()
    const [newTitle, setNewTitle] = useState(title)
    // console.log(newTitle)

    const handleOnChange = (e) => {

        setNewTitle(e.target.value)

        // console.log(e.target.value)
    }

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>

            {open ?
                <div>
                    <InputBase
                        onChange={handleOnChange}
                        value={newTitle}
                        autoFocus
                        inputProps={{ className: classes.input }}
                        fullWidth
                        onBlur={() => setOpen(!open)}
                    />
                </div>
                :
                <div className={classes.editableTitleContainer}>
                    <Typography onClick={() => setOpen(!open)} className={classes.editableTitle}>{title}</Typography>
                    <div >
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            <MoreHorizIcon />
                        </Button>
                        <div >
                            <Menu

                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <div  >
                                    <button className='block ml-auto mx-2' onClick={handleClose}>X</button>
                                </div>
                                <p className='text-center mb-2'> List Actions</p>


                                <Divider />
                                <div className={classes.cardwidth}>
                                    <MenuItem>Add Card...</MenuItem>
                                    <MenuItem >Copy List...</MenuItem>
                                    <MenuItem >Move List...</MenuItem>
                                    <MenuItem >Watch</MenuItem>
                                    <Divider />
                                    <p className='mx-4 my-4'>Automation</p>
                                    <MenuItem >When a card is added to the list</MenuItem>
                                    <MenuItem >Evrey day, sort list by..</MenuItem>
                                    <MenuItem >Evrey Monday, sort list by..</MenuItem>
                                    <MenuItem >Create a custom rule</MenuItem>
                                    <Divider />
                                    <MenuItem >Move all cards in this list..</MenuItem>
                                    <MenuItem >Achive all cards in this list..</MenuItem>
                                </div>
                            </Menu>
                        </div>
                    </div>
                </div>
            }

        </div>
    );
};

export default Tittle;