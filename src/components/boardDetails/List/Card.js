import React, { useContext, useState } from 'react';
import { Menu, MenuItem, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Draggable } from 'react-beautiful-dnd';
import storeApi from '../../../utils/storeApi';

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
    const classes = useStyle()
    const [anchorE2, setAnchorE2] = React.useState(null);
    const [data, setData] = useState({})
    const { deleteCard } = useContext(storeApi);
    // console.log(card)

    const handleClose = () => {
        setAnchorE2(null);
    };
    const editItem = (id) => {
        // console.log('edit', card, "id", id)
        // const filteredUsers = Object.keys(card)
        //     .filter(key => card.id.includes(key))
        //     .reduce((obj, key) => {
        //         obj[key] = card[key];
        //         return obj;
        //     }, {});
        // console.log(filteredUsers)
        // setData(filteredUsers);
        // console.log(card)
        // for (const key in card) {
        //     delete card[key];
        // }
        // setData(card);
        // console.log(card)
        deleteCard(card)
    }

    const handleClick = (event) => {
        setAnchorE2(event.currentTarget);
    };
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
                                <button aria-controls="simple-menu2" aria-haspopup="true" onClick={handleClick}> <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                </svg></button>

                                <div >
                                    <Menu

                                        id="simple-menu2"
                                        anchorEl={anchorE2}
                                        keepMounted
                                        open={Boolean(anchorE2)}
                                        onClose={handleClose}
                                    >
                                        <div  >
                                            <button className='block ml-auto mx-2' onClick={handleClose}>X</button>
                                        </div>
                                        <p className='text-center mb-2'>  </p>



                                        <div className={classes.cardwidth}>
                                            <MenuItem>Add Card...</MenuItem>

                                            <MenuItem >Move all cards in this list..</MenuItem>
                                            <MenuItem onClick={editItem}>Achive this Card..</MenuItem>
                                        </div>
                                    </Menu>
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