import React from 'react';
import { Menu, MenuItem, Paper } from '@material-ui/core';
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
    const classes = useStyle()
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClose = () => {
        setAnchorEl(null);
    };
    const editItem = (id) => {
        console.log('edit', id)
    }
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
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
                                <button onClick={handleClick}> <svg onClick={() => editItem(card.id)} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                </svg></button>

                                <div >
                                    <Menu

                                        id="simple-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                    >
                                        <div  >
                                            <button className='block ml-auto mx-2' onClick={handleClose}>X</button>
                                        </div>
                                        <p className='text-center mb-2'>  </p>



                                        <div className={classes.cardwidth}>
                                            <MenuItem>Add Card...</MenuItem>
                                            <MenuItem >Copy List...</MenuItem>
                                            <MenuItem >Move List...</MenuItem>
                                            <MenuItem >Watch</MenuItem>

                                            <p className='mx-4 my-4'>Automation</p>
                                            <MenuItem >When a card is added to the list</MenuItem>
                                            <MenuItem >Evrey day, sort list by..</MenuItem>
                                            <MenuItem >Evrey Monday, sort list by..</MenuItem>
                                            <MenuItem >Create a custom rule</MenuItem>

                                            <MenuItem >Move all cards in this list..</MenuItem>
                                            <MenuItem  >Achive this list..</MenuItem>
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