import MainContainer from '@/Components/Shared/MainContainer/MainContainer';
import { BlogHeroConstants } from '@/Constants/BlogPage/BlogPageConstants';
import Image from 'next/image';
import React from 'react';
import { Balancer } from 'react-wrap-balancer';

const BlogPageHero = () => {
    return (
        <div className='px-20 py-20'>
            <div className='grid grid-cols-2 place-items-center'>
                <div>
                    <h1 className='text-[40px] leading-[46px] lg:text-[64px] font-bold lg:leading-[72px]  text-gray-700'>
                        {
                            BlogHeroConstants.title
                        }
                        <p className='text-[#666] text-[16px] leading-[20px] mt-6 font-medium'>

                                {
                                    BlogHeroConstants.desc
                                }
                        </p>
                    </h1>
                </div>
                <div className='md:w-[70%] mx-auto'>
                    <Image width={500} className='rounded-ss-[30px] rounded-ee-[40px]' height={500} src={BlogHeroConstants.img} alt={BlogHeroConstants.alt} />
                </div>
            </div>
         
        </div>
    );
};

export default BlogPageHero;