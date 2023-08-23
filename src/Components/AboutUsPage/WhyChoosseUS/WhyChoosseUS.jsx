import MainContainer from '@/Components/Shared/MainContainer/MainContainer';
import { AboutUsWhyChooseUs } from '@/Constants/AboutUsPage/AboutUsPageConstants';
import Image from 'next/image';
import React from 'react';

const WhyChoosseUS = () => {




    return (
        <div className='px-6'>
            <div>
                <h1 className='text-center pt-10  font-semibold text-[#212121] text-[40px]'>Why Choose Us</h1>
                <div className='max-w-[699px] mx-auto space-y-10 pb-32 pt-10'>
                    {
                        AboutUsWhyChooseUs.map((data, i) => <div
                            key={i}
                            className={` bg-[${data?.backGround}] flex lg:flex-row flex-col lg:justify-start justify-center items-center p-8 gap-6 rounded-ss-[30px] rounded-ee-[30px]`}>
                          
                            <div className=' mx-auto lg:w-[20%]'>
                                <Image src={data.icon} alt={data.alt} />
                            </div>
                            <div className='lg:text-start text-center'>
                                <h1 className='text-xl lg:text-2xl font-semibold text-white'>{data.title}</h1>
                                <p className='text-sm lg:text-[15px] font-medium text-[#DFDFDF]'>
                                    {data.desc}
                                </p>
                            </div>
                        </div>)
                    }
                </div>
            </div>

        </div>
    );
};

export default WhyChoosseUS;