import { MAINBTN } from '@/Components/Modules/Buttons/Buttons';
import MainContainer from '@/Components/Shared/MainContainer/MainContainer';
import { RealEstateServiceConstants } from '@/Constants/RealEstateServicePage/RealEstatePageService';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Balancer } from 'react-wrap-balancer';

const RealEstatePageHero = () => {
    return (
        <MainContainer>

            <div className='flex md:flex-row flex-col-reverse justify-between items-center gap-10 md:gap-40'>
                <div className='w-[100%] md:w-[50%] space-y-8 md:text-start text-center'>
                    <h1 className='text-[40px] leading-[46px] lg:text-[42px] font-bold lg:leading-[50px]  text-zinc-800'>
                        {RealEstateServiceConstants.heroSection.section_title}
                    </h1>
                    <p className='text-[#666] text-[16px] font-medium'>
                        <Balancer>
                            {
                                RealEstateServiceConstants.heroSection.description
                            }
                        </Balancer>
                    </p>
                    <div >
                        <Link href={'/contactUs'}>

                            <MAINBTN title={RealEstateServiceConstants.heroSection.cta} />
                        </Link>
                    </div>
                </div>
                <div className='md:w-fit w-[100%]'>
                    <Image lazy='false' className='md:rounded-ee-[30px] md:rounded-ss-[30px] rounded-ee-[20px] rounded-ss-[20px] ' loading='eager' width={600} height={400} src={RealEstateServiceConstants.heroSection.img} alt={RealEstateServiceConstants.heroSection.alt} />
                </div>
            </div>
        </MainContainer>
    );
};

export default RealEstatePageHero;