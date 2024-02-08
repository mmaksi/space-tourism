'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import React from 'react'

interface NavbarItemProps {
    index: number,
    title: string,
    expectedPathname: string,
}


function NavbarItem(props: NavbarItemProps)
{
    const { title, index, expectedPathname } = props;

    const pathname = usePathname();

    const indexString = index.toString();
    const padIndex = indexString.length <= 1 ? indexString.padStart(2, '0') :  indexString;

    return (
        <li className='h-full'>
           <Link className='h-full flex items-center justify-center cursor-pointer relative gap-2 group' href={expectedPathname}>

                {pathname === expectedPathname ? 
                    <div className='absolute w-full h-1 bg-white bottom-0 transition-all group-hover:opacity-100'/> :
                    <div className='absolute w-full h-1 opacity-0 bg-[rgba(255,255,255,0.5)] bottom-0 transition-all group-hover:opacity-100'/>
                }
                
                <label className='font-bold pointer-events-none max-home-md:hidden'>{padIndex}</label>
                <label className='pointer-events-none'>{title}</label>
            </Link> 
        </li>
    )
}

export default NavbarItem