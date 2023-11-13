import React from 'react';
import { Balancer } from 'react-wrap-balancer';

const BlogPageHero = () => {
    return (
        <div className='px-10 lg:px-20 py-20 relative  lg:py-32 rounded-es-[30px]  inner-shadow bg-gradient-to-r from-[#307280] to-[#263C47]'>
            <div className='text-start'>
                <span className='text-white bg-[#263C47] px-3 py-1 rounded-ss-[3px] rounded-ee-[3px] '>BLOGS</span>
                    <h1 className='text-[34px] leading-[36px] text-white lg:text-[64px] mt-2 font-bold lg:leading-[72px]  '>
                    Explore Our Latest Blogs

                    </h1>
                    <p className='text-[#cacaca] text-[12px] leading-[16px]  lg:text-[18px] lg:leading-[20px] mt-3 lg:mt-6 font-medium'>

                        <Balancer>
                            Welcome to our blog, a treasure trove of insights and ideas at the forefront of <br className='md:block hidden' />  web design, development,  and digital marketing. Our platform is your gateway  <br className='md:block hidden' /> to unlocking the secrets of success in the ever-evolving digital landscape.
                        </Balancer>
                    </p>
                </div>

            

        </div>
    );
};

export default BlogPageHero;