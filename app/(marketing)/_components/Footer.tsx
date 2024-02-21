"use client"
import Image from "next/image"
import Logo from "./Logo";
import { Button } from "@/components/ui/button";


const Footer =()=>{
    return(
        <div className="flex dark:bg-[#1F1F1F] mx-2 p-5 gap-x-3 ">
        <Logo/>
        <div className="justify-between text-muted-foreground w-full lg:ml-auto items-center lg:justify-end flex">
        <Button size="sm" variant="ghost"> Privacy policy </Button>
           <Button size="sm" variant="ghost"> Tems and Condition </Button>
        </div>
        </div>
    )
}

export default Footer;