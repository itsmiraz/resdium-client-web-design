import React from 'react';
import BlogCard from '../BlogCard/BlogCard';
import { useQuery } from '@tanstack/react-query';
import { BlogCardSekeleton } from '@/Components/Skeletons/Sekeletons';

const BlogsSection = () => {


    const { data: blogs, isLoading, isError } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await fetch('https://resdium.netlify.app/api/blogs/allblogs')
            const data = await res.json()
            return data
        }
    })

    return (
        <div className='py-10 lg:py-20 px-6 lg:px-20'>
            <h1 className='py-10 text-gray-700 text-4xl font-bold uppercase text-center'>
                Blogs
            </h1>
            <div className=''>
                {isError ?
                    <div>

                        <h1 className='text-4xl font-semibold text-gray-600 animate-pulse text-center my-40'>Something Went Wrong </h1>

                    </div>

                    :
                    <>
                        {
                            isLoading ?
                                <div className='grid-cols-1 md:grid-cols-2  lg:grid-cols-3 grid gap-10'>
                                    <BlogCardSekeleton />
                                    <BlogCardSekeleton />
                                    <BlogCardSekeleton />
                                    <BlogCardSekeleton />
                                    <BlogCardSekeleton />
                                    <BlogCardSekeleton />
                                </div>
                                :
                                <div className='grid-cols-1 md:grid-cols-2  lg:grid-cols-3 grid gap-10'>
                                    {
                                        blogs?.map((data, i) => <BlogCard key={i} blog={data} />)
                                    }
                                </div>
                        }
                    </>
                }
            </div>

        </div>
    );
};

export default BlogsSection;