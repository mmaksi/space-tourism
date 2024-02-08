'use client';

import React, { useEffect } from 'react'

import { MdOutlineClose } from "react-icons/md";

import { Barlow_Condensed } from 'next/font/google'; 

const barlowCondensed = Barlow_Condensed({ 
    weight:['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'] 
})

import MobileMenuItem from './MobileMenuItem'
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { toggleMobileMenuState } from '@/lib/features/ui/uiStateSlice';
import { useWindowWidthSize } from '@/utils/useWindowSize';

function MobileMenu() 
{
    const windowWidth = useWindowWidthSize()
    const isMobileMenuOpen = useAppSelector(state => state.uiState.isMobileMenuOpen)
    const dispatch = useAppDispatch();
    
    const handleClick = () => 
    {
        dispatch(toggleMobileMenuState(isMobileMenuOpen));
    }

    useEffect(() => {

        if(!(windowWidth > 640 && isMobileMenuOpen)) { return }
        dispatch(toggleMobileMenuState(true));
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [windowWidth])

    return (
        <div style={{width: isMobileMenuOpen ? '260px' : '0px'}}
             className='absolute top-0 right-0 min-h-full glass z-10 overflow-x-hidden overflow-y-auto transition-all duration-500'>
            <div className='min-w-[260px] h-full px-8 pt-24 relative'>
                
                <button onClick={handleClick} className='absolute top-8 right-8 text-4xl'>
                    <MdOutlineClose/>
                </button>

                <ul className={`flex flex-col gap-6 tracking-[2.7px] ${barlowCondensed.className}`}>
                    
                    <MobileMenuItem title='HOME' index={1} expectedPathname='/'/>
                    <MobileMenuItem title='DESTINATION' index={2} expectedPathname='/destination'/>
                    <MobileMenuItem title='CREW' index={3} expectedPathname='/crew'/>
                    <MobileMenuItem title='TECHNOLOGY' index={4} expectedPathname='/technology'/>
                </ul>
            </div>
        </div>
    )
}

export default MobileMenu