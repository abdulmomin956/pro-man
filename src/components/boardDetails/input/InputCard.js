import React, { useContext, useState } from 'react';
import { Paper, InputBase, Button, IconButton } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import { alpha, makeStyles } from '@material-ui/core/styles';
import storeApi from '../../../utils/storeApi';


const useStyle = makeStyles((theme) => ({
    card: {
        margin: theme.spacing(0, 1, 1, 1),
        paddingBottom: theme.spacing(4),
        padding: theme.spacing(1, 1, 1, 0),
    },
    input: {
        margin: theme.spacing(1),
    },
    btnConfirm: {
        background: '#5AAC44',
        color: '#fff',
        '&:hover': {
            background: alpha('#5AAC44', 0.75),
        },
    },
    confirm: {
        margin: theme.spacing(0, 1, 1, 1),
    },
}));

const InputCard = ({ setOpen, data, listId }) => {
    const classes = useStyle()
    const { addMoreCard } = useContext(storeApi)

    const [cardTitle, setCardTitle] = useState('')
    // const handleOnChange = (e) => {
    //     setCardTitle(e.target.value);
    //     console.log(cardTitle)
    // }
    const handleBtnConfirm = () => {
        addMoreCard(cardTitle, listId)
        setCardTitle('')

        console.log(data)

        if (data.listIds) {
            setOpen(false)


        }
    }

    // const handleBlur = () => {
    //     setOpen(false);
    //     setCardTitle('')
    // }
    console.log(cardTitle);

    return (
        <div>
            <div>
                <Paper className={classes.card}>
                    <InputBase
                        onChange={(e) => setCardTitle(e.target.value)}
                        multiline
                        // onBlur={() => setOpen(false)}
                        fullWidth
                        inputProps={{ className: classes.input }}
                        value={cardTitle}
                        placeholder='Enter a title of this card ...' />
                </Paper>
            </div>
            <div className={classes.confirm}>
                <Button className={classes.btnConfirm} onClick={() => handleBtnConfirm()}>Add Card</Button>
                <IconButton onClick={() => setOpen(false)}>
                    <ClearIcon />
                </IconButton>
            </div>
        </div>
    );
};

export default InputCard;