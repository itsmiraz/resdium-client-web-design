import { MAINBTN } from '@/Components/Modules/Buttons/Buttons';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const FeaturedBlog = () => {
    const { data: blogs, isError, isLoading } = useQuery({
        queryKey: ['blogs',],
        queryFn: async () => {
            try {
                const res = await fetch(`/api/blogs/featured`);
                const data = await res.json();
                return data
            } catch (error) {
                throw error;
            }
        },

    });

    return (
        <div className='px-6 py-10 md:py-32 lg:px-20'>
            <h2 className='font-semibold text-2xl pb-4'>Featured Blog Posts</h2>
            {
                isLoading ? <div className='grid gap-4 lg:gap-10 grid-cols-6'>
                    <div className='col-span-6 lg:col-span-4 rounded-ee-[20px] rounded-ss-[20px] bg-gray-300 animate-pulse w-full h-[200px] lg:h-[645px]'>

                    </div>
                    <div className='col-span-6 lg:col-span-2 space-y-4 lg:space-y-6'>
                        <div className=' rounded-ee-[20px] rounded-ss-[20px] bg-gray-300 animate-pulse w-full h-[100px] lg:h-[200px]'>

                        </div>
                        <div className=' rounded-ee-[20px] rounded-ss-[20px] bg-gray-300 animate-pulse w-full h-[100px] lg:h-[200px]'>

                        </div>
                        <div className=' rounded-ee-[20px] rounded-ss-[20px] bg-gray-300 animate-pulse w-full h-[100px] lg:h-[200px]'>

                        </div>
                    </div>
                </div>
                    :
                    <div className='grid gap-4 lg:gap-10 grid-cols-7'>
                        <div className='col-span-7 bg-[#EEE] h-fit pb-8  lg:col-span-4 overflow-hidden   w-full'>
                            <Image height={500} width={400} src={blogs[0].img} alt={blogs[0].alt} className='w-full  rounded-ee-[20px] rounded-ss-[20px]' />
                            <div className='px-6 pb-4'>
                                <div className='flex gap-x-6 text-xs lg:text-lg font-medium py-4'>
                                    <p className=' '>Blog by <Link className='hover:underline' href={'/'}>Resdium Digital</Link></p>
                                    <p>5 min Read</p>
                                    <p>Date : {blogs[0].date}</p>
                                </div>
                                <div>
                                    <h3 className='text-2xl lg:text-3xl font-semibold'>{blogs[0].title}</h3>
                                    <p className='text-[#666] text-[12px] lg:text-[16px]  lg:leading-[20px] leading-[18px] md:leading-[14px] font-medium py-4'>
                                        {blogs[0].outline.slice(0, 200)}..
                                    </p>
                                    <div className=''>
                                        <Link href={'/blog/[title]/[id]'} as={`/blog/${blogs[0].siteUrl}/${blogs[0]._id}`}>
                                            <MAINBTN title={'Read More'} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-7 lg:col-span-3 '>
                            {
                                blogs?.slice(1, 5).map((blog) => <HorizontalBlogCard key={blog._id} data={blog}></HorizontalBlogCard>)
                            }
                        </div>
                    </div>
            }
        </div>
    );
};

export default FeaturedBlog;

const HorizontalBlogCard = ({ data }) => {

    const {
        _id,
        img,
        alt,
        title,
        outline,
        siteUrl,date
    } = data


    return <div className='grid  w-full mb-8 bg-[#eee] gap-x-4 grid-cols-6'>
        <div className='col-span-3'>
            <Image src={img} alt={alt} className='w-full h-full rounded-ee-[10px] rounded-ss-[10px]' width={250} height={150}  />
        </div>
        <div className='col-span-3 px-2 py-2 lg:py-5 flex flex-col justify-between  items-start'>
            <div>
                <p className='text-xs md:text-lg'>Date: { date}</p>
            </div>
            <h2 className='text-[16px] md:text-xl leading-[16px] lg:leading-[22px] font-medium'>{title.slice(0,40)}</h2>
            <div>
                <Link  href={'/blog/[title]/[id]'} as={`/blog/${siteUrl}/${_id}`}>
                    <button className='flex text-xs md:text-lg gap-x-2 items-center'>Read More  <AiOutlineRight /></button>
                </Link>
          </div>
    </div>
    </div>
}