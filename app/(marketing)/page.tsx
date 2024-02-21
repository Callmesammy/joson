import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Picture from "./_components/Picture";

const MainPage =()=>{
    return(
        <div className="flex flex-col min-h-full ">
            <div className="flex flex-col justify-center text-center items-center tansitions min-h-3xl flex-1 gap-y-6 pb-6 lg:justify-start">
            <Header/>
           <Picture/>
            </div>  
                 <Footer/>

            </div>
    )
}

export default MainPage;