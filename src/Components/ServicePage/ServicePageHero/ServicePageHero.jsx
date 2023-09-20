import { MAINBTN } from '@/Components/Modules/Buttons/Buttons';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Balancer } from 'react-wrap-balancer';
import { motion, } from 'framer-motion'

import { useInView } from 'react-intersection-observer';
import { slideAnimation } from '@/lib/motion';

const ServicePageHero = () => {

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
        <section ref={sectionRef} className=' flex lg:rounded-ss-[30px] lg:rounded-ee-[30px] items-center justify-center bg-cover bg-no-repeat bg-center h-full lg:h-screen' style={{ backgroundImage: 'url(https://res.cloudinary.com/djnlyzsmv/image/upload/v1694756305/resdium-assets/service-page-hero-bg-resdium_dsxzpk.webp)' }}>
            <motion.div
                initial='initial'
                animate={animate ? 'animate' : 'initial'}
                exit='exit'
                variants={slideAnimation('up')}
                className='text-center px-4 py-20 lg:py-40  lg:px-20 space-y-4'>
                <h1 className='text-[26px] lg:text-[48px] leading-[28px] lg:leading-[52px] font-bold text-white'>
                    Comprehensive Web <br className='lg:block hidden' />
                    Development Services
                </h1>
                <p className='text-[10px] lg:text-xl text-gray-200'>
                    <Balancer>
                        Our team of experts offers a wide range of web development services tailored to <br className='lg:block hidden' /> your unique needs. Whether you need a stunning website, an e-commerce platform, <br className='lg:block hidden' /> or a web application, we have you covered.
                    </Balancer>
                </p>
                <div>
                    <Link href={'/contactUs'}>
                        <MAINBTN title={"Get Started"} />
                    </Link>
                </div>
            </motion.div>
        </section>

    );
};

export default ServicePageHero;