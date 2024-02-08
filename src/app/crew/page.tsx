
import React from 'react'

import { promises as fs } from 'fs';
import { DataJson } from '@/types/data';

import CrewCarousel from '@/components/crew/CrewCarousel'
import Header from '@/components/shared/Header/Header'
import MobileMenu from '@/components/shared/MobileMenu/MobileMenu'
import PageTitle from '@/components/shared/PageTitle'
import MainFiller from '@/components/shared/MainFiller';

async function CrewPage() 
{
    const file = await fs.readFile(process.cwd() + '/src/assets/data.json', 'utf-8');
    const data: DataJson = JSON.parse(file);
    const crew = data.crew;

    const headerHeight = { desktop: 100, tablet: { home: 75, destination: 75 }, mobile: 75 }
    const titleHeight = { desktop: 85.5, tablet: { home: 86.5, destination: 114.5 }, mobile: 88 }

    return (
        <div className='min-h-[100dvh] w-full flex justify-center crew-background'>

            <div className="w-full max-w-[1536px] flex-col min-h-full relative">

                <Header/>

                <MobileMenu/>

                <MainFiller>

                    <PageTitle index={2} title='MEET YOUR CREW'/>
                    
                    <div className='h-[calc(100dvh-185.5px)] max-h-[600px] min-h-[400px]
                                    max-home-md:h-[calc(100dvh-161.5px)]
                                    max-dest-md:h-[calc(100dvh-189.5px)] max-dest-md:max-h-[1200px] max-dest-md:min-h-[800px]
                                    max-sm:h-[calc(100dvh-163px)] max-sm:min-h-[500px]'>

                        <CrewCarousel crew={crew}/>
                        
                    </div>
                   
                </MainFiller>
            
            </div>

        </div>
    )
}

export default CrewPage