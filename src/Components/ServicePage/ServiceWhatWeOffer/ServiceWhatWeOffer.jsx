import { ServicewhatWeOfferConstants } from '@/Constants/ServicePage/ServicePage';
import Image from 'next/image';
import React from 'react';
import { Balancer } from 'react-wrap-balancer';

const ServiceWhatWeOffer = () => {
    return (
        <div className='px-20 py-32'>
            <h1 className='uppercase text-center text-[32px] font-bold text-[#212121]'>what  we offer</h1>
            <p className='text-center text-sm leading-[16px] text-[#353535]'>
                <Balancer>
                    At RESDIUM, our web development process is engineered to elevate your <br className='md:block hidden' /> online brand.
                    We achieve this through a series of impactful features
                </Balancer>
            </p>

            <div className='space-y-10 py-32 max-w-[1000px] mx-auto'>
                {
                    ServicewhatWeOfferConstants.map((data, i) => <div className='grid grid-cols-2 gap-24 place-items-center' key={i}>
                        <div className='space-y-2'>
                            <h1 className='text-2xl font-semibold uppercase'>{data.title}</h1>
                            <p className='text-sm '><Balancer>{data.desc}</Balancer></p>
                        </div>
                        <div className={`${data.left ? "order-first justify-start" : "order-last  justify-end"} w-full flex `}>
                            <Image className='rounded-ss-[40px] rounded-ee-[40px]' width={450} height={266} src={data.img} alt={data.alt} />
                        </div>


                    </div>)
                }
            </div>

        </div>
    );
};

export default ServiceWhatWeOffer;