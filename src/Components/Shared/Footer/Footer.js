import React from 'react';
import logo from '../../../Assets/Logos/resdium-logo-white.webp'
import Image from 'next/image';


const Footer = () => {
    return (
        <footer className='py-10 px-20 bg-[#284B63]'>
            <div>
                <div>
                <Image src={logo} alt='resdium-logo' className='md:w-40 w-32'/>
                    <h1 className='text-white pt-6 pb-2 font-medium text-sm'>Resdium Digital Ltd.</h1>
                    <h1 className='text-white  font-medium text-xs'>Email: miraj.resdium@gmail.com</h1>
                </div>
          </div>
        </footer>
    );
};

export default Footer;