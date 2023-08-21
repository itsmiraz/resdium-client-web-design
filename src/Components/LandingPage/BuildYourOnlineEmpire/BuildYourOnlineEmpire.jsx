import MainContainer from '@/Components/Shared/MainContainer/MainContainer';
import React from 'react';
import { BuildYourOnlineEmpireConstants } from '../../../Constants/LandingPage/LandingPage'
import Image from 'next/image';
import { Balancer } from 'react-wrap-balancer';


const BuildYourOnlineEmpire = () => {
    return (
        <div className='bg-[#284B63] h-fit lg:h-screen flex flex-col justify-center items-center my-20 w-full  rounded-corners-2xl py-10 px-6 lg:px-20'>
            <div>
                <h1 className='text-[24px] lg:text-[32px] font-bold text-center text-white'>
                    {BuildYourOnlineEmpireConstants.title}
                </h1>
                <div className='flex md:flex-row flex-col-reverse  justify-center place-items-center mx-auto items-center mt-20 w-full gap-10'>
                    <div className=' w-full lg:w-[50%]  space-y-8'>
                        {
                            BuildYourOnlineEmpireConstants?.steps.map((data) =>
                                <div key={data.id} className='space-y-2 md:text-start text-center'>
                                    <h1 className='text-xl font-semibold text-white'>{data.title}</h1>
                                    <p className='text-xs text-[#D9D9D9]'>
                                        <Balancer>
                                            {data.desc}
                                        </Balancer>
                                    </p>

                                </div>
                            )
                        }
                    </div>
                    <div className='md:w-fit w-[80%]'  >
                        <Image width={508} className='mx-auto' height={403} src={BuildYourOnlineEmpireConstants.img} alt={BuildYourOnlineEmpireConstants.alt} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuildYourOnlineEmpire;