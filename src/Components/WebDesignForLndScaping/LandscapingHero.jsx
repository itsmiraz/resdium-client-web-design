import React, { useEffect, useState } from 'react';
import MainContainer from '../Shared/MainContainer/MainContainer';
import Image from 'next/image';
import { MAINBTN } from '../Modules/Buttons/Buttons';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';
import { motion } from 'framer-motion'
import { slideAnimation } from '@/lib/motion';
import { useInView } from 'react-intersection-observer';


const LandscapingHero = () => {
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
                    <h1 className='h1-bold text-[#22323F]'>
                        Need Website for <br />
                        Landscaping Business?
                    </h1>
                    <p className='text-[#666] base-medium'>
                        <Balancer>
                            Welcome to Resdium Digital, your trusted partner for creating stunning and functional websites tailored to meet the unique needs of landscaping businesses. In todays digital age, a strong online presence is essential to stand out in a competitive market.
                        </Balancer>
                    </p>
                    <div>
                        <Link href={'/contactUs'}>
                            <MAINBTN title={"Contact"} />
                        </Link>
                    </div>
                </motion.div>
                <motion.div
                    initial='initial'
                    animate={animate ? 'animate' : 'initial'}
                    exit='exit'
                    variants={slideAnimation('right')}
                    className='flex justify-end md:order-last order-first md:w-full w-[65%] h-fit mx-auto'  >
                    <div className='p-10'>
                        <Image lazy='false' loading='eager' width={420} height={440} className='' src={"https://cdn.builder.io/api/v1/image/assets/TEMP/23644f78-64d3-4837-9387-86d3d08c49f4?apiKey=0f98dcc036c042b98fbeadfa4d299103&"} alt={'web-design-for-landscaping-service-cover'} />
                    </div>
                </motion.div>
            </div>
        </MainContainer>
    );
};

export default LandscapingHero;