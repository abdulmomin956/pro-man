import React from 'react';
import HomeFooter from '../Home/HomeFooter';
import HomeNav from '../Home/HomeNav';
import ContactForm from './ContactForm';
import Info from './Info';

const UserHelp = () => {
    return (
        <div className='h-screen'>
            <HomeNav></HomeNav>
            <br />
            <h1 className='text-5xl font-bold mt-12 text-center py-16 px-16 bg-primary text-white'>Get help with ProMan</h1>
            <Info></Info>
            <ContactForm></ContactForm>
            <br /><br />
            <HomeFooter></HomeFooter>            
        </div>
    );
};

export default UserHelp;