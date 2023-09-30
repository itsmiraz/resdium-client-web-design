import { MAINBTN } from '@/Components/Modules/Buttons/Buttons';
import MainContainer from '@/Components/Shared/MainContainer/MainContainer';
import { WhatRESDIUMPROVIDESConstants } from '@/Constants/LandingPage/LandingPage';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Balancer } from 'react-wrap-balancer';
import { motion } from 'framer-motion'
import { slideAnimation } from '@/lib/motion';

const WhatRESDIUMPROVIDES = () => {


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
            <div className=''>
                <h1 className=' text-[28px] pb-4 md:pb-10 md:text-[40px] text-center font-bold text-[#353535]'>
                    {
                        WhatRESDIUMPROVIDESConstants.title
                    }
                </h1>
                <div ref={sectionRef} className='flex lg:flex-row flex-col-reverse  justify-center place-items-center mx-auto items-center mt-10 md:mt-20 w-full gap-10 md:gap-20'>
                    <motion.div
                        initial='initial'
                        animate={animate ? 'animate' : 'initial'}
                        exit='exit'
                        variants={slideAnimation('up')}
                        className=' w-full lg:w-[50%]  lg:text-start text-start  space-y-8'>
                        <h1 className='text-[32px] font-semibold text-[#252525] leading-[36px]'>
                            {
                                WhatRESDIUMPROVIDESConstants.subtitle
                            }
                        </h1>
                        <p className='text-[#383b3f] text-[18px]  font-medium leading-[22px]'>
                            <Balancer>
                                {
                                    WhatRESDIUMPROVIDESConstants.desc
                                }
                            </Balancer>
                        </p>
                        <p className='text-[#383b3f] text-[18px] font-medium  leading-[22px]'>
                            <Balancer>
                                {
                                    WhatRESDIUMPROVIDESConstants.lastDesc
                                }
                            </Balancer>
                        </p>
                        <div>
                            <Link href={'/contactUs'}>
                                <MAINBTN title={WhatRESDIUMPROVIDESConstants.cta1} />
                            </Link>

                        </div>
                    </motion.div>
                    <motion.div
                     initial='initial'
                     animate={animate ? 'animate' : 'initial'}
                     exit='exit'
                     variants={slideAnimation('down')}
                        className='md:max-w-fit max-w-[100%]'  >
                        <Image width={508} className='mx-auto md:rounded-ss-[30px] md:rounded-ee-[30px] rounded-ss-[20px] rounded-ee-[20px]' height={403} src={WhatRESDIUMPROVIDESConstants.img} alt={WhatRESDIUMPROVIDESConstants.alt} />
                    </motion.div>
                </div>
            </div>
        </MainContainer>
    );
};

export default WhatRESDIUMPROVIDES;