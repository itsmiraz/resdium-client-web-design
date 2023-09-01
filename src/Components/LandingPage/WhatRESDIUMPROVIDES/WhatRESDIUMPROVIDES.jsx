import { MAINBTN } from '@/Components/Modules/Buttons/Buttons';
import MainContainer from '@/Components/Shared/MainContainer/MainContainer';
import { WhatRESDIUMPROVIDESConstants } from '@/Constants/LandingPage/LandingPage';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Balancer } from 'react-wrap-balancer';

const WhatRESDIUMPROVIDES = () => {
    return (
        <MainContainer>
            <div className=''>
                <h1 className=' text-[28px] pb-4 md:pb-10 md:text-[40px] text-center font-bold text-[#353535]'>
                    {
                        WhatRESDIUMPROVIDESConstants.title
                    }
                </h1>
                <div className='flex lg:flex-row flex-col-reverse  justify-center place-items-center mx-auto items-center mt-10 md:mt-20 w-full gap-10 md:gap-20'>
                    <div className=' w-full lg:w-[50%]  lg:text-start text-start  space-y-8'>
                        <h1 className='text-[32px] font-semibold text-[#414141] leading-[36px]'>
                            {
                                WhatRESDIUMPROVIDESConstants.subtitle
                            }
                        </h1>
                        <p className='text-[#4B4F55] text-[16px] leading-[20px]'>
                            <Balancer>
                                {
                                    WhatRESDIUMPROVIDESConstants.desc
                                }
                            </Balancer>
                        </p>
                        <p className='text-[#4B4F55] text-[16px] leading-[20px]'>
                            <Balancer>
                                {
                                    WhatRESDIUMPROVIDESConstants.lastDesc
                                }
                            </Balancer>
                        </p>
                        <div>
                            <Link href={'/contactUs'}>
                                <MAINBTN title={WhatRESDIUMPROVIDESConstants.cta1} />
                            </Link>

                        </div>
                    </div>
                    <div className='md:max-w-fit max-w-[100%]'  >
                        <Image width={508}  className='mx-auto md:rounded-ss-[30px] md:rounded-ee-[30px] rounded-ss-[20px] rounded-ee-[20px]' height={403} src={WhatRESDIUMPROVIDESConstants.img} alt={WhatRESDIUMPROVIDESConstants.alt} />
                    </div>
                </div>
            </div>
        </MainContainer>
    );
};

export default WhatRESDIUMPROVIDES;