import { MAINBTN } from '@/Components/Modules/Buttons/Buttons';
import { RealEstateServiceConstants } from '@/Constants/RealEstateServicePage/RealEstatePageService';
import Link from 'next/link';
import React from 'react';

const GetStartedSection = () => {
    return (
        <section className='pb-40 text-center'>
            <h1 className='text-[32px]  pb-3 text-zinc-700 font-semibold text-center '>
                {RealEstateServiceConstants.lastSection.section_title}
            </h1>
            <div>
                <Link href={"/contactUs"}>
                    <MAINBTN title={'Get Started'} />
                </Link>
            </div>
        </section>
    );
};

export default GetStartedSection;