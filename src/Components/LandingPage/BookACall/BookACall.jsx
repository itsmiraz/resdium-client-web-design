import { MAINBTN } from '@/Components/Modules/Buttons/Buttons';
import MainContainer from '@/Components/Shared/MainContainer/MainContainer';
import React from 'react';

const BookACall = () => {
    return (
        <section className='mt-20 md:mb-52 mb-20 md:mt-40 px-6'>
            <div className='max-w-[1000px] flex md:flex-row flex-col justify-center md:justify-between items-center bg-[#30585a] p-10 md:p-16 mx-auto rounded-ss-[60px] rounded-ee-[60px] gap-10' >
                <div className='md:text-start text-center space-y-2'>
                    <h1 className='uppercase text-2xl font-semibold text-white'>Book a Call</h1>
                    <p className='text-white text-xs '>Get RESDIUM DIGITAL for your digital partner to grow Online</p>
                </div>
                <div>
                    <MAINBTN title={'CONTACT US'} />
                </div>
            </div>
        </section>
    );
};

export default BookACall;