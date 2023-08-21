import React from 'react';

const MainContainer = ({children}) => {
    return (
        <div className='h-fit py-20 flex flex-col justify-center items-center px-20'>
            {children}
        </div>
    );
};

export default MainContainer;