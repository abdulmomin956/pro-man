import React, { useState } from 'react';
import List from './List/List';
import store from '../../utils/store'
import storeApi from '../../utils/storeApi';
import { v4 as uuid } from 'uuid';
import InputContainer from './input/InputContainer';
import { makeStyles } from '@material-ui/core/styles';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useQuery } from '@tanstack/react-query';
import Loading from '../shared/Loading';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setSaveList } from '../../global-state/actions/reduxActions';



const useStyle = makeStyles((theme) => ({
    root: {
        display: 'flex',
        minHeight: '100vh',
        width: "100%",
        overflow: 'auto'
    },
}));

const BoardDetails = () => {
    const board1 = useParams()
    const classes = useStyle()
    const [data, setData] = useState({})
    const saveList = useSelector(state => state.saveList)
    const currentBoards = useSelector(state => state.currentWorkspaceBoards)
    const board = currentBoards.filter(board => board._id === board1.id)
    const dispatch = useDispatch();
    // console.log(currentBoards);

    // console.log(board1);
    // console.log(data);



    const background = {
        background: `url(${board[0]?.boardBg})center center/cover`

    }

    const allLists = useQuery(['allLists', board1.id], () => fetch(`https://morning-coast-54182.herokuapp.com/list/b/${board1.id}`).then(res => res.json()))



    // localStorage.setItem('data', JSON.stringify(data))
    // console.log(data);
    if (saveList) {
        dispatch(setSaveList(false))
        const saveData = async () => {
            const res = await axios.post(`https://morning-coast-54182.herokuapp.com/list/b/${board1.id}`, data)
            console.log(res);
            if (res.status === 200) {

                allLists.refetch();
            }
        }

        saveData();
    }


    useEffect(() => {
        if (allLists?.data) {
            setData(allLists.data.list)
        }
    }, [allLists?.data])

    if (allLists.isLoading) {
        return <Loading />
    }

    // console.log(allLists.data.list);




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
        dispatch(setSaveList(true))
        // console.log(newState)
        //     cardData.push(newState);
        //     localStorage.setItem("cardData", JSON.stringify(cardData));
        //     setData(newState);
    }


    const addMoreList = (title) => {
        const newListId = uuid()
        // console.log(data);
        const newList = {
            id: newListId,
            title,
            cards: [],
        };
        const newState = {
            listIds: [...data.listIds, newListId],
            lists: {
                ...data?.lists,
                [newListId]: newList,
            },
        };
        setData(newState);
        dispatch(setSaveList(true))
        // console.log(newState)
    };

    const updateListTitle = (title, listId) => {
        const list = data.lists[listId];
        list.title = title;

        const newState = {
            ...data,
            lists: {
                ...data.lists,
                [listId]: list,
            },
        };
        setData(newState);
    };

    const onDragEnd = (result) => {
        // console.log(result)
        const { destination, source, draggableId, type } = result;
        // console.log('destination', destination, 'source', source, draggableId);

        if (!result.destination) {
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
            // console.log(newSate)
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

        <storeApi.Provider value={{ addMoreCard, addMoreList, updateListTitle }}>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId='app' type='list' direction='horizontal'>
                    {(provided) => (
                        <div
                            style={background}
                            className={classes.root}
                            ref={provided.innerRef}
                            {...provided.droppableProps}

                        >
                            {data?.listIds?.map((listId, index) => {
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