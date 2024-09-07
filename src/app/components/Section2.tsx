'use client'
import { FaArrowLeft  } from "react-icons/fa";
import { FaArrowRight  } from "react-icons/fa";

import Image from "next/image"
import delhi from  '../../../public/delhi.jpeg'
import mumbai from '../../../public/mumbai.jpeg'
import banglore from '../../../public/banglore.jpeg'
import { useState } from 'react';
import { IoIosArrowDropdown } from "react-icons/io";
const slides = [
  {
    id: 1,
    image: delhi,
    city : "Delhi"
  
  },
  {
    id: 2,
    image:mumbai,
    city : "Mumbai"
  }
];
export default  function Section2 (){
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };
  
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };
  
    return (
      <div className="relative w-full flex items-center mx-auto z-20 max-w-6xl bg-blue-50 rounded-lg overflow-hidden border border-dark-800">
        <div className="flex transition-transform duration-500 " style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0 m-10   ">
          <div className="flex sm:flex-col justify-between sm:gap-3 w-4/5 m-4">
        <div className="text-3xl sm:text-xl font-extrabold font-serif"> Product </div>
        
        <div className="flex items-center justify-between gap-6">
        <button className="bg-transparent flex gap-2 hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black-500 hover:border-transparent rounded">
 {` Itinerary >`}
</button>
<button className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded">
Demo Store
</button>
        </div>
          </div>
         <main className=" flex justify-between sm:items-center sm:flex-col-reverse sm:gap-3 w-4/5 m-4">
             <div  className=" flex flex-col justify-between h-38 "> 
                 
                    <div className="text-3xl font-extrabold font-serif"> {slide?.city} Itinerary </div>
                   <p className="font-sans text-dark-200 sm:hidden">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, totam quae? Voluptatem delectus velit vitae ipsum incidunt, tenetur expedita voluptatibus consequuntur reiciendis repellendus nostrum eligendi et corrupti consequatur pariatur vel quia amet doloribus voluptate quam iste officiis similique veritatis. Officiis!</p>
                 
 
                     <div className=" flex gap-6 sm:flex-col  sm:gap-5">
                     <button className="bg-transparent flex gap-2 hover:bg-black text-black font-semibold hover:text-white lg:py-2 px-4 border border-black-500 hover:border-transparent rounded">
   Rs.350
</button>
<button className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded">
 More
</button> </div>

             </div>
          <Image src={slide.image} alt={`Slide ${slide.id}`} className="w-58 h-96  sm:w-44 sm:h-56 object-cover rounded-2xl" /> 
            </main>
            </div>
          ))}
        </div>
  
        <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-lg">
         <FaArrowLeft />
        </button>
        <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-lg">
    <FaArrowRight />
        </button>
      </div>
    );
  }
