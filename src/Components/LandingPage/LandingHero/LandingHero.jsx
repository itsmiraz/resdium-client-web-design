import React from 'react';
import { HeroConstants } from '../../../Constants/LandingPage/LandingPage'
import Image from 'next/image';
import MainContainer from '@/Components/Shared/MainContainer/MainContainer';
import { MAINBTN } from '@/Components/Modules/Buttons/Buttons';
import { Balancer } from 'react-wrap-balancer';
import Link from 'next/link';


const LandingHero = () => {
    return (
        <MainContainer>
            <div className='grid grid-cols-1 md:grid-cols-2 w-full   gap-10 md:gap-20'>
                <div className='space-y-8 md:text-start text-center'>
                    <h1 className='text-[40px] leading-[46px] md:text-[32px] md:leading-[36px] lg:text-[64px] font-bold lg:leading-[72px]  bg-clip-text text-transparent bg-gradient-to-r from-[#3C6E71] to-[#01437C]'>
                        {HeroConstants.title}
                    </h1>
                    <p className='text-[#666] text-[16px] lg:leading-normal leading-normal md:leading-[20px] font-medium'>
                        <Balancer>
                            {
                                HeroConstants.desc
                            }
                        </Balancer>
                    </p>
                    <div>
                        <Link href={'/contactUs'}>
                            <MAINBTN title={HeroConstants.cta} />
                        </Link>
                    </div>
                </div>
                <div className='flex justify-end md:order-last order-first md:w-full w-[70%] h-fit mx-auto'  >
                    <Image lazy='false' loading='eager' width={420} height={440} className='' src={HeroConstants.heroimg} alt={HeroConstants.heroImgAlt} />
                </div>
            </div>
        </MainContainer>

    );
};

export default LandingHero;