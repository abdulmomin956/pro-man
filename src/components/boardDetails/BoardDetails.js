import React, { useState } from 'react';
import List from './List/List';
import store from '../../utils/store'
import storeApi from '../../utils/storeApi';
import { v4 as uuid } from 'uuid';
import InputContainer from './input/InputContainer';
import { makeStyles } from '@material-ui/core/styles';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const useStyle = makeStyles((theme) => ({
    root: {
        display: 'flex',
        minHeight: '100vh',
        background: '#F5F5F5',
        width: "100%",
        overflow: 'auto'
    },
}));

const BoardDetails = () => {
    const classes = useStyle()
    const [data, setData] = useState(store)

    const addMoreCard = (title, listId) => {
        const newCardId = uuid()
        const newCard = {
            id: newCardId,
            title,
        }
        const list = data.lists[listId]
        list.cards = [...list.cards, newCard]

        const newState = {
            ...data,
            lists: {
                ...data.lists,
                [listId]: list,
            },
        };
        setData(newState);
        // console.log(title, listId)
    }
    const addMoreList = (title) => {
        const newListId = uuid();
        const newList = {
            id: newListId,
            title,
            cards: [],
        };
        const newState = {
            listIds: [...data.listIds, newListId],
            lists: {
                ...data.lists,
                [newListId]: newList,
            },
        };
        setData(newState);
    };

    const onDragEnd = (result) => {
        const { destination, source, draggableId, type } = result;
        console.log('destination', destination, 'source', source, draggableId);

        if (destination) {
            return;
        }

        if (type === 'list') {
            const newListIds = data.listIds;
            newListIds.splice(source.index, 1);
            newListIds.splice(destination.index, 0, draggableId);
            return;
        }

        const sourceList = data.lists[source.droppableId];
        const destinationList = data.lists[destination.droppableId];
        const draggingCard = sourceList.cards.filter(
            (card) => card.id === draggableId
        )[0];

        if (source.droppableId === destination.droppableId) {
            sourceList.cards.splice(source.index, 1);
            destinationList.cards.splice(destination.index, 0, draggingCard);
            const newSate = {
                ...data,
                lists: {
                    ...data.lists,
                    [sourceList.id]: destinationList,
                },
            }
            console.log(newSate)
            setData(newSate)
        }
        else {
            sourceList.cards.splice(source.index, 1);
            destinationList.cards.splice(destination.index, 0, draggingCard);
            const newState = {
                ...data,
                lists: {
                    ...data.lists,
                    [sourceList.id]: sourceList,
                    [destinationList.id]: destinationList,
                },
            };
            setData(newState);
        }
    };

    return (

        <storeApi.Provider value={{ addMoreCard, addMoreList }}>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId='boardDetails' type='list' direction='horizontal'>
                    {(provided) => (
                        <div className={classes.root}
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {data.listIds.map((listId, index) => {
                                const list = data.lists[listId];
                                // prop drilling
                                return < List index={index} data={data} list={list} key={listId} />
                            })}
                            <InputContainer type="list" />
                            {provided.placeholder}
                        </div>
                    )}

                </Droppable>
            </DragDropContext>
        </storeApi.Provider>
    );
};

export default BoardDetails;