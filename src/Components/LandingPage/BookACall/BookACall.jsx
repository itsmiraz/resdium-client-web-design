import { MAINBTN } from '@/Components/Modules/Buttons/Buttons';
import MainContainer from '@/Components/Shared/MainContainer/MainContainer';
import React from 'react';

const BookACall = () => {
    return (
        <section className='py-20'>
            <div className='max-w-[1000px] flex md:flex-row flex-col justify-center md:justify-between items-center bg-[#284B63] p-10 md:p-16 mx-auto rounded-ss-[60px] rounded-ee-[60px] gap-10' >
                <div className='md:text-start text-center space-y-2'>
                <h1 className='uppercase text-2xl font-semibold text-white'>Book a Call</h1>
                <p className='text-white text-xs '>Get RESDIUM DIGITAL for your digital partner to grow Online</p>
                </div>
                <div>
                    <MAINBTN bg='#D9D9D9' textColor='#284B63' title={'CONTACT US'}/>
                </div>
            </div>
        </section>
    );
};

export default BookACall;