"use client"
import Image from "next/image";
const Picture =()=>{
    return(
        <div className="flex items-center">
        <div className="justify-center relative gap-x-6  flex h-[350px] w-[300px]">
        <Image 
        src="/documents.png"
        alt="documents"
        fill
        className="object-contain dark:hidden"/>
         <Image 
        src="/documents-dark.png"
        alt="documents-dark"
        fill
        className="object-contain hidden dark:block"/>
        </div>
        <div className=" relative hidden lg:flex h-[350px] w-[300px]">
         <Image 
        src="/reading.png"
        alt="reading"
        fill
        className="object-contain dark-hidden"/>
         <Image 
        src="/reading-dark.png"
        alt="reading"
        fill
        className="object-contain dark:block hidden"/>
        </div>
        </div>
        )
}

export default Picture;