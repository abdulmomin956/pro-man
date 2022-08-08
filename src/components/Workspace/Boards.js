import React from 'react';
import { useParams } from 'react-router-dom'

const Boards = () => {
    const { workspaceID } = useParams()
    console.log(workspaceID);
    return (
        <div>
            this is board setting page
        </div>
    );
};

export default Boards;