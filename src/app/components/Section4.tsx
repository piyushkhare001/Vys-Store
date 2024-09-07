'use client'
import { useState } from 'react';

export default function Section3() {
    const [value, setValue] = useState(5000); // Initial slider value set to 50
    const [value2, setValue2] = useState(50000);
    const handleChange = (e :  any) => {
      setValue(e.target.value); // Update the value on change
    };
    const handleChange2 = (e :  any) => {
        setValue2(e.target.value); // Update the value on change
      };
    const sliderStyle = {
        background: `linear-gradient(to right, #22c55e 0%, #22c55e ${value}%, #fff ${value}%, #fff 100%)`,
      };
    return (
   
          
        <>
        
          <div className='z-20 w-full h-auto sm:p-14 bg-blue-50 flex flex-col  gap-10 p-10 items-center '>  
                <h1 className='font-bold  text-2xl text-center'> ESTIMATE EARNING POTENTIAL </h1>

                <div className=' flex sm:flex-col justify-betwwen sm:gap-6 lg:gap-36 items-center'>
                    <div  className='flex  flex-col  '>
                        <p  className='font-serif text-xl '
                        > How many followers do you have ? </p>
                        <div className="w-full max-w-lg mx-auto py-8">
 
        <input
          id="range"
          type="range"
          min="500"
          max="10000"
          value={value}
          onChange={handleChange}
          className="lg:w-96 h-2 rounded-lg appearance-none cursor-pointer"
          style={sliderStyle}
        />
      </div>
      <div className='h-12 w-18 border font-bold rounded-lg  bg-green-50 p-3 text-center '> 5k </div> 
                    </div>

                    <div className='flex  flex-col  gap-3'>
                        <h1 className='font-serif  text-xl'> Monthly Earning </h1>
                      <div className=" flex flex-col gap-5">
                     <p className=  'font-semibold text-3xl text-green-800'> ₹ {value}</p> 
              
                   
                      </div>
                    </div>
                </div>

                <div className=' flex  sm:flex-col justify-betwwen sm:gap-6 lg:gap-36 items-center'>
                    <div  className='flex  flex-col  '>
                        <p  className='font-serif text-xl '
                        > How many Products  do you list monthly ? </p>
                        <div className="w-full max-w-lg mx-auto py-8">
 
        <input
          id="range"
          type="range"
            min="5000"
          max="100000"
          value={value2}
          onChange={handleChange2}
          className="lg:w-96 h-2 rounded-lg appearance-none cursor-pointer"
          style={sliderStyle}
        />
      </div>
      <div className='h-12 w-18 border font-bold rounded-lg  bg-green-50 p-3 text-center  '> 50k </div> 
                    </div>

                    <div className='flex  flex-col  gap-3'>
                        <h1 className='font-serif  text-xl'> Monthly Earning </h1>
                      <div className=" flex flex-col gap-5">
                     <p className=  'font-semibold text-3xl text-green-800'> ₹ {value2}</p> 
        
                   
                      </div>
                    </div>
                </div>
       
<div className='bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 text-center   w-44 border border-green-700 rounded'>
    Calculate
</div>
</div>

        </>
        

        
    )
}