import React from 'react'
import Logo from '../Logo';


import Navbar from './Navbar/Navbar';
import OpenMobileMenuButton from './Navbar/OpenMobileMenuButton';
import Link from 'next/link';

function Header() 
{

    return (
        <header className='h-[75px] mt-[25px] flex items-center justify-between
                           max-home-md:mt-0'>
            
          <Link className='h-full pl-[30px] flex items-center justify-center' href={'/'}>
            <div className='w-[40px] h-[40px]'>
                <Logo/>
            </div>
              
          </Link>

          <Navbar/>

          
          <OpenMobileMenuButton/>

        </header>
    )
}

export default Header