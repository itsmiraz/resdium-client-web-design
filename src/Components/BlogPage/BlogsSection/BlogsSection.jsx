import React, { useState } from 'react';
import BlogCard from '../BlogCard/BlogCard';
import { useQuery } from '@tanstack/react-query';
import { BlogCardSekeleton } from '@/Components/Skeletons/Sekeletons';
import { useRouter } from 'next/router';

const BlogsSection = () => {

    const router = useRouter();

    // Get the current page and perPage from the query parameters
    const { query } = router;
    const [totalBlogs, setTotalBlogs] = useState(0);
    const currentPage = query.page ? parseInt(query.page) : 1;
    const perPage = 9; // Number of items per page

    const { data: blogs,  isError, isLoading } = useQuery({
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


    // Function to handle pagination clicks
    const handlePageChange = (newPage) => {
        // Update the page query parameter in the URL
        router.push(`/blogs?page=${newPage}`);
    };

    return (
        <div className='py-10 lg:py-20 px-6 lg:px-20'>
            <h2 className="font-medium text-2xl pb-4">
                Blogs
            </h2>
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
                                    <div className="flex justify-center my-4">
                                        {/* Pagination controls */}
                                        <button
                                            onClick={() => handlePageChange(currentPage - 1)}
                                            disabled={currentPage === 1}
                                            className="px-4 disabled:text-gray-400 disabled:cursor-not-allowed py-2 mx-2 bg-gray-300"
                                        >
                                            Previous
                                        </button>
                                        <button
                                            onClick={() => handlePageChange(currentPage + 1)}
                                            disabled={(currentPage * perPage) >= totalBlogs}
                                            className="px-4 py-2 disabled:text-gray-400  disabled:bg-gray-200 mx-2 bg-gray-300"
                                        >
                                            Next
                                        </button>
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