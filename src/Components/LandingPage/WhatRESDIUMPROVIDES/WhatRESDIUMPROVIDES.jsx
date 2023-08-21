import { MAINBTN } from '@/Components/Modules/Buttons/Buttons';
import MainContainer from '@/Components/Shared/MainContainer/MainContainer';
import { WhatRESDIUMPROVIDESConstants } from '@/Constants/LandingPage/LandingPage';
import Image from 'next/image';
import React from 'react';
import { Balancer } from 'react-wrap-balancer';

const WhatRESDIUMPROVIDES = () => {
    return (
        <MainContainer>
            <div className=''>
                <h1 className=' text-[28px] md:text-[40px] text-center font-bold '>
                    {
                        WhatRESDIUMPROVIDESConstants.title
                    }
                </h1>
                <div className='flex lg:flex-row flex-col-reverse  justify-center place-items-center mx-auto items-center mt-20 w-full gap-10'>
                    <div className=' w-full lg:w-[50%]  lg:text-start text-center  space-y-8'>
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
                        <MAINBTN title={WhatRESDIUMPROVIDESConstants.cta1} />
                    </div>
                    <div className='md:w-fit w-[80%]'  >
                        <Image width={508} className='mx-auto' height={403} src={WhatRESDIUMPROVIDESConstants.img} alt={WhatRESDIUMPROVIDESConstants.alt} />
                    </div>
                </div>
            </div>
        </MainContainer>
    );
};

export default WhatRESDIUMPROVIDES;