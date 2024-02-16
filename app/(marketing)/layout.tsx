
interface marketingProps{
    children: React.ReactNode
}

const MarketingMain =({
    children
}: marketingProps)=>{
    return(
        <div className="mt-0 h-full">
            {children}
        </div>
    )
}

export default MarketingMain;