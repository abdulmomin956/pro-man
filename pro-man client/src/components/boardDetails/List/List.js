import { CssBaseline, Paper } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tittle from './Tittle';
import Card from './Card';
import InputContainer from '../input/InputContainer';
import { Draggable, Droppable } from 'react-beautiful-dnd';


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

const List = ({ list, index }) => {

    const classes = useStyle()
    // const lists = list.cards
    // console.log(lists);
    // console.log(data)
    // localStorage.setItem('board-details', JSON.stringify(data))
    // console.log(list);

    return (
        <Draggable draggableId={list.id} index={index}>
            {(provided) => (
                <div {...provided.draggableProps} ref={provided.innerRef}>
                    <Paper className={classes.root} {...provided.dragHandleProps}>
                        <CssBaseline />
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

                        <InputContainer listId={list.id} type="card" />
                    </Paper>
                </div>
            )}
        </Draggable>
    );
};

export default List;