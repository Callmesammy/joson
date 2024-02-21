import { useEffect, useState } from "react"

export const ScrollView =(threscord = 10)=>{
    const [scrooled, setScrooled] = useState(false);

    useEffect(()=>{
    const handleScrolled =()=>{
        if(window.scrollY > threscord){
            setScrooled(true);
        }else{
            setScrooled(false);
        }
    }
    window.addEventListener("scroll", handleScrolled)
    return()=> window.removeEventListener("scroll", handleScrolled);    
},[threscord]);
return scrooled;
}