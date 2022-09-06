import React from 'react';

const Features = () => {
    return (
        <div >
            <div className='hero'>
                <div class="hero-content text-center">
                    <div class="max-w-[60rem] ">
                        <h1 class="text-3xl text-primary font-bold">AWESOME FEATURES</h1>
                        <p class="py-4 text-secondary text-justify">ProMan is a smart project manajment tools that allows you to monitor your workspace, their real-time value and other useful information for investors like you! Inside the app, you can create your own personal workspace and take a glance at all your boards in just one click!</p>
                    </div>
                </div>
            </div>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  lg:px-12 mb-6'>
                <div className='card mx-auto w-96 bg-white shadow'>
                    <div className='p-6'>
                        <div className='flex gap-x-6'>
                            <img className='w-[25px]' src="https://i.ibb.co/4F1DRzf/chat-speech-bubble-icon-23-2147501656.png" alt="" />
                            <h3 className='text-xl font-bold text-primary'> Real-time Chat</h3>
                        </div>
                        <p className='text-secondary mt-6'>It displays the real-time Chat of any cryptocurrency.</p>

                    </div>
                </div>
                <div className='card mx-auto w-96 bg-white shadow'>
                    <div className='p-6'>
                        <div className='flex gap-x-6'>
                            <img className='w-[25px]' src="https://i.ibb.co/HxsGgsp/download-2-1.png" alt="" />
                            <h3 className='text-xl font-bold text-primary'>  Workspace Create</h3>
                        </div>
                        <p className='text-secondary mt-6'>It displays the real-time Chat of any cryptocurrency.</p>

                    </div>
                </div>
                <div className='card mx-auto w-96 bbg-white shadow'>
                    <div className='p-6'>
                        <div className='flex gap-x-6'>
                            <img className='w-[25px]' src="https://i.ibb.co/xXdyXjZ/moodboard-cuadrados-tablero.png" alt="" />
                            <h3 className='text-xl font-bold text-primary'> Boards create</h3>
                        </div>
                        <p className='text-secondary mt-6'>It displays the real-time Chat of any cryptocurrency.</p>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Features;