import { BlogDetailsSkelton } from "@/Components/Skeletons/Sekeletons";
import { fetchBlogDetails } from "@/lib/api";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React  from "react";
import { Balancer } from "react-wrap-balancer";

export async function getServerSideProps({ params }) {
  // params contains the route parameters, including 'id'
  const { id } = params;
  const blogDetails = await fetchBlogDetails(id);

  return {
    props: {
      blogDetails,
    },
  };
}

const SingleBlog = ({ blogDetails }) => {

  

  if (!blogDetails?.title) {
    return <BlogDetailsSkelton />;
  }

  const {
    _id,
    title,
    keywords,
    meta_description,
    img,
    alt,
    content,
    outline,
    date,
    postedBy,
    siteUrl,
  } = blogDetails;

  return (
    <div>
      <Head>
        <title>{title}| Resdium Blogs</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://www.resdium.live/${siteUrl}/${_id} `}
        />
        <meta property="og:site_name" content="Resdium" />
        <meta property="og:title" content={`${title}| Resdium Blogs`} />
        <meta name="keywords" content={keywords} />
        <meta name="description" content={meta_description} />
        <meta name="head:count" content="0" />
        <meta name="twitter:widgets:csp" content="on" />
        <meta property="og:image" content={img} />
        <meta property="og:image:alt" content={alt}></meta>
        <meta property="og:image:width" content="1200" />{" "}
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@resdium" />
        <meta name="twitter:creator" content="@resdium" />
        <meta name="twitter:image" content={img} />
        <meta property="og:description" content={meta_description} />
        <meta property="og:image" content={img} />
        <meta name="author" content="Resdium" />
      </Head>

      <section className="max-w-[900px] mx-auto py-4 lg:py-10 px-6">
        {/* BredCumb */}
        <div className="text-xs lg:text-sm  my-4 gap-x-2 flex items-center">
          <p>
            <Link href="/"> Home</Link>
          </p>
          <span>/</span>
          <p>
            <Link href="/blogs"> Blogs</Link>
          </p>
          <span>/</span>
          <p className="md:block hidden">{title}</p>
        </div>

        {/* Top Imagee */}
        <div className="max-w-[900px] max-h-[400px] overflow-hidden mx-auto rounded-ee-[40px] rounded-ss-[40px]  flex justify-center items-center">
          <Image
            width={800}
            height={600}
            className="w-full scale-100 hover:scale-110 duration-300 transition-all"
            src={img}
            alt={alt}
          />
        </div>
        {/* Outline and Title */}

        <section className="">
          <h1 className="text-[28px] lg:text-[40px] leading-[30px] lg:leading-[45px] text-[#212121] my-8 font-bold">
            {title}
          </h1>
          <p className="text-[16px] lg:text-xl text-zinc-700 font-medium">
            <Balancer>{outline}</Balancer>
          </p>
          <div className="my-8">
            <hr />
            <div className="lg:text-lg text-xs flex font-medium justify-between py-2 lg:py-6 ">
              <p>Date: {date}</p>
              <p>Posted by : {postedBy}</p>
            </div>
            <hr />
          </div>
        </section>

        {/* Content */}
        <section>
          {content?.map((data, i) => (
            <div key={i} className="space-y-2 mb-10">
              <h1 className="text-xl font-semibold ">{data.section}</h1>
              <p className="lg:text-lg text-sm text-medium">
                <Balancer>{data.content}</Balancer>
              </p>
              {data?.ul && (
                <>
                  <ul className="list-disc pl-10">
                    {data.ul.map((lis, i) => (
                      <li key={i}>{lis}</li>
                    ))}
                  </ul>
                </>
              )}
              {data?.other && (
                <p className="lg:text-lg text-sm text-medium">
                  <Balancer>{data.other}</Balancer>
                </p>
              )}
            </div>
          ))}
        </section>
      </section>
    </div>
  );
};

export default SingleBlog;
