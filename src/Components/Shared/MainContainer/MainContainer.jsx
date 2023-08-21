import React from 'react';

const MainContainer = ({children}) => {
    return (
        <section className='h-screen flex flex-col justify-center items-center px-6 md:px-20'>
            {children}
        </section>
    );
};

export default MainContainer;