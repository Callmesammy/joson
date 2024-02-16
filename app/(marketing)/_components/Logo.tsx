"use client"
import Image from "next/image";
const Logo=()=>{
    return(
     <div className="flex flex-col relative mx-3 p-3 pb-4 space-x-10 w-[55px] h-[50px]  ">
        <Image
        src="/logo.svg"
        alt="logo"
       fill
         />
         <p className="font-bold ">MotionMW</p>
        </div>
    )
}

export default Logo;