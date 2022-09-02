import React, { useContext, useState } from 'react';
import { Typography, InputBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import storeApi from '../../../utils/storeApi';
const useStyle = makeStyles((theme) => ({
    editableTitleContainer: {
        margin: theme.spacing(1),
        padding: theme.spacing(1, 1, 1, 1),
        display: 'flex'
    },
    card: {
        margin: theme.spacing(1, 0, 0, 0),
        // paddingBottom: theme.spacing(1),
        padding: theme.spacing(0, 0, 0, 0),
    },

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
        margin: theme.spacing(0, 1, 1, 1),
        padding: theme.spacing(1, 1, 1, 1),
        '&:focus': {
            background: '#FFF',
        },
    },
}));

const Tittle = ({ title, listId }) => {
    const [open, setOpen] = useState(false)
    const classes = useStyle()
    const [newTitle, setNewTitle] = useState(title)
    const { updateListTitle, deleteList } = useContext(storeApi);
    // console.log(newTitle)

    const handleOnChange = (e) => {
        setNewTitle(e.target.value)
    }

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleBlur = () => {
        if (newTitle === "") {
            setNewTitle(title)
            setOpen(!open)
            return
        }
        if (newTitle === title) {
            setOpen(!open)
        }
        else {
            updateListTitle(newTitle, listId)
            setOpen(!open)
        }

    }

    const handleDelete = () => {
        deleteList(listId)
    }
    return (
        <div>

            {open ?
                <div className={classes.card}>
                    <InputBase
                        onChange={handleOnChange}
                        defaultValue={title}
                        autoFocus
                        multiline
                        inputProps={{ className: classes.input }}
                        fullWidth
                        onBlur={handleBlur}
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
                                <p className='text-center mb-2'>  </p>


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
                                    <MenuItem onClick={handleDelete} >Achive this list..</MenuItem>
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