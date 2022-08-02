import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Draggable } from 'react-beautiful-dnd';




const useStyle = makeStyles((theme) => ({
    card: {
        padding: theme.spacing(1, 1, 1, 2),
        margin: theme.spacing(1),
        display: "flex",
        justifyContent: 'space-between'
    },
    // editableTitleContainer: {
    //     margin: theme.spacing(1),
    //     display: 'flex',
    // },

}));


const Card = ({ card, index }) => {

    const deletItem = (id) => {
        // const updetedItems = card.filter((elm) => {
        //     return index === elm.id
        // })
        // localStorage.setItem(updetedItems)
        console.log('delete', id)
    }

    const editItem = (id) => {
        console.log('edit', id)
    }

    const classes = useStyle()
    console.log(card)
    return (
        <Draggable key={card.id} draggableId={card.id} index={index} >
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}

                >
                    <div  >
                        <Paper className={classes.card} >{card.title}
                            <div>
                                <div>
                                    <svg onClick={() => editItem(card.id)} xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                    </svg>
                                </div>
                            </div>
                        </Paper>
                    </div>
                </div>
            )}

        </Draggable>

    );
};

export default Card;