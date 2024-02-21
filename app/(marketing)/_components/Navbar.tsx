"use client"

import { ScrollView } from "@/hooks/scroll-hook";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { ModeToggle } from "@/components/ui/providers/ModeToggle";
import { useConvexAuth } from "convex/react";
import { Button } from "@/components/ui/button";
import { SignInButton, UserButton } from '@clerk/nextjs';
import { Loading } from "./spinner-loading";


const Navbar =()=>{
     const { isLoading, isAuthenticated } = useConvexAuth();

    const scrolled = ScrollView();

    return(
        <div className={cn("z-50 flex  dark:bg-[#1F1F1F] p-6 fixed items-center bg-background top-0 w-full", 
        scrolled && "border-b shadow-md")}>
        <Logo/>
        <div className="flex gap-x-4 items-center justify-between w-full lg:justify-end">
      
        {isLoading &&(
         <Loading/>
        )}
        {!isAuthenticated && !isLoading &&(
          <>
          <SignInButton mode="modal">
            <Button variant="ghost" size="sm">
              Login</Button>
          </SignInButton>

            <SignInButton >
            <Button >
              Welcome to MotionMW</Button>
          </SignInButton>

          </>
        )}
        {isAuthenticated && !isLoading &&(
        
          <UserButton/>

        )}
                  <ModeToggle/>
       
        </div>

        </div>
    )
}

export default Navbar;