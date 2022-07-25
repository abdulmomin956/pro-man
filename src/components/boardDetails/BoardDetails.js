import React, { useState } from 'react';
import List from './List/List';
import store from '../../utils/store'
import StoreApi from '../../utils/StoreApi';
import { v4 as uuid } from 'uuid';

const BoardDetails = () => {
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
    return (
        <StoreApi.Provider value={{ addMoreCard }}>
            <div>
                {data.listIds.map((listId) => {
                    const list = data.lists[listId];
                    // console.log(list.cards)
                    // prop drilling
                    return < List list={list} key={listId} />
                })}

            </div>
        </StoreApi.Provider>
    );
};

export default BoardDetails;