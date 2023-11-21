import { WhyChooseResdiumDigitalSeo } from '@/Constants/ServicePage/Seo';
import React from 'react';
import { FeatureCard } from '../WebDesignForLndScaping/LansacpingWhyChooseUs';
import Balancer from 'react-wrap-balancer';

const WhyChooseUsSeo = () => {
    return (
        <div className='px-20 py-10'>

            <h2 className='h2-bold text-center text-[#2A3342]'>{WhyChooseResdiumDigitalSeo.title}</h2>
            <p className='text-center pt-4 section-desc px-40 font-medium'><Balancer>
                {WhyChooseResdiumDigitalSeo.desc}</Balancer></p>
            <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 pt-16 gap-14'>
                {
                    WhyChooseResdiumDigitalSeo.sections.map(((data, i) => <FeatureCard data={data} key={i} />))
                }
            </div>
        </div>
    );
};

export default WhyChooseUsSeo;