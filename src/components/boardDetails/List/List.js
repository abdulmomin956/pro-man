import { CssBaseline, Paper } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tittle from './Tittle';
import Card from './Card';
import InputContainer from '../input/InputContainer';


const useStyle = makeStyles((theme) => ({
    root: {
        width: '300px',
        backgroundColor: '#EBECF0',
        marginLeft: theme.spacing(1),
    },

}));

const List = ({ list }) => {
    const classes = useStyle()
    const lists = list.cards
    // console.log(lists);
    return (
        <div>
            <Paper className={classes.root}>
                <CssBaseline />
                {/* prop drilling  */}
                <Tittle title={list.title} />
                {lists.map((card) =>
                    // prop drilling 
                    < Card key={card.id} card={card} />
                )}
                <InputContainer listId={list.id} />
            </Paper>
        </div>
    );
};

export default List;