import React, { useRef } from 'react';
import { Montserrat } from '@next/font/google'
import Header from '@/Components/Shared/Header/Header';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { useRouter } from 'next/router';
import Footer from '@/Components/Shared/Footer/Footer';
import { Toaster } from 'react-hot-toast';
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700"],
});
// Create a client


const MainLayout = ({ children }) => {


    return (
        <div className={montserrat.className}>

            <div className="relative  mx-auto max-w-[1520px] transition-all duration-300 ease-in-out">
                <Header />
                {children}
                <Footer />
            </div>
            <Toaster />
        </div>
    );
};

export default MainLayout;