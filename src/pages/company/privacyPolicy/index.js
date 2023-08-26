import { PrivacyPolicyConstants } from '@/Constants/Other/privacyPolicy';
import Head from 'next/head';
import React from 'react';
import { Balancer } from 'react-wrap-balancer';

const PrivacyPolicy = () => {
    return (
        <section className='py-20 max-w-[900px] mx-auto px-6'>
            <Head>
                <title>Privacy Policy | Resdium</title>

            </Head>
            <div>
                <h1 className='text-gray-700 text-center text-[40px] font-semibold '>
                    {PrivacyPolicyConstants.title}
                </h1>

                <div className='py-10'>
                    {
                        PrivacyPolicyConstants.content.map((data, i) => <div className='space-y-2 mb-6' key={i}>
                            <h2 className='font-medium text-xl'>{data.section }</h2>
                            <p>
                                <Balancer>
                                    {
                                        data.content
                                    }
                                </Balancer>
                                </p>
                        </div>)
                    }
                </div>

            </div>
            
        </section>
    );
};

export default PrivacyPolicy;