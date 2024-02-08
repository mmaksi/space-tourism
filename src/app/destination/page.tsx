import React from 'react';

import { promises as fs } from 'fs';
import { DataJson } from '@/types/data';

import MobileMenu from '@/components/shared/MobileMenu/MobileMenu';
import Header from '@/components/shared/Header/Header'
import PlanetCarousel from '@/components/destinations/PlanetCarousel';
import PageTitle from '@/components/shared/PageTitle';

async function DestinationPage() 
{
    const file = await fs.readFile(process.cwd() + '/src/assets/data.json', 'utf-8');
    const data: DataJson = JSON.parse(file);
    const destinations = data.destinations;

    return (
        <div className='min-h-[100dvh] w-full flex justify-center destination-background'>
            <div className='w-full max-w-[1536px] min-h-full relative'>
                <Header/>

                <MobileMenu/>

                <main>

                    <PageTitle index={1} title='PICK YOUR DESTINATION'/>

                    <PlanetCarousel destinations={destinations}/>
                </main>
            </div>
        </div>
    )
}

export default DestinationPage