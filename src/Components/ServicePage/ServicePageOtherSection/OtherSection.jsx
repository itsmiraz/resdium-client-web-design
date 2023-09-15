import { MAINBTN } from '@/Components/Modules/Buttons/Buttons';
import { ServicePageSections } from '@/Constants/ServicePage/ServicePage';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Balancer from 'react-wrap-balancer';

const OtherSection = () => {
    return (
        <section className='px-6 lg:px-40 py-10 lg:py-20'>
            <div>
                {
                    ServicePageSections.map((data, i) => <div className='grid grid-cols-1 place-items-center w-full  md:grid-cols-2 my-20 gap-8 lg:gap-20' key={i}>
                        <div className='space-y-4 lg:text-start text-center'>
                            <h1 className='text-[#22323F] text-[26px] lg:text-[32px] leading-[28px] lg:leading-[38px]  font-bold'>
                                {data.title}
                            </h1>
                            <p className='text-[14px] leading-[18px] lg:text-sm'>
                                <Balancer>
                                {data.desc}
                              </Balancer>
                            </p>
                            <div>
                                <Link href={'/contactUs'}>
                                <MAINBTN title={'Shedule a Call Today'}/>
                                </Link>
                        </div>
                        </div>
                        <div className={`${data.left ? 'order-first md:order-first  justify-start':" order-first md:order-last  justify-end"} w-full flex mx-0 `}>
                            <Image width={500} className='rounded-ss-[20px] rounded-ee-[20px]' height={250} src={data.img} alt={data.alt } />
                        </div>


                    </div>)
                }
            </div>
        </section>
    );
};

export default OtherSection;