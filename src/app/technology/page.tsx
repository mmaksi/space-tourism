import Header from '@/components/shared/Header/Header'
import MobileMenu from '@/components/shared/MobileMenu/MobileMenu'
import PageTitle from '@/components/shared/PageTitle'
import React from 'react'

import { promises as fs } from 'fs';
import { DataJson } from '@/types/data';
import TechCarousel from '@/components/technology/TechCarousel';

async function TechnologyPage() 
{
    const file = await fs.readFile(process.cwd() + '/src/assets/data.json', 'utf-8');
    const data: DataJson = JSON.parse(file);
    const technology = data.technology;

    return (
        <div className='min-h-[100dvh] w-full flex justify-center technology-background'>

                <div className="w-full max-w-[1536px] flex-col min-h-full relative">

                    <Header/>
                    <MobileMenu/>

                    <main className='relative'>
                        <PageTitle index={3} title='SPACE LAUNCH 101'/>

                        <TechCarousel techs={technology}/>
                    </main>

                </div>
        </div>
    )
}

export default TechnologyPage