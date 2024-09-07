import Image from "next/image"
import  img1 from "../../../public/img1.jpeg"
import  img2 from "../../../public/img2.jpg"
import  img3 from "../../../public/img3.jpg"
import  img4 from "../../../public/img4.jpeg"

export default function HeroSubSection ( ) {
    return( 
      <>
          <div className="sm:hidden  flex justify-evenly items-center border border-10px-black rounded-2xl shadow-xl  hover:shadow-2xl shadow-dark-300 m-12 p-7 ">
            <div className=" sm:hidden flex  flex-col  gap-3">
         <Image className="bg-cover" width={150} height={100}   src = {img1} alt= "img"/>
        <h1 className="sm:hidden text-2xl font-extrabold font-serif">Travel
        Itinerary</h1>
            </div>

            <div>
            <div className="h-24 w-px bg-black sm:hidden"></div>
            </div>

            <div className=" sm:hidden flex  flex-col  gap-3">
            <Image   width={230} height={360}    src ={img2} alt= "img"/>
        <h1 className="sm:hidden text-2xl font-extrabold font-serif"> Coustom Merchendies</h1>
            </div>

            <div>
            <div className="h-24 w-px bg-black  sm:hidden"></div>
            </div>
            <div className="flex  flex-col  gap-3 sm:hidden">
 <Image    width={160} height={120}   src ={img3} alt= "img"/>
        <h1 className="sm:hidden text-2xl font-extrabold font-serif"> Digital Content</h1>
            </div>


            <div>        
                 <div className="h-24 w-px bg-black  sm:hidden"></div></div>

                 <div className="flex  flex-col  gap-3 sm:hidden">
            <Image   width={170} height={70}     src ={img4} alt= "img"/>
        <h1 className="sm:hidden text-2xl font-extrabold font-serif">Fashion Brand</h1>
            </div>

       </div>
       <div className="lg:hidden  flex flex-col sm:p-5 items-center m-5  gap-3 border border-10px-black rounded-2xl shadow-xl  hover:shadow-2xl shadow-dark-300   ">

       <div className="lg:hidden flex justify-between gap-4">
           <div>
               <Image className=" lg:hidden bg-cover" width={75} height={50}   src = {img1} alt= "img"/>
                 <h1 className="lg:hidden  text-xl font-extrabold font-serif">Travel Itinerary</h1>
                 
                 </div>
           
           <div>
           <Image   width={120} height={180}    src ={img2} alt= "img"/>
           <h1 className="lg:hidden  text-xl font-extrabold font-serif">  Merchendies</h1>
       
           </div>
       
       </div>
       
       
       <div className=" lg:hidden flex gap-4 justify-between">
       <div>
       <Image    width={120} height={180}     src ={img3} alt= "img"/>
       <h1 className="lg:hidden  text-xl font-extrabold font-serif"> Digital Content</h1>
       </div>
       
       <div>
       <Image   width={120} height={180}       src ={img4} alt= "img"/>
       <h1 className="lg:hidden  text-xl font-extrabold font-serif">Fashion Brand</h1>
       
       </div>
       </div>
       
       </div>
  </>
    )
}