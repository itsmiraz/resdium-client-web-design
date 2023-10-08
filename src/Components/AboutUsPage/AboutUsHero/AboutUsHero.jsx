import { MAINBTN } from '@/Components/Modules/Buttons/Buttons';
import MainContainer from '@/Components/Shared/MainContainer/MainContainer';
import { AboutUsHeroConstants } from '@/Constants/AboutUsPage/AboutUsPageConstants';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Balancer } from 'react-wrap-balancer';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { slideAnimation } from '@/lib/motion';

const AboutUsHero = () => {
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
            <div ref={sectionRef} className='flex overflow-hidden md:flex-row flex-col-reverse justify-between items-center gap-10 md:gap-40'>
                <motion.div

                    initial='initial'
                    animate={animate ? 'animate' : 'initial'}
                    exit='exit'
                    variants={slideAnimation('left')}
                    className='w-[100%] md:w-[50%] space-y-8 md:text-start text-center'>
                    <h1 className='text-[32px] leading-[36px] lg:text-[46px] font-bold lg:leading-[50px]  text-zinc-800'>
                        {AboutUsHeroConstants.title}
                    </h1>
                    <p className='text-[#666] text-[14px] lg:text-[16px] font-medium'>
                        <Balancer>
                            {
                                AboutUsHeroConstants.desc
                            }
                        </Balancer>
                    </p>
                    <div >
                        <Link href={'/contactUs'}>

                            <MAINBTN title={AboutUsHeroConstants.cta} />
                        </Link>
                    </div>
                </motion.div>
                <motion.div
                    initial='initial'
                    animate={animate ? 'animate' : 'initial'}
                    exit='exit'
                    variants={slideAnimation('right')}
                    className='md:w-fit w-[100%]'>
                    <Image lazy='false' loading='eager' width={600} height={400} src={AboutUsHeroConstants.img} alt={AboutUsHeroConstants.alt} />
                </motion.div>
            </div>
        </MainContainer>
    );
};

export default AboutUsHero;