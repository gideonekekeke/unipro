import React from 'react'
import Facts from '../Home/Facts/Facts'
import HeroSection from '../Home/HeroSection/HeroSection'
import Allcom from '../Home/LearningComp/MyOwn/Allcom'
import QuickStart from '../Home/InterestComp/QuickStart'
import AreaStudy from '../Home/InterestComp/AreaStudy'



function Home() {
    return (
        <>
            <HeroSection />
            <Allcom />
            <QuickStart />
            <AreaStudy />
            <Facts />
            
        </>
    )
}

export default Home
