import {Timeline} from '@/app/components/ui/timeline'

import Image from "next/image";
import React from "react";
import loginImg from '../../../public/Mobilelogin.jpg'
import creatorStoreMobile from '../../../public/creatorStoreMobile.jpg'
import earningMobile from '../../../public/earningMobile.jpg'
import iphone from '../../../public/iPhone.jpg'

export default function Section3() {
  const data = [
    {
      title: "Log-in",
      content: (
        <div className='w-96 h-auto bg-blue-50 rounded-xl  p-4 flex flex-col gap-7 items-center
        '>
   <div className='text-xl font-semibold'> Lorem ipsum dolor sit amet consectetur adipisicing</div>
          <div className='text-sm font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo perferendis porro iste quam aliquid nesciunt. Eum consectetur soluta nisi nam.</div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={loginImg}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-24 md:h-44 lg:h-72 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
         
          </div>
        </div>
      ),
    },
    {
      title: "Creator-Store",
      content: (
        <div className='w-96 h-auto bg-blue-50 rounded-xl  p-4 flex flex-col gap-7 items-center
        '>
  <div className='text-xl font-semibold'> Lorem ipsum dolor sit amet consectetur adipisicing</div>
  <div className='text-sm font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo perferendis porro iste quam aliquid nesciunt. Eum consectetur soluta nisi nam.</div>
          <div className="grid grid-cols-2 gap-4">
         

            <Image
             src={creatorStoreMobile}
              alt="hero template"
              width={500}
              height={500}
             className="rounded-lg object-cover h-24 md:h-44 lg:h-72 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
       
          </div>
        </div>
      ),
    },
    {
      title: "Creator",
      content: (
        <div className='w-96 h-auto bg-blue-50 rounded-xl  p-4 flex flex-col gap-7 items-center
        '>
  <div className='text-xl font-semibold'> Lorem ipsum dolor sit amet consectetur adipisicing</div>
  <div className='text-sm font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo perferendis porro iste quam aliquid nesciunt. Eum consectetur soluta nisi nam.</div>
          <div className="grid grid-cols-2 gap-4">
            <Image
             src={iphone}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-24 md:h-44 lg:h-72 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
           
          </div>
        </div>
      ),
    },
    {
        title: "Earning",
        content: (
            <div className='w-96 h-auto bg-blue-50 rounded-xl  p-4 flex flex-col gap-7 items-center
            '>
    <div className='text-xl font-semibold'> Lorem ipsum dolor sit amet consectetur adipisicing</div>
    <div className='text-sm font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo perferendis porro iste quam aliquid nesciunt. Eum consectetur soluta nisi nam.</div>
            <div className="grid grid-cols-2 gap-4">
              <Image
               src={earningMobile}
                alt="hero template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-24 md:h-44 lg:h-72 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
             
            </div>
          </div>
        ),
      },
  ];
  return (
    <div className="w-full sm:overflow-x-visible">
      <Timeline data={data} />
    </div>
  );
}




  