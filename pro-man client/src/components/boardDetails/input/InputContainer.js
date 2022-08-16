import React, { useState } from 'react';
import { Paper, Typography, Collapse } from '@material-ui/core';
import { alpha, makeStyles } from '@material-ui/core/styles';
import InputCard from './InputCard';


const useStyle = makeStyles((theme) => ({
    root: {
        width: '300px',
        marginTop: theme.spacing(1),
    },
    addCard: {
        padding: theme.spacing(1, 1, 1, 2),
        margin: theme.spacing(0, 1, 1, 1),
        background: '#EBECF0',
        '&:hover': {
            backgroundColor: alpha('#000', 0.25),
        },
    },
}));

const InputContainer = ({ data, listId, type }) => {
    const [open, setOpen] = useState(false)

    const classes = useStyle()

    return (
        <div className={classes.root}>
            <Collapse in={open}>
                {/* prop drillling */}
                <InputCard setOpen={setOpen} data={data} listId={listId} type={type} />
            </Collapse>

            <Collapse in={!open}>
                <Paper className={classes.addCard} elevation={0} onClick={() => setOpen(!open)}>
                    <Typography> {type === 'card' ? '+ Add a Card' : '+ Add another List'}</Typography>
                </Paper>
            </Collapse>


        </div>
    );
};

export default InputContainer;