import { MAINBTN } from '@/Components/Modules/Buttons/Buttons';
import React from 'react';
import { Balancer } from 'react-wrap-balancer';

const ServicePageHero = () => {
    return (
        <section className='bg-[#325b5e]  rounded-ee-[80px] flex flex-col justify-center items-center w-full px-20 h-screen'>
            <div className=''>

                <h1 className='text-[48px] leading-[54px] uppercase font-bold text-white'>
                    Exploring Our Web <br className='md:block hidden' />
                    Development Services: <br className='md:block hidden' />
                    Crafting Your Online Success
                </h1>
                <p className='text-gray-200 font-xl pt-6 pb-12'>
                    <Balancer>

                        Dive into the heart of our web development prowess, where innovation
                        meets functionality. Explore custom solutions, seamless user experiences,
                        and transformative digital landscapes.
                    </Balancer>
                </p>
                <MAINBTN title={'Get Started'}/>

            </div>

        </section>
    );
};

export default ServicePageHero;