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
    // console.log(newTitle)

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
                        onBlur={() => setOpen(!open)}
                    />
                </div>
                :
                <div className={classes.editableTitleContainer}>
                    <Typography onClick={() => setOpen(!open)} className={classes.editableTitle}>{title}</Typography>
                    <div className='dropdown dropdown-right' >

                        <label tabIndex="0" className="block w-6 h-6 mr-2 text-gray-400 transform hover:scale-110 hover:bg-gray-700 rounded-sm">
                            <MoreHorizIcon
                                pointerEvents="none"
                                className="w-full h-full"
                            />
                        </label>

                        <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Archive</a></li>
                        </ul>
                    </div>
                </div>
            }

        </div>
    );
};

export default Tittle;