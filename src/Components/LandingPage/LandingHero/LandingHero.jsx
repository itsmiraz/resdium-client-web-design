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
            <div className='flex md:flex-row flex-col-reverse justify-between items-center gap-10 md:gap-20'>
                <div className='w-[100%] md:w-[60%] space-y-8 md:text-start text-center'>
                    <h1 className='text-[40px] leading-[46px] lg:text-[64px] font-bold lg:leading-[72px]  bg-clip-text text-transparent bg-gradient-to-r from-[#3C6E71] to-[#01437C]'>
                        {HeroConstants.title}
                    </h1>
                    <p className='text-[#666] text-[16px] font-medium'>
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
                <div className='md:max-w-fit max-w-[70%]'  style={{ aspectRatio: '420/440' }}>
                    <Image lazy='false'   loading='eager' width={420} height={440} className='' src={HeroConstants.heroimg} alt={HeroConstants.heroImgAlt} />
                </div>
            </div>
        </MainContainer>

    );
};

export default LandingHero;