import React from 'react';

const UsingProman = ({upTopic}) => {
    return (
        <div>
            {   (upTopic === "How to do something") &&
                <div>
                    <h1>Getting help from the Atlassian Community</h1>
                    <p>Ask questions or browse</p>
                </div>
            }
            
        </div>
    );
};

export default UsingProman;