import React from 'react';

const HomeDetails = () => {
    return (
        <div>
            <div class="hero lg:px-20 my-6">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://images.ctfassets.net/rz1oowkt5gyp/4B1RPRoUspHQXgYCRAndBX/466053fb07ff2cdc0ae06649d5f30d8f/card-back.svg" class="max-w-sm  shadow" alt='' />
                    <div className='lg:mr-20'>
                        <p>DIVE INTO THE DETAILS</p>
                        <h1 class="text-3xl font-bold ">Cards contain everything you need</h1>
                        <p class="py-6">Proman cards are your portal to more organized work—where every single part of your task can be managed, tracked, and shared with teammates. Open any card to uncover an ecosystem of checklists, due dates, attachments, conversations, and more.</p>

                        <div class="collapse ">
                            <input type="checkbox" class="peer" />
                            <div class="collapse-title text-xl font-bold">
                                + Learn More
                            </div>
                            <div class="collapse-content">
                                <p>Spin up a Pro-man card with a click, then uncover everything it can hold. Break down bigger card tasks into steps with file attachment previews, reminders, checklists and comments—emoji reactions included! Plus, gain powerful perspective by seeing all cards by list and status at the board level.</p>
                                <p className='my-4'>Your team can:</p>
                                <ul>
                                    <li>Manage deadlines</li>
                                    <li>Provide and track feedback</li>
                                    <li>Assign tasks and hand off work</li>
                                    <li>Connect work across apps</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hero lg:px-20">
                <div class="hero-content flex-col lg:flex-row ">
                    <img src="https://images.ctfassets.net/rz1oowkt5gyp/1zR830Rgv5hpZbwuiyAFkq/326d72f720d090342f0744a8deb8b727/automation.png?w=1200&fm=webp" class="max-w-sm  shadow" alt='' />
                    <div className='lg:ml-20'>
                        <p>MEET YOUR NEW BUTLER</p>
                        <h1 class="text-3xl font-bold ">No-code automation</h1>
                        <p class="py-6">Let the robots do the work—so your team can focus on work that matters. With Pro-man’s built-in automation, Butler, reduce the number of tedious tasks (and clicks) on your project board by harnessing the power of automation across your entire team.</p>

                        <div class="collapse ">
                            <input type="checkbox" class="peer" />
                            <div class="collapse-title text-xl font-bold">
                                + Learn More
                            </div>
                            <div class="collapse-content">
                                <p>You and your team can start up a Pro-man board in seconds. With the ability to view board data from many different angles, the entire team stays up-to-date in the way that suits them best:</p>
                                <p className='my-6'>Butler uses natural language commands to automate just about any task in Pro-man:</p>
                                <ul>
                                    <li>Automate common actions like moving lists</li>
                                    <li>Create custom buttons to build process quickly</li>
                                    <li>Surface upcoming deadlines to the team</li>
                                    <li>Use a Timeline view for project planning</li>
                                    <li>Schedule teammate assignments, and more!</li>
                                </ul>
                                <a className='underline ' href="" alt=''>Learn more about Butler Automation</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hero lg:px-20 my-6">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://images.ctfassets.net/rz1oowkt5gyp/17AXIwjhGkuPEpvcWzwoIJ/e6e767d503809a89be375846ac81bbef/power-ups.png?w=1200&fm=webp" class="max-w-sm  shadow" alt='' />
                    <div className='lg:mr-20'>
                        <p>POWER-UPS</p>
                        <h1 class="text-3xl font-bold ">Integrate top work tools</h1>
                        <p class="py-6">Easily connect the apps your team already uses into your Pro-man workflow, or add a Power-Up that helps fine-tune one specific need. With hundreds of Power-Ups available, your team’s workflow wishes are covered.</p>

                        <div class="collapse ">
                            <input type="checkbox" class="peer" />
                            <div class="collapse-title text-xl font-bold">
                                + Learn More
                            </div>
                            <div class="collapse-content">
                                <p>Spin up a Pro-man card with a click, then uncover everything it can hold. Break down bigger card tasks into steps with file attachment previews, reminders, checklists and comments—emoji reactions included! Plus, gain powerful perspective by seeing all cards by list and status at the board level.</p>
                                <p className='my-4'>Your team can:</p>
                                <ul>
                                    <li>Manage deadlines</li>
                                    <li>Provide and track feedback</li>
                                    <li>Assign tasks and hand off work</li>
                                    <li>Connect work across apps</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomeDetails;