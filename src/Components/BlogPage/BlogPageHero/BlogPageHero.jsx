import { BlogHeroConstants } from '@/Constants/BlogPage/BlogPageConstants';
import Image from 'next/image';
import React from 'react';

const BlogPageHero = () => {
    return (
        <div className='px-6 lg:px-20 py-10 lg:py-32'>
            <div className='grid grid-cols-1  lg:grid-cols-2 place-items-center gap-10'>
                <div>
                    <h1 className='text-[40px] leading-[46px] lg:text-[64px] font-bold lg:leading-[72px]  text-gray-700'>
                        {
                            BlogHeroConstants.title
                        }
                        <p className='text-[#666] text-[18px] leading-[20px] mt-3 lg:mt-6 font-medium'>

                                {
                                    BlogHeroConstants.desc
                                }
                        </p>
                    </h1>
                </div>
                <div className='lg:order-last order-first mx-auto'>
                    <Image width={500} className='rounded-ss-[30px] rounded-ee-[40px]' height={500} src={BlogHeroConstants.img} alt={BlogHeroConstants.alt} />
                </div>
            </div> 
        </div>
    );
};

export default BlogPageHero;