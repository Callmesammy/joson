"use client"
import Image from "next/image";
const Logo=()=>{
    return(
     <div className=" hidden lg:flex relative mx-3 p-3 pb-4 gap-x-10 w-[55px] h-[50px]  ">
        <Image
        src="/logo.svg"
        alt="logo"
       fill
       className="dark:hidden"
         />
          <Image
        src="/logo-dark.svg"
        alt="logo"
       fill
       className="dark:block hidden"
         />
         <p className="font-bold mx-10 ">MotionMW</p>
        </div>
    )
}

export default Logo;