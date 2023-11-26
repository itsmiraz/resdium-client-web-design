import React, { useEffect, useState } from 'react';
import { HeroConstants } from '../../../Constants/LandingPage/LandingPage'
import Image from 'next/image';
import MainContainer from '@/Components/Shared/MainContainer/MainContainer';
import { MAINBTN } from '@/Components/Modules/Buttons/Buttons';
import { Balancer } from 'react-wrap-balancer';
import Link from 'next/link';
import { slideAnimation } from '@/lib/motion';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const LandingHero = () => {

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
        <MainContainer>

            <div ref={sectionRef} className='grid grid-cols-1 md:grid-cols-2 w-full  overflow-hidden py-14 lg:py-0 gap-10 md:gap-20'>
                <motion.div
                    initial='initial'
                    animate={animate ? 'animate' : 'initial'}
                    exit='exit'
                    variants={slideAnimation('left')}
                    className='space-y-6 lg:space-y-8 md:text-start text-center'>
                    <h1 className='text-[32px] leading-[34px] md:text-[32px] md:leading-[36px] lg:text-[64px] font-bold lg:leading-[72px]  bg-clip-text text-transparent bg-gradient-to-r from-[#3C6E71] to-[#01437C]'>
                        <Balancer>
                            {HeroConstants.title}
                        </Balancer>
                    </h1>
                    <p className='text-[#666] text-[16px]  lg:leading-normal leading-[18px] md:leading-[20px] font-medium'>
                        <Balancer>
                            {
                                HeroConstants.desc
                            }
                        </Balancer>
                    </p>
                    <div>
                        <Link href={'/contactUs'}>
                            <MAINBTN title={HeroConstants.cta} />
                        </Link>
                    </div>
                </motion.div>
                <motion.div
                    initial='initial'
                    animate={animate ? 'animate' : 'initial'}
                    exit='exit'
                    variants={slideAnimation('right')}
                    className='flex justify-end md:order-last order-first md:w-full w-[65%] h-fit mx-auto'  >
                    <Image lazy='false' loading='eager' width={420} height={440} className='' src={HeroConstants.heroimg} alt={HeroConstants.heroImgAlt} />
                </motion.div>
            </div>

        </MainContainer>

    );
};

export default LandingHero;