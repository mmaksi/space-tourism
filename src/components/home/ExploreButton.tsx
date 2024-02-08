import React from 'react'
import Link from 'next/link';

import { Bellefair } from 'next/font/google';

const bellefair = Bellefair({ weight:['400'], subsets: ['latin']});

function ExploreButton() 
{
    return (
        <Link href={'/destination'}
              className={`flex items-center relative justify-center group cursor-pointer ${bellefair.className}`}>
              
            <div 
            className='w-[250px] h-[250px] rounded-full absolute z-0 transition-all duration-700 ease-in-out bg-[rgba(255,255,255,0.2)]
                        group-hover:animate-in-and-out
                        max-home-md:animate-in-and-out
                        max-sm:w-[150px] max-sm:h-[150px]'/>

            
            <div className='w-[250px] h-[250px] rounded-full flex items-center justify-center z-[1] bg-white
                            group-hover:scale-90 transition-all duration-200
                            max-sm:w-[150px] max-sm:h-[150px]'>
            <button className='text-black text-[32px] tracking-[2px]
                                max-sm:text-[20px]'>
                EXPLORE
            </button>
            </div>
            
        </Link>
    )
}

export default ExploreButton