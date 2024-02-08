import React from 'react'

import { Barlow_Condensed } from 'next/font/google'; 

const barlowCondensed = Barlow_Condensed({ 
    weight:['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'] 
})

interface PageTitleProps {
    index: number,
    title: string,
}

function PageTitle(props: PageTitleProps) 
{
    const { index, title } = props;

    const indexString = index.toString();
    const padIndex = indexString.length <= 1 ? indexString.padStart(2, '0') :  indexString;

    return (
        <div className={`text-[25px] tracking-[4.72px] px-28 mb-8 pt-4 ${barlowCondensed.className}
                        max-dest-md:px-12 max-dest-md:pt-8 max-dest-md:mb-12 max-dest-md:text-[23px]
                        max-sm:text-base max-sm:px-0 max-sm:flex max-sm:justify-center max-sm:items-center max-sm:text-center
                        max-sm:mb-8 max-sm:mt-0`}>

            <h2 className='flex gap-3'>
                <label className='text-[rgba(255,255,255,0.4)]'>
                    { padIndex }
                </label>
                <label>
                    { title }
                </label>
            </h2>
        </div>
    )
}

export default PageTitle