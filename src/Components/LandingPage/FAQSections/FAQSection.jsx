import Accordion from '@/Components/Modules/Accordian/Acoordian';
import MainContainer from '@/Components/Shared/MainContainer/MainContainer';
import { FAQS } from '@/Constants/LandingPage/LandingPage';
import React from 'react';

const FAQSection = () => {
    return (
        <div className='px-20'>
            <div className='my-40'>
                 <h1 className=' text-[28px] pb-20 md:text-[40px] text-center font-bold text-[#353535]'>Frequently asked questions</h1>
                <div className='max-w-[900px] mx-auto'>
                    {
                        FAQS.map((data, i) => <Accordion key={i} title={data.title} content={data.desc} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default FAQSection;