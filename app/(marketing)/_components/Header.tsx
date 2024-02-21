"use client"

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useConvexAuth } from "convex/react";
import { Loading } from "./spinner-loading";
import Link from "next/link";
import { SignInButton } from "@clerk/nextjs";



const Header=()=>{
 const { isLoading, isAuthenticated } = useConvexAuth();

    return(
        <div className="flex flex-col text-center  space-y-6 min-w-3xl">
        <h1 className=" text-3xl  font-bold  lg:text-6xl"> Your Ideas, Documents, & Plans Unified. Welcome to <span className="underline"> MotionMW</span></h1>
        <h3 className="font-semibold">MotionMW is the connected, application where better, and faster workspace happens, enjoy</h3>
        {
            isLoading && (
                <div className="items-center justify-center w-full flex">
                <Loading size="lg"/>
                </div>
            )
        }

        {!isAuthenticated && !isLoading && (
            <SignInButton>
         <Button className="mx-auto ">
        Create MotionMW 
        <ArrowRight className="w-4 h-4 ml-3"/>
        </Button>
        </SignInButton>
        )}
      
      {isAuthenticated && !isLoading &&(
          <Button className="mx-auto" asChild>
            <Link href="/documents">
        Enter MotionMW 
        <ArrowRight className="w-4 h-4 ml-3"/>
        </Link>
        </Button>
        )}
      
       
        </div>
    )
}

export default Header;