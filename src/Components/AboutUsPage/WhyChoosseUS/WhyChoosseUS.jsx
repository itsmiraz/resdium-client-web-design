import MainContainer from '@/Components/Shared/MainContainer/MainContainer';
import { AboutUsWhyChooseUs } from '@/Constants/AboutUsPage/AboutUsPageConstants';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const WhyChoosseUS = () => {
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
        <div className='px-6'>
            <div>
                <h1 className='text-center pt-10  font-semibold text-[#212121] text-[40px]'>Why Choose Us</h1>
                <div ref={sectionRef} className='max-w-[699px] mx-auto space-y-10 pb-32 pt-10'>
                    {
                        AboutUsWhyChooseUs.map((data, i) => <motion.div
                            initial={{ opacity: 0, y: 200 }}
                            animate={{ opacity: startAnimate ? 1 : 0, y: startAnimate ? 0 : 200 }}
                            transition={{ duration: 0.2, delay: i * 0.3 }}
                            key={i}
                            style={{ backgroundColor: `${data.backGround}` }}
                            className={`flex lg:flex-row flex-col lg:justify-start justify-center items-center p-8 gap-6 rounded-ss-[30px] rounded-ee-[30px]`}>

                            <div className=' mx-auto lg:w-[20%]'>
                                <Image src={data.icon} alt={data.alt} />
                            </div>
                            <div className='lg:text-start text-center space-y-2'>
                                <h1 className='text-xl lg:text-2xl font-medium text-white'>{data.title}</h1>
                                <p className='text-sm lg:text-[14px] font-normal text-[#DFDFDF]'>
                                    {data.desc}
                                </p>
                            </div>
                        </motion.div>)
                    }
                </div>
            </div>

        </div>
    );
};

export default WhyChoosseUS;