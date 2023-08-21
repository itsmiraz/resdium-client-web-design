import React from 'react';
import { HeroConstants } from '../../../Constants/LandingPage/LandingPage'
import Image from 'next/image';
import MainContainer from '@/Components/Shared/MainContainer/MainContainer';
import { MAINBTN } from '@/Components/Modules/Buttons/Buttons';
import { Balancer } from 'react-wrap-balancer';


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
                    <MAINBTN title={HeroConstants.cta} />
                </div>
                <div className='md:w-fit w-[70%]'>
                    <Image lazy='false' loading='eager' width={400} height={400} src={HeroConstants.heroimg} alt={HeroConstants.heroImgAlt} />
                </div>
            </div>
        </MainContainer>

    );
};

export default LandingHero;