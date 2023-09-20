import { MAINBTN } from '@/Components/Modules/Buttons/Buttons';
import { ServicePageSections } from '@/Constants/ServicePage/ServicePage';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Balancer from 'react-wrap-balancer';
import { useInView } from 'react-intersection-observer';
import { slideAnimation } from '@/lib/motion';

const OtherSection = () => {

    const [sectionRef, inView] = useInView({
        triggerOnce: true, // Trigger animation once when it enters the viewport
        threshold: 0.2, // Adjust this threshold as needed
    });

    // State to control whether animations should play
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (inView) {
            setAnimate(true);
        }
    }, [inView]);

    return (
        <section  ref={sectionRef} className='px-6 lg:px-40 py-10 lg:py-20 overflow-hidden'>
            <div>
                {
                    ServicePageSections.map((data, i) => <div className='grid grid-cols-1 place-items-center w-full  md:grid-cols-2 my-20 gap-8 lg:gap-20' key={i}>
                        <motion.div
                            initial='initial'
                            animate={animate ? 'animate' : 'initial'}
                            exit='exit'
                            variants={slideAnimation('left')}
                            className='space-y-4 lg:text-start text-center'>
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
                                    <MAINBTN title={'Shedule a Call Today'} />
                                </Link>
                            </div>
                        </motion.div>
                        <motion.div
                            initial='initial'
                            animate={animate ? 'animate' : 'initial'}
                            exit='exit'
                            variants={slideAnimation('right')}
                            className={`${data.left ? 'order-first md:order-first  justify-start' : " order-first md:order-last  justify-end"} w-full flex mx-0 `}>
                            <Image width={500} className='rounded-ss-[20px] rounded-ee-[20px]' height={250} src={data.img} alt={data.alt} />
                        </motion.div>
                      

                    </div>)
                }
            </div>
        
        </section>
    );
};

export default OtherSection;