import MainContainer from '@/Components/Shared/MainContainer/MainContainer';
import { AboutUsConstants } from '@/Constants/AboutUsPage/AboutUsPageConstants';
import React from 'react';
import { Balancer } from 'react-wrap-balancer';

const AboutUsSection = () => {
    return (
        <div className='py-32'>
            <div className='bg-[#045B74] w-full md:h-full md:rounded-ss-[60px] md:rounded-ee-[60px]'>
                <h1 className='text-center text-3xl font-bold text-white pt-20 lg:pt-32 pb-10'>
                    ABOUT US
                </h1>


                <div className="grid grid-cols-1  md:grid-cols-2 gap-16 max-w-[1100px] mx-auto px-6 pt-7 pb-32">
                    {
                        AboutUsConstants.map((data, i) => <div className='md:text-start text-center' key={i}>
                            <h1 className='text-[32px] pb-2 text-white font-semibold'>
                                {data.title}
                            </h1>
                            <p className='text-sm text-gray-200'>
                                <Balancer>
                                    {
                                        data.desc
                                    }
                                </Balancer>
                            </p>
                        </div>)
                    }
                </div>

            </div>
        </div>
    );
};

export default AboutUsSection;