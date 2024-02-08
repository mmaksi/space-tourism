'use client'

import React from 'react'
import { HiMiniBars3 } from "react-icons/hi2";

import { toggleMobileMenuState } from '@/lib/features/ui/uiStateSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';

function OpenMobileMenuButton() 
{
    const isMobileMenuOpen  = useAppSelector(state => state.uiState.isMobileMenuOpen);
    const dispatch = useAppDispatch();

    const handleClick = () => 
    {
        dispatch(toggleMobileMenuState(isMobileMenuOpen));
    }

    return (
        <button onClick={handleClick}
                className='hidden text-4xl pr-5 max-sm:inline'> 
            <HiMiniBars3 style={{transform: isMobileMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)'}} 
                         className='transition-all'/>
        </button>
    )
}

export default OpenMobileMenuButton