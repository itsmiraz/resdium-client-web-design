import { MAINBTN } from '@/Components/Modules/Buttons/Buttons';
import MainContainer from '@/Components/Shared/MainContainer/MainContainer';
import { AboutUsHeroConstants } from '@/Constants/AboutUsPage/AboutUsPageConstants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Balancer } from 'react-wrap-balancer';

const AboutUsHero = () => {
    return (
        <MainContainer>
            <div className='flex md:flex-row flex-col-reverse justify-between items-center gap-10 md:gap-40'>
                <div className='w-[100%] md:w-[50%] space-y-8 md:text-start text-center'>
                    <h1 className='text-[40px] leading-[46px] lg:text-[46px] font-bold lg:leading-[50px]  text-zinc-800'>
                        {AboutUsHeroConstants.title}
                    </h1>
                    <p className='text-[#666] text-[16px] font-medium'>
                        <Balancer>
                            {
                                AboutUsHeroConstants.desc
                            }
                        </Balancer>
                    </p>
                    <div >
                        <Link href={'/contactUs'}>

                            <MAINBTN title={AboutUsHeroConstants.cta} />
                        </Link>
                    </div>
                </div>
                <div className='md:w-fit w-[100%]'>
                    <Image lazy='false' loading='eager' width={600} height={400} src={AboutUsHeroConstants.img} alt={AboutUsHeroConstants.alt} />
                </div>
            </div>
        </MainContainer>
    );
};

export default AboutUsHero;