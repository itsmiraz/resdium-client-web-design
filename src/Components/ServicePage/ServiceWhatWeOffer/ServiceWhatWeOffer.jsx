import { ServicewhatWeOfferConstants } from '@/Constants/ServicePage/ServicePage';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Balancer } from 'react-wrap-balancer';
import { useInView } from 'react-intersection-observer';
import { slideAnimation } from '@/lib/motion';


const ServiceWhatWeOffer = () => {

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
        <div className='px-6 lg:px-20 py-32'>
            <h1 className='uppercase text-center text-[32px] font-bold text-[#212121]'>what  we offer</h1>
            <p className='text-center text-sm leading-[16px] text-[#353535]'>
                <Balancer>
                    At RESDIUM, we offer several factors of a website like responsive <br /> developent, Basic Seo Optimization, Page Speed etc
                </Balancer>
            </p>

            <div
                ref={sectionRef}
                className='space-y-20 pt-32 overflow-hidden max-w-[1000px] mx-auto'>
                {
                    ServicewhatWeOfferConstants.map((data, i) => <div className='grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-24 place-items-center' key={i}>
                        <motion.div
                            initial='initial'
                            animate={animate ? 'animate' : 'initial'}
                            exit='exit'
                            variants={slideAnimation('left')}
                            className='space-y-2 md:text-start text-center'>
                            <h1 className='text-2xl font-semibold uppercase'>{data.title}</h1>
                            <p className='text-sm '><Balancer>{data.desc}</Balancer></p>
                        </motion.div>
                        <motion.div

                            initial='initial'
                            animate={animate ? 'animate' : 'initial'}
                            exit='exit'
                            variants={slideAnimation('right')}
                            className={`${data.left ? "order-first md:order-first justify-start" : "order-first md:order-last  justify-end"} w-full flex `}>
                            <Image className='lg:rounded-ss-[40px] rounded-ss-[20px] lg:rounded-ee-[40px] rounded-ee-[20px]' width={450} height={266} src={data.img} alt={data.alt} />
                        </motion.div>


                    </div>)
                }
            </div>

        </div>
    );
};

export default ServiceWhatWeOffer;