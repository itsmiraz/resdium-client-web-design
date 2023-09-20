import React from 'react';

const MainContainer = ({children}) => {
    return (
        <section className='h-full z-10 lg:h-full  flex flex-col justify-center items-center px-6 lg:py-32 py-10 md:py-20 md:px-20'>
            {children}
        </section>
    );
};

export default MainContainer;