import React from 'react';

const ChooseView = () => {
    return (
        <div className="hero lg:px-20">
            <div className="hero-content flex-col lg:flex-row ">
                <img src="https://images.ctfassets.net/rz1oowkt5gyp/4gcdup5C0Z1rQEQDGfeWth/71156837ac2d75293bf0eec8010aeb6e/view.svg" className="max-w-sm  shadow" alt='' />
                <div className='lg:ml-20'>
                    <p>CHOOSE A VIEW</p>
                    <h1 className="text-3xl font-bold ">The board is just the beginning</h1>
                    <p className="py-6 text-justify">Lists and cards are the building blocks of organizing work on a Trello board. Grow from there with task assignments, timelines, productivity metrics, calendars, and more..</p>

                    <div className="collapse ">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title text-xl font-bold">
                            + Learn More
                        </div>
                        <div className="collapse-content">
                            <p>You and your team can start up a Trello board in seconds. With the ability to view board data from many different angles, the entire team stays up-to-date in the way that suits them best:</p>
                            <ul>
                                <li>Use a Timeline view for project planning</li>
                                <li>Use a Timeline view for project planning</li>
                                <li>Use a Timeline view for project planning</li>
                                <li>Use a Timeline view for project planning</li>
                                <li>Use a Timeline view for project planning</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseView;