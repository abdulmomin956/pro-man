import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Draggable } from 'react-beautiful-dnd';



const useStyle = makeStyles((theme) => ({
    card: {
        padding: theme.spacing(1, 1, 1, 2),
        margin: theme.spacing(1),
    },
}));

const Card = ({ card, index }) => {
    const classes = useStyle()
    // console.log(card)
    return (
        <Draggable key={card.id} draggableId={card.id} index={index} >
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}

                >
                    <Paper className={classes.card}>{card.title}</Paper>
                </div>
            )}

        </Draggable>

    );
};

export default Card;