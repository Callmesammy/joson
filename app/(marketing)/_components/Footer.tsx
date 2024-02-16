"use client"
import Image from "next/image"
import Logo from "./Logo";
import { Button } from "@/components/ui/button";


const Footer =()=>{
    return(
        <div className="font-bold justify-between flex mx-2 lg:justify-end space-x-3 ">
        <Logo/>
        <Button variant="ghost"> Privacy </Button>
           <Button variant="ghost"> Tems and Condition </Button>
        </div>
    )
}

export default Footer;