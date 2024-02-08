'use client';

import React from 'react'

import { Barlow_Condensed } from 'next/font/google'; 
import PlanetCarouselControllerButton from './PlanetCarouselControllerButton';
import { v4 as uuid } from 'uuid';

import { Destination } from '@/types/data';

const barlowCondensed = Barlow_Condensed({ 
    weight:['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'] 
})

interface PlanetCarouselControllersProps {
    slideIndex: number,
    destinations: Destination[],
    currentDestination: Destination,
}

function PlanetCarouselControllers(props: PlanetCarouselControllersProps) 
{

    const { destinations, slideIndex } = props;

    return (
        <div className=''>
            <ul className={`flex gap-7 h-[53px] tracking-[2.7px] ${barlowCondensed.className}
                            max-dest-md:justify-center max-dest-md:gap-8 max-dest-md: mb-5
                            max-sm:gap-5 max-sm: mb-0`}>

                {destinations.map((destination, index) => 
                    <PlanetCarouselControllerButton key={uuid()}
                        name={destination.name}
                        index={index}
                        slideIndex={slideIndex}/>
                )}
                
            </ul>
        </div>
    )
}

export default PlanetCarouselControllers