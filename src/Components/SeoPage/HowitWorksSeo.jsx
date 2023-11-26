import { HowItWorksSeo } from '@/Constants/ServicePage/Seo';
import Image from 'next/image';
import React from 'react';
import Balancer from 'react-wrap-balancer';

const HowitWorksSeo = () => {
    return (
        <div className='px-6 lg:px-20 py-20 grid   grid-cols-1 md:grid-cols-2 gap-4 lg:gap-14'>
            <div className='lg:h-[604px] rounded-ee-[20px] rounded-ss-[20px]  overflow-hidden'>

                <Image src={HowItWorksSeo.img} alt={HowItWorksSeo.alt} height={654} width={576} className='w-full ' />
            </div>
            <div className='mt-3'>
                <span className='bg-[#DCFCE7]  text-[#3C6E71] px-5 py-2 rounded-ee-[6px]  font-semibold rounded-ss-[6px]'>HOW IT WORKS</span>
                <h2 className='h1-bold pt-4 text-[#2A3342]'>
                    {HowItWorksSeo.title}
                </h2>
                <div className='grid pt-8 grid-cols-2 gap-6'>
                    {
                        HowItWorksSeo.sections.map((data, i) => <HowItWorksCard data={data} key={i} i={i} />)
                    }
                </div>
            </div>

        </div>
    );
};

export default HowitWorksSeo;

const HowItWorksCard = ({ data, i }) => {


    return <div className='mt-4'>

        <span className='px-4 lg:px-6 py-2 lg:py-4  text-lg lg:text-xl font-bold text-white rounded-full bg-primary-2'>
            {i + 1}
        </span>
        <h3 className='pb-2 md:mt-8 mt-6 font-semibold leading-[110%] text-xl md:h3-semibold'>
            {data.subtitle}

        </h3>
        <p className='text-sm font-medium leading-[110%] md:text-sm text-[#1d1d1de7]'>
            <Balancer>
                {data.content}
            </Balancer>
        </p>


    </div>


}