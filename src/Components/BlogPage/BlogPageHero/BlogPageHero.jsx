import { BlogHeroConstants } from '@/Constants/BlogPage/BlogPageConstants';
import Image from 'next/image';
import React from 'react';
import { Balancer } from 'react-wrap-balancer';

const BlogPageHero = () => {
    return (
        <div className='px-6 lg:px-20 py-10 lg:py-32 rounded-ee-[40px] rounded-ss-[40px] inner-shadow bg-[#284B63]'>
            <div className=' place-items-center gap-10 px-4'>
                <div className='text-center'>
                    <h1 className='text-[32px] leading-[36px] text-white lg:text-[64px] font-bold lg:leading-[72px]  '>
                        {
                            BlogHeroConstants.title
                        }

                    </h1>
                    <p className='text-[#cacaca] text-[14px] leading-[16px]  lg:text-[18px] lg:leading-[20px] mt-3 lg:mt-6 font-medium'>

                        <Balancer>
                            Welcome to our blog, a treasure trove of insights and ideas at the forefront of <br className='md:block hidden' />  web design, development,  and digital marketing. Our platform is your gateway  <br className='md:block hidden' /> to unlocking the secrets of success in the ever-evolving digital landscape.
                        </Balancer>
                    </p>
                </div>
                {/* <div className='lg:order-last order-first mx-auto'>
                    <Image width={500} className='rounded-ss-[30px] rounded-ee-[40px]' height={500} src={BlogHeroConstants.img} alt={BlogHeroConstants.alt} />
                </div> */}
            </div>
        </div>
    );
};

export default BlogPageHero;