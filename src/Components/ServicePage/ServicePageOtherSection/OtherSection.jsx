import { MAINBTN } from '@/Components/Modules/Buttons/Buttons';
import { ServicePageSections } from '@/Constants/ServicePage/ServicePage';
import Image from 'next/image';
import React from 'react';
import Balancer from 'react-wrap-balancer';

const OtherSection = () => {
    return (
        <section className='px-6 lg:px-40 py-20'>
            <div>
                {
                    ServicePageSections.map((data, i) => <div className='grid grid-cols-1 place-items-center w-full  md:grid-cols-2 my-20 gap-8 lg:gap-20' key={i}>
                        <div className='space-y-4 lg:text-start text-center'>
                            <h1 className='text-[#22323F] text-[26px] lg:text-[48px] leading-[28px] lg:leading-[52px]  font-bold'>
                                {data.title}
                            </h1>
                            <p className='text-[14px] lg:text-xl'>
                                <Balancer>
                                {data.desc}
                              </Balancer>
                            </p>
                            <MAINBTN title={'Shedule a Call Today'}/>
                        </div>
                        <div className={`${data.left ? 'order-first md:order-first  justify-start':" order-first md:order-last  justify-end"} w-full flex mx-0 `}>
                            <Image width={500} className='rounded-ss-[20px] rounded-ee-[20px]' height={350} src={data.img} alt={data.alt } />
                        </div>


                    </div>)
                }
            </div>
        </section>
    );
};

export default OtherSection;