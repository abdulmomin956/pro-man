import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Draggable } from 'react-beautiful-dnd';
import WebIcon from '@material-ui/icons/Web';




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
    // console.log(card)
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
                                <WebIcon />

                            </div>
                        </Paper>
                    </div>
                </div>
            )}

        </Draggable>

    );
};

export default Card;