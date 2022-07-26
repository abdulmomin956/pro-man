import React, { useState } from 'react';
import List from './List/List';
import store from '../../utils/store'
import storeApi from '../../utils/storeApi';
import { v4 as uuid } from 'uuid';
import InputContainer from './input/InputContainer';
import { makeStyles } from '@material-ui/core/styles';
import { DragDropContext } from 'react-beautiful-dnd';

const useStyle = makeStyles((theme) => ({
    root: {
        display: 'flex',
        minHeight: '100vh',
        background: 'green',
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
        console.log(data)
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

    // const onDragEnd = (result) => {
    //     const { destination, source, draggableId } = result;
    //     console.log('destination', destination, 'source', source, draggableId);

    //     if (destination) {
    //         return;
    //     }

    //     const sourceList = data.lists[source.droppableId];
    //     const destinationList = data.lists[destination.droppableId];
    //     const draggingCard = sourceList.cards.filter(
    //         (card) => card.id === draggableId
    //     )[0];

    //     if (source.droppableId === destination.droppableId) {
    //         sourceList.cards.splice(source.index, 1);
    //         destinationList.cards.splice(destination.index, 0, draggingCard);
    //         const newSate = {
    //             ...data,
    //             lists: {
    //                 ...data.lists,
    //                 [sourceList.id]: destinationList,
    //             },
    //         }
    //         console.log(newSate)
    //         setData(newSate)
    //     }
    // }

    return (

        <storeApi.Provider value={{ addMoreCard, addMoreList }}>
            <DragDropContext >
                <div className={classes.root}>
                    {data.listIds.map((listId) => {
                        const list = data.lists[listId];
                        // prop drilling
                        return < List type="list" data={data} list={list} key={listId} />
                    })}
                    <InputContainer type="list" />
                </div>
            </DragDropContext>
        </storeApi.Provider>
    );
};

export default BoardDetails;