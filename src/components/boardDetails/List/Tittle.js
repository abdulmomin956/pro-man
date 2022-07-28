import React, { useState } from 'react';
import { Typography, InputBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const useStyle = makeStyles((theme) => ({
    editableTitleContainer: {
        margin: theme.spacing(1),
        display: 'flex'
    },
    editableTitle: {
        flexGrow: 1,
        fontSize: '1.2rem',
        fontWeight: 'bold'
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
    console.log(newTitle)

    const handleOnChange = (e) => {

        setNewTitle(e.target.value)

        // console.log(e.target.value)
    }
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
                    // onBlur={() => setOpen(!open)} 
                    />
                </div>
                :
                <div className={classes.editableTitleContainer}>
                    <Typography onClick={() => setOpen(!open)} className={classes.editableTitle}>{title}</Typography>
                    <MoreHorizIcon />
                </div>
            }

        </div>
    );
};

export default Tittle;