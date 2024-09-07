
'use client'
import Navbar from "../components/Navbar"
import youtube from '../../../public/you.jpg'
import insta from '../../../public/insta.jpeg'
import Image from "next/image"
import star from '../../../public/start.jpeg'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react"
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

export default function Earning(){
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
    const router : any = useRouter()
    const [profileClick , setProfileClick] = useState(false)
    const [earningClick , setEarningClick] = useState(false)
    const [storeClick , setStoreClick] = useState(false)
    const [addessClick , setAdderessClick] = useState(false)
   
    useEffect ( () => {
         if (router.pathname == '/Profile'){
           setProfileClick(true)
         }
         else if (router.pathname == '/Earning'){
           setEarningClick(true)
   
         }
         else if (router.pathname == '/Store'){
           setStoreClick(true)
           
         }
         else if (router.pathname == '/Address'){
           setAdderessClick(true)
         }
         else{
           setAdderessClick(false)
           setEarningClick(false)
           setProfileClick(false)
           setStoreClick(false)
         }
   
   
    }, [])

    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Income',
          data: [5000, 6000, 7500, 6800, 8500, 9000, 10000],
          fill: false,
          backgroundColor: 'rgba(75,192,192,0.2)',
          borderColor: 'rgba(75,192,192,1)',
          tension: 0.1, // Adds a bit of curve to the line
        },
      ],
    };
  
    const options = {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'top' as const,
        },
        title: {
          display: true,
          text: 'Monthly Income Over Time',
        },
      },
    };
  
   
       return (
   
           <>
           <Navbar/>
   
           <div className="flex mt-20 justify-center gap-10">
   
               <div className="flex p-3 sm:hidden flex-col gap-3 items-center h-[33rem] rounded-md border border-black">
                   <Image alt = 'img' src = {star} className="rounded-full border aspect-square  text-center border-black "/>
                   <p className="text-lg text-blue-500"> change profile picture</p>
                   <div onClick={ () => {router.push('/Profile')}} className={` ${profileClick ? `bg-green-900`: `bg-transparent`}  flex gap-2 w-44  text-center  text-green-700 font-semibold  p-2 pl-14 border border-black-500  rounded`} > profile</div>
                   <div onClick={ () => {router.push('/Store')}} className={` ${storeClick ? `bg-green-900`: `bg-transparent`}  flex gap-2 w-44  text-center hover:bg-green-600  text-green-700 font-semibold hover:text-white p-2 pl-14 border border-black-500 hover:border-transparent rounded`}> my store</div>
                   <div onClick={ () => {router.push('/Earning')}} className={` ${earningClick ? `bg-green-900`: `bg-transparent`}  flex gap-2 w-44  text-center hover:bg-green-600  text-green-700 font-semibold hover:text-white p-2 pl-14 border border-black-500 hover:border-transparent rounded`}>  earning</div>
                   <div onClick={ () => {router.push('/Address')}} className={` ${addessClick ? `bg-green-900`:`bg-transparent`}  flex gap-2 w-44  text-center hover:bg-green-600  text-green-700 font-semibold hover:text-white p-2 pl-14 border border-black-500 hover:border-transparent rounded`}>  addess</div>
                   <div onClick={ () => {router.push('/')}} className="bg-green-900 flex gap-2 w-44  text-center hover:bg-green-600  text-white font-semibold hover:text-white p-2 pl-14 border border-black-500 hover:border-transparent rounded"> log out</div>
                   
   
   
               </div>
   
   
               <div className="border border-black  flex flex-col gap-12 rounded-lg p-4 sm:w-[20rem] sm:m-4 w-[36rem]">
               <div className="w-full max-w-md mx-auto mt-8">
      <Line data={data} options={options} />
    </div>
    <div className="flex justify-between" >
      <div className="flex gap-2">

      <h1> widthrow history </h1>
      <h2> RS.10000</h2>
      </div>
               
               
               <div className='bg-zinc-400 hover:bg-zinc-700 text-black font-bold py-2 px-4 text-center   w-44 border border-green-700 rounded'   > widthrow</div>
           </div>
           <div className="flex  flex-col gap-5 justify-between" >
      <div className="flex gap-2">

      <h1> Last  widthrow  </h1>
      <h2> RS.10000</h2>
      <p> 20 july 2024</p>
      </div>

  
      <div className="flex gap-2">

      <h1> payment cycle    1 july 2024 </h1>
    
      </div>
            
            </div>
               </div>

               

               </div>
           </>
       )
   }    
    