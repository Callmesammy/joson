"use cleint"

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Header=()=>{
    return(
        <div className="flex flex-col text-center  space-y-6 min-w-3xl">
        <h1 className=" text-3xl  font-bold  lg:text-6xl"> Your Ideas, Documents, & Plans Unified. Welcome to <span className="underline"> MotionMW</span></h1>
        <h3 className="font-semibold">MotionMW is the connected, application where better, and faster workspace happens, enjoy</h3>
        <Button className="mx-auto ">
        Enter MotionMW 
        <ArrowRight className="w-4 h-4 ml-3"/>
        </Button>
        </div>
    )
}

export default Header;