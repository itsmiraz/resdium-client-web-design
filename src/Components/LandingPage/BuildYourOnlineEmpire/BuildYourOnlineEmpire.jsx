import React, { useEffect, useState } from 'react';
import { BuildYourOnlineEmpireConstants } from '../../../Constants/LandingPage/LandingPage'
import Image from 'next/image';
import { Balancer } from 'react-wrap-balancer';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeAnimation, slideAnimation } from '@/lib/motion';

const BuildYourOnlineEmpire = () => {
    const [BuildYourOnlineEmpiresectionRef, inView] = useInView({
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
        <div className='bg-gradient-to-b from-[#3C6E71] to-[#284B63] h-fit inner-shadow  flex flex-col justify-center items-center my-20 w-full  lg:rounded-ss-[60px] lg:rounded-ee-[60px] py-32 px-6 lg:px-20'>
            <div>
                <h1 className='text-[24px] lg:text-[32px] lg:leading-[34px]  font-bold text-center text-white'>
                BUILD YOUR ONLINE <br  className='md:block hidden'/> EMPIRE WITH US
                </h1>
                <div ref={BuildYourOnlineEmpiresectionRef}  className='flex md:flex-row flex-col-reverse  justify-center place-items-center mx-auto items-center mt-20 w-full gap-10'>
                    <motion.div
                       initial='initial'
                       animate={animate ? 'animate':'initial'}
                       exit='exit'
                       variants={slideAnimation('down')}
                        className=' w-full lg:w-[50%]  space-y-8'>
                        {
                            BuildYourOnlineEmpireConstants?.steps.map((data) =>
                                <div key={data.id} className='space-y-2 md:text-start text-start'>
                                    <h1 className='text-xl font-semibold text-white'>{data.title}</h1>
                                    <p className='text-xs text-[#D9D9D9]'>
                                        <Balancer>
                                            {data.desc}
                                        </Balancer>
                                    </p>

                                </div>
                            )
                        }
                    </motion.div>
                    <motion.div
                          initial='initial'
                          animate={animate ? 'animate':'initial'}
                          exit='exit'
                          variants={slideAnimation('up')}
                        className='md:w-fit w-[100%]'  >
                        <Image width={508} className='mx-auto shadow-lg' height={403} src={BuildYourOnlineEmpireConstants.img} alt={BuildYourOnlineEmpireConstants.alt} />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default BuildYourOnlineEmpire;