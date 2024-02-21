

import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

const spinnerVarient = cva(
    "text-muted-foreground animate-spin",
    {
        variants: {
            size:{
                default: "h-4 w-4",
                sm: "h-2 w-2",
                lg: "w-6 h-6"
            }
        },
        defaultVariants:{
            size: "default"
        },
    },
);

interface spinnerProps extends VariantProps<typeof spinnerVarient>{};

export const Loading=({
    size,
}:spinnerProps)=>{
    return (
        <Loader className={cn(spinnerVarient({size}))}/>
    )
};