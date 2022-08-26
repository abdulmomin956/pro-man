import React from 'react';

const HomeSponcers = () => {
    return (
        <div>
            <div className='flex justify-center gap-2 flex-wrap'>
                <img src="https://images.ctfassets.net/rz1oowkt5gyp/7nR3kQlx8IP5mfCCBTatsy/0b3952a6be3ebb10116d62aa93be7bbb/coinbase.svg" alt="" />
                <img src="https://images.ctfassets.net/rz1oowkt5gyp/6VwRn7PI4zrZo84Uoa8rnt/b0ae3da34916a3ff02d26e2120efe9b8/johnDeere.svg" alt="" />
                <img src="https://images.ctfassets.net/rz1oowkt5gyp/5KdQPApAFJpLMv9AntiNLk/530cef2a4b56ad758c1e91fad5c3e7ac/Grand-Hyatt.svg" alt="" />
                <img src="https://images.ctfassets.net/rz1oowkt5gyp/2zdwHAyV1sdTRtu3VZWrnp/cdabf13fb68d433667812689add7cdc8/Google.svg" alt="" />

            </div>
            <div className='flex justify-center flex-wrap'>
                <img src="https://images.ctfassets.net/rz1oowkt5gyp/1zdBcYqeqkDsLUfggfKFRO/a732e0001ca5153ef7195eea63ff6a3b/Visa.svg" alt="" />
                <p style={{ width: '180px' }}>
                    <img src="https://images.ctfassets.net/rz1oowkt5gyp/2Im844Kon73pvCD2ljoxeL/4073e041eb8eb961a0f9505965dec09b/Zoom.png?w=1200&fm=webp" alt="" />
                </p>
            </div>
            <div className='my-8 pl-20 w-1/2'>
                <h3 className='text-3xl font-bold '>Features to help your team succeed</h3>
                <p className='my-12'>Powering a productive team means using a powerful tool (and plenty of snacks). From meetings and projects to events and goal setting, Trello’s intuitive features give any team the ability to quickly set up and customize workflows for just about anything.</p>
            </div>
        </div>
    );
};

export default HomeSponcers;