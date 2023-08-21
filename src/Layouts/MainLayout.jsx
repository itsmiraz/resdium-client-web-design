import React from 'react';
import { Montserrat } from '@next/font/google'
import Header from '@/Components/Shared/Header/Header';


const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700"],
});
const MainLayout = ({ children }) => {

    return (
        <div className={montserrat.className}>
            <div className="relative  mx-auto max-w-[1520px] transition-all duration-300 ease-in-out">
                <Header />
                {children}
            </div>
        </div>
    );
};

export default MainLayout;