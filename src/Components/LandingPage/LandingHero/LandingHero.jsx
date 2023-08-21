import React from 'react';
import { HeroConstants } from '../../../Constants/LandingPage/LandingPage'
import Image from 'next/image';
import MainContainer from '@/Components/Shared/MainContainer/MainContainer';
import { MAINBTN } from '@/Components/Modules/Buttons/Buttons';
import { Balancer } from 'react-wrap-balancer';


const LandingHero = () => {
    return (
        <MainContainer>
            <div className='flex justify-between items-center gap-20'>
                <div className='w-[60%] space-y-8'>
                    <h1 className='text-[64px] font-bold leading-[72px] bg-clip-text text-transparent bg-gradient-to-r from-[#3C6E71] to-[#01437C]'>
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
                <div className=''>
                    <Image lazy='false' loading='eager' width={400} height={400} src={HeroConstants.heroimg} alt={HeroConstants.heroImgAlt} />
                </div>
            </div>
        </MainContainer>

    );
};

export default LandingHero;