'use client'

import React from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { toggleMobileMenuState } from '@/lib/features/ui/uiStateSlice';

interface MobileMenuItemProps
{
    title: string,
    index: number,
    expectedPathname: string,
}

function MobileMenuItem(props: MobileMenuItemProps) 
{
    const { title, index, expectedPathname } = props;

    const pathname = usePathname();
    const isMobileMenuOpen  = useAppSelector(state => state.uiState.isMobileMenuOpen);
    const dispatch = useAppDispatch();

    const indexString = index.toString();
    const padIndex = indexString.length <= 1 ? indexString.padStart(2, '0') :  indexString;

    const handleClick = () => 
    {
        dispatch(toggleMobileMenuState(isMobileMenuOpen));
    }

    return (
        <li>
            <Link onClick={handleClick} href={expectedPathname} className='flex gap-3'>
                <label className='pointer-events-none font-bold'>{padIndex}</label>
                <label className='pointer-events-none'>{title}</label>
            </Link>
        </li>
    )
}

export default MobileMenuItem