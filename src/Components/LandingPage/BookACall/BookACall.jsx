import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'
import { slideAnimation } from '@/lib/motion';
import { useInView } from 'react-intersection-observer';

const BookACall = () => {


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
        <section  className='mt-20 md:mb-52 mb-20 md:mt-40 px-6'>
            <motion.div
                initial='initial'
                animate={animate ? 'animate' : 'initial'}
                exit='exit'
                variants={slideAnimation('up')}
                className='max-w-[1000px] flex md:flex-row flex-col justify-center md:justify-between items-center bg-[#30585a] p-10 md:p-16 mx-auto md:rounded-ss-[40px] rounded-ss-[30px] md:rounded-ee-[40px] rounded-ee-[30px] gap-6 lg:gap-10' >
                <div className='md:text-start text-center space-y-2'>
                    <h1 className='uppercase text-2xl font-semibold text-white'>Book a Call</h1>
                    <p className='text-white text-xs '>Get RESDIUM DIGITAL for your digital partner to grow Online</p>
                </div>
                <div>
                    <Link href={'/contactUs'}>
                        <button className='  px-4 py-2 font-semibold bg-white  rounded-corners-sm'>Contact</button>
                    </Link>
                </div>
            </motion.div>
            <div ref={sectionRef}>

            </div>
        </section>
    );
};

export default BookACall;