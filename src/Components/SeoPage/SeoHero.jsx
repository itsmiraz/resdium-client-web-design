/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import { MAINBTN } from '../Modules/Buttons/Buttons';
import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { slideAnimation } from '@/lib/motion';


const SeoHero = () => {




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
        <div ref={sectionRef}>
            <motion.div
                initial='initial'
                animate={animate ? 'animate' : 'initial'}
                exit='exit'
                variants={slideAnimation('up')}
                className="px-6 lg:px-20 py-10 flex flex-col justify-center items-center">

                <span className='uppercase bg-primary-2 text-white  px-4 py-1 rounded-ee-[4px] rounded-ss-[4px] text-xs'>Header</span>
                <Image src={"https://res.cloudinary.com/djnlyzsmv/image/upload/v1700547478/resdium-assets/Service%20Page/seo-hero-resdium-digital-min_vkvy8z.webp"} alt='seo-hero-resdium' width={944} height={531} className='mt-6 md:hidden block ' />
                <h1 className='text-[32px] md:text-[60px] py-4 lg:py-8 font-bold leading-[120%] text-[#2A3342] text-center'>
                    Unlock Your Digital Potential <br className='md:block hidden' />  with Resdium  SEO
                </h1>
                <p className='section-desc text-center pb-6 text-primary-1'>
                    Embark on a journey to digital prominence with Resdium Digital's cutting-edge SEO solutions. We don't just <br className='md:block hidden' /> optimize  websites; we craft digital success stories. Elevate your online presence, outrank competitors, and  <br className='md:block hidden' /> seize new opportunities. Your journey to SEO excellence starts here.
                </p>
                <div>
                    <Link href={'#pricing'}>

                        <MAINBTN title={'GET STARTED'} />
                    </Link>
                </div>
                <Image src={"https://res.cloudinary.com/djnlyzsmv/image/upload/v1700547478/resdium-assets/Service%20Page/seo-hero-resdium-digital-min_vkvy8z.webp"} alt='seo-hero-resdium' width={944} height={531} className='mt-6  hidden md:block ' />
            </motion.div>
        </div>
    );
};

export default SeoHero;