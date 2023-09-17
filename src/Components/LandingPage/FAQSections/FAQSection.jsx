import { FAQS } from '@/Constants/LandingPage/LandingPage';
import React, { useEffect, useState } from 'react';
import Accordion from '@/Components/Modules/Accordian/Acoordian';
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { slideAnimation } from '@/lib/motion';

const FAQSection = () => {
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
        <div className='px-6 md:px-20'>
            <motion.div
                initial='initial'
                animate={animate ? 'animate' : 'initial'}
                exit='exit'
                variants={slideAnimation('down')}
                className='my-40'>
                <h1 className=' text-[28px] leading-[32px] pb-20 md:text-[40px] text-center font-bold text-[#353535]'>Frequently asked questions</h1>
                <div ref={sectionRef}>

                </div>
                <div className='max-w-[900px] mx-auto'>
                    {
                        FAQS.map((data, i) => <Accordion key={i} i={i} title={data.title} content={data.desc} />)
                    }
                </div>
            </motion.div>

        </div>
    );
};

export default FAQSection;