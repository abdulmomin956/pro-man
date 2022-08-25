import React from 'react';

const StarredBoard = ({ setOpen, open }) => {
    return (
        <div
            tabIndex="0"
            className="dropdown-content menu p-4 bg-base-100 rounded w-80 pt-4 shadow"
        >
            <label

                className="mb-2 h-full w-full  "
                style={{ borderRadius: "0px" }}
            >
                <div>
                    <h1 className="text-md text-center mb-3">
                        Starred Board
                    </h1>
                    <label
                        onClick={() => setOpen(!open)}
                        tabIndex="0"
                        className="btn btn-sm bg-transparent btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                </div>
                <hr />

                <img
                    src="https://a.trellocdn.com/prgb/dist/images/starred-boards-menu/starred-board.cc47d0a8c646581ccd08.svg"
                    alt=""
                />
                <p className="text-sm">
                    Star important boards to access them quickly and easily.
                </p>
            </label>
        </div>
    );
};

export default StarredBoard;