import Link from 'next/link';
import React from 'react';
import Balancer from 'react-wrap-balancer';
import { MAINBTN } from '../Modules/Buttons/Buttons';

const SeoCTA = () => {
    return (
        <div className='pb-20'>
            <h3 className='text-center h1-bold text-primary-1 '>Embark on Your SEO Journey Today</h3>
            <p className='text-center section-desc py-5 px-60'>
                <Balancer>
                    Select the package that aligns with your business aspirations, and let Resdium Digital guide you toward SEO excellence. Transform your online presence, outrank competitors, and achieve digital success that goes beyond expectations. Your journey to SEO triumph begins here.
                </Balancer>
            </p>
            <div className='text-center'>
                <Link href={'/contactUs'}>
                    <MAINBTN title={'Get Started'} />
                </Link>
            </div>
        </div>
    );
};

export default SeoCTA;