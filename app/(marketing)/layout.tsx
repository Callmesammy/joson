"use client"

import Navbar from "./_components/Navbar";

interface marketingProps{
    children: React.ReactNode
}

const MarketingMain =({
    children
}: marketingProps)=>{
    return(
        <div className="dark:bg-[#1F1F1F] h-full">
         
            <main className="pt-40 h-full"> 
              <Navbar/>
            {children}
            </main>
        </div>
    )
}

export default MarketingMain;