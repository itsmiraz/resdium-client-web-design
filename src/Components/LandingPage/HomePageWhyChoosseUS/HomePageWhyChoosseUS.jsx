import { WhyChooseUsHome } from '@/Constants/LandingPage/LandingPage';
import Image from 'next/image';
import React from 'react';
import Balancer from 'react-wrap-balancer';
import img from '../../../../public/Assets/images/why-choose-us-resdium-digital.webp'

const HomePageWhyChoosseUS = () => {


    return (
        <div className='px-6 md:px-24 py-20'>
          <div className='block md:hidden'>
                    <Image className='rounded-ee-[24px] rounded-ss-[24px]' src={img} alt='why-choose-use' />
                </div>
            <h2 className='section-title pt-4 text-[#22323F]'>Why Choose Us</h2>
            <p className='text-[#556987] section-desc pt-2 md:pt-4 pb-8'>
                <Balancer>
                    At Resdium Digital, we stand out in the crowded digital landscape.  We prioritize your unique needs and offer competitive pricing, all while maintaining a transparent, client-centric approach
                </Balancer>
            </p>
            <div className='grid-cols-1 md:mt-14 grid gap-10 md:grid-cols-2'>
                <div>
                    {
                        WhyChooseUsHome.map((data, i) => <div className='flex items-start gap-x-4 mb-10' key={i}>
                            <Image className='mt-1' src={data.icon} alt={data.alt} />
                            <div>
                                <h3 className='text-2xl text-[#2A3342] font-bold'>{data.title}</h3>
                                <p className='text-sm pt-2 font-medium text-[#556987] leading-[120%]'><Balancer>
                                    {data.desc}</Balancer></p>
                            </div>

                        </div>)
                    }
                </div>
                <div className='md:block hidden'>
                    <Image className='rounded-ee-[24px] rounded-ss-[24px]' src={img} alt='why-choose-use' />
                </div>
            </div>
        </div>
    );
};

export default HomePageWhyChoosseUS;