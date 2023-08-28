import MainContainer from '@/Components/Shared/MainContainer/MainContainer';
import { RealEstateServiceConstants } from '@/Constants/RealEstateServicePage/RealEstatePageService';
import Image from 'next/image';
import React from 'react';
import { Balancer } from 'react-wrap-balancer';

const RealEstateService = () => {

    const ServiceCard = ({ data }) => {
        return (
            <div
                style={{backgroundColor:`${data.bg}`}}
                className='p-5 flex md:rounded-se-[25px] md:rounded-es-[25px]  rounded-se-[15px] rounded-es-[15px] flex-col justify-between space-y-2'>

                <div className='lg:w-40 w-16'>
                <Image className='' src={data.icon} alt='service-icon'/>
              </div>
                <div>
                    <h1 className='text-[24px] lg:text-[28px] pb-4 font-semibold text-white  leading-[30px]'>
                        {data.title }
                    </h1>
                    <p className='text-xs lg:text-sm text-gray-200 '>
                        <Balancer>
                            {
                                data.description
                            }
                        </Balancer>
                    </p>
                    </div>
            </div>
        )
    }

    return (
        <MainContainer>
            <div>
                <div className='space-y-2'>
                    <h1 className='text-[#1A1A1A] text-[26px] lg:text-[32px] leading-[28px] lg:leading-[33px] text-center font-semibold'>
                        <Balancer>
                            {RealEstateServiceConstants.serviceSection.section_title.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    <br className='md:block hidden' />
                                </React.Fragment>
                            ))}
                        </Balancer>

                    </h1>
                    <p className='text-center text-sm lg:text-lg'>
                        <Balancer>
                            {RealEstateServiceConstants.serviceSection.description}
                        </Balancer>
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20'>
                    {
                        RealEstateServiceConstants.serviceSection.features.map((data,i)=><ServiceCard data={data} key={i}/>)
                    }
                </div>

            </div>
        </MainContainer>
    );
};

export default RealEstateService;