import { CssBaseline, Paper } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tittle from './Tittle';
import Card from './Card';
import InputContainer from '../input/InputContainer';
import { Droppable } from 'react-beautiful-dnd';


const useStyle = makeStyles((theme) => ({
    root: {
        width: '300px',
        backgroundColor: '#EBECF0',
        marginLeft: theme.spacing(1),
    },
    cardContainer: {
        marginTop: theme.spacing(4),
    }

}));

const List = ({ data, list }) => {
    const classes = useStyle()
    // const lists = list.cards
    // console.log(lists);
    return (
        <div>
            <Paper className={classes.root}>
                <CssBaseline />
                {/* prop drilling  */}
                <Tittle title={list.title} listId={list.id} />
                <Droppable droppableId={list.id}>
                    {(provided) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className={classes.cardContainer}
                        >
                            {list.cards.map((card, index) => (
                                <Card key={card.id} card={card} index={index} />
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                <InputContainer data={data} listId={list.id} type='card' />
            </Paper>
        </div>
    );
};

export default List;