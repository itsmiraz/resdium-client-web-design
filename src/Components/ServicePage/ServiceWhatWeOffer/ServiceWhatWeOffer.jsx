import { ServicewhatWeOfferConstants } from '@/Constants/ServicePage/ServicePage';
import Image from 'next/image';
import React from 'react';
import { Balancer } from 'react-wrap-balancer';

const ServiceWhatWeOffer = () => {
    return (
        <div className='px-6 lg:px-20 py-32'>
            <h1 className='uppercase text-center text-[32px] font-bold text-[#212121]'>what  we offer</h1>
            <p className='text-center text-sm leading-[16px] text-[#353535]'>
                <Balancer>
                    At RESDIUM, we offer several factors of a website like responsive <br /> developent, Basic Seo Optimization, Page Speed etc
                </Balancer>
            </p>

            <div className='space-y-20 pt-32 max-w-[1000px] mx-auto'>
                {
                    ServicewhatWeOfferConstants.map((data, i) => <div className='grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-24 place-items-center' key={i}>
                        <div className='space-y-2 md:text-start text-center'>
                            <h1 className='text-2xl font-semibold uppercase'>{data.title}</h1>
                            <p className='text-sm '><Balancer>{data.desc}</Balancer></p>
                        </div>
                        <div className={`${data.left ? "order-first md:order-first justify-start" : "order-first md:order-last  justify-end"} w-full flex `}>
                            <Image className='rounded-ss-[40px] rounded-ee-[40px]' width={450} height={266} src={data.img} alt={data.alt} />
                        </div>


                    </div>)
                }
            </div>

        </div>
    );
};

export default ServiceWhatWeOffer;