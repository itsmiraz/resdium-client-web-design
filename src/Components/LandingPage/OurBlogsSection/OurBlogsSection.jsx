import BlogCard from '@/Components/BlogPage/BlogCard/BlogCard';
import { BlogCardSekeleton } from '@/Components/Skeletons/Sekeletons';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion'
import { slideAnimation } from '@/lib/motion';
import { MAINBTN } from '@/Components/Modules/Buttons/Buttons';
import Link from 'next/link';

const OurBlogsSection = () => {
    const [totalBlogs, setTotalBlogs] = useState(0);


    const currentPage = 1;
    const perPage = 9; // Number of items per page

    const { data: blogs, isInitialLoading, isError, isLoading } = useQuery({
        queryKey: ['blogs', currentPage, perPage],
        queryFn: async () => {
            try {
                // Fetch data from the API using the current page and perPage values
                const res = await fetch(`/api/blogs/allblogs?page=${currentPage}&perPage=${perPage}`);
                const data = await res.json();
                setTotalBlogs(data.totalBlogs); // Set totalBlogs from the API response
                return data.blogs;
            } catch (error) {
                throw error;
            }
        },

    });



    const [sectionRef, inView] = useInView({
        triggerOnce: true, // Trigger animation once when it enters the viewport
        threshold: 0.2, // Adjust this threshold as needed
    });

    // State to control whether animations should play
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (inView) {
            setAnimate(true);
        }
    }, [inView]);


    return (
        <div ref={sectionRef} className='py-20 px-6 lg:px-20'>
            <motion.div
                initial='initial'
                animate={animate ? 'animate' : 'initial'}
                exit='exit'
                variants={slideAnimation('up')}
            >
                <h1 className=' text-[28px] pb-4 md:pb-10 md:text-[40px] text-center font-bold text-[#353535]'>Our Blogs</h1>
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
                                                blogs?.slice(0, 3).map((data, i) => <BlogCard key={i} blog={data} />)
                                            }
                                        </div>
                                        <div className='text-center mt-10'>

                                            <Link href={'blogs'}><MAINBTN title={'View All'}/></Link>
                                        </div>

                                    </>
                                }

                            </>

                    }



                </div>
            </motion.div>
        </div>
    );
};

export default OurBlogsSection;