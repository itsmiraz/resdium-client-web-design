import MainContainer from '@/Components/Shared/MainContainer/MainContainer';
import { AboutUsConstants } from '@/Constants/AboutUsPage/AboutUsPageConstants';
import React, { useEffect, useState } from 'react';
import { Balancer } from 'react-wrap-balancer';
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

const AboutUsSection = () => {
    const [sectionRef, inView] = useInView({
        triggerOnce: true, // Trigger animation once when it enters the viewport
        threshold: 0.2, // Adjust this threshold as needed
    });

    // State to control whether animations should play
    const [startAnimate, setAnimate] = useState(false);

    useEffect(() => {
        if (inView) {
            setAnimate(true);
        }
    }, [inView]);

    return (
        <div className='py-32'>
            <div className=' w-full md:h-full md:rounded-ss-[60px] md:rounded-ee-[60px]'>
                <h1 className='text-center text-3xl font-bold text-zinc-800 pt-20 lg:pt-32 pb-10'>
                    ABOUT US
                </h1>


                <div ref={sectionRef} className="grid grid-cols-1  md:grid-cols-2 gap-10 max-w-[1100px] mx-auto px-6 pt-7 pb-32">
                    {
                        AboutUsConstants.map((data, i) => <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: startAnimate ? 1 : 0 }}

                            transition={{ duration: 0.2, delay: i * 0.3 }}

                            style={{ backgroundColor: `${data.backGround}` }} className={`md:text-start inner-shadow  text-start p-8 lg:p-10 rounded-ee-[20px] rounded-ss-[20px]`} key={i}>
                            <h1 className='text-[28px] lg:text-[32px] pb-2 text-zinc-100 font-semibold'>
                                {data.title}
                            </h1>
                            <p className='text-xs lg:text-sm text-gray-200'>
                                <Balancer>
                                    {
                                        data.desc
                                    }
                                </Balancer>
                            </p>
                        </motion.div>)
                    }
                </div>

            </div>
        </div>
    );
};

export default AboutUsSection;