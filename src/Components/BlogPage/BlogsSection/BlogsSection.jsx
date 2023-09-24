import React, { useState } from 'react';
import BlogCard from '../BlogCard/BlogCard';
import { useQuery } from '@tanstack/react-query';
import { BlogCardSekeleton } from '@/Components/Skeletons/Sekeletons';
import { useRouter } from 'next/router';

const BlogsSection = () => {

    const router = useRouter();
   
  const { data: blogs, isInitialLoading, isError, isLoading } = useQuery({
    queryKey: ['blogs'],
    queryFn: async () => {
      try {
        // Get the current domain from the router
        const currentDomain = `${window.location.protocol}//${window.location.host}`;

        // Construct the API URL using the current domain
        const apiURL = `${currentDomain}/api/blogs/allblogs`;

        const res = await fetch(apiURL);
        const data = await res.json();
        return data;
      } catch (error) {
        throw error;
      }
    },
    initialData: [], // Provide an empty array as initial data
  });




    return (
        <div className='py-10 lg:py-20 px-6 lg:px-20'>
            <h1 className='py-10 text-gray-700 text-4xl font-bold uppercase text-center'>
                Blogs
            </h1>
            <div className=''>

                {
                    isLoading || (Array.isArray(blogs) && blogs.length === 0) ?
                        <div className='grid-cols-1 md:grid-cols-2  lg:grid-cols-3 grid gap-10'>
                            <BlogCardSekeleton />
                            <BlogCardSekeleton />
                            <BlogCardSekeleton />
                            <BlogCardSekeleton />
                            <BlogCardSekeleton />
                            <BlogCardSekeleton />
                        </div>
                        :
                        <>

                            {isError ?
                                <div>

                                    <h1 className='text-4xl font-semibold text-gray-600 animate-pulse text-center my-40'>Something Went Wrong </h1>

                                </div>

                                :
                                <>

                                    <div className='grid-cols-1 md:grid-cols-2  lg:grid-cols-3 grid gap-10'>
                                        {
                                            blogs?.map((data, i) => <BlogCard key={i} blog={data} />)
                                        }
                                    </div>
                                </>
                            }

                        </>

                }



            </div>

        </div>
    );
};

export default BlogsSection;