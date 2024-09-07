'use client'
import Navbar from "../components/Navbar"
import youtube from '../../../public/you.jpg'
import insta from '../../../public/insta.jpeg'
import Image from "next/image"
import star from '../../../public/start.jpeg'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react"

export default function Address(){
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
   
       return (
   
           <>
           <Navbar/>
   
           <div className="flex mt-20 justify-center gap-10">
   
               <div className="flex p-3 sm:hidden flex-col gap-3 items-center h-[33rem] rounded-md border border-black">
                   <Image alt = 'img' src = {star} className="rounded-full border aspect-square  text-center border-black "/>
                   <p className="text-lg text-blue-500"> change profile picture</p>
                   <div onClick={ () => {router.push('/Profile')}} className={` ${profileClick ? `bg-green-900`: `bg-transparent`}  flex gap-2 w-44  text-center hover:bg-green-600  text-green-700 font-semibold hover:text-white p-2 pl-14 border border-black-500 hover:border-transparent rounded`} > profile</div>
                   <div onClick={ () => {router.push('/Store')}} className={` ${storeClick ? `bg-green-900`: `bg-transparent`}  flex gap-2 w-44  text-center hover:bg-green-600  text-green-700 font-semibold hover:text-white p-2 pl-14 border border-black-500 hover:border-transparent rounded`}> my store</div>
                   <div onClick={ () => {router.push('/Earning')}} className={` ${earningClick ? `bg-green-900`: `bg-transparent`}  flex gap-2 w-44  text-center hover:bg-green-600  text-green-700 font-semibold hover:text-white p-2 pl-14 border border-black-500 hover:border-transparent rounded`}>  earning</div>
                   <div onClick={ () => {router.push('/Address')}} className={` ${addessClick ? `bg-green-900`:`bg-transparent`}  flex gap-2 w-44  text-center hover:bg-green-600  text-green-700 font-semibold hover:text-white p-2 pl-14 border border-black-500 hover:border-transparent rounded`}>  addess</div>
                   <div onClick={ () => {router.push('/')}} className="bg-green-900 flex gap-2 w-44  text-center hover:bg-green-600  text-white font-semibold hover:text-white p-2 pl-14 border border-black-500 hover:border-transparent rounded"> log out</div>
                   
   
   
               </div>
   
   
               <div className="border sm:m-4 border-black flex flex-col gap-3 rounded-lg p-4 sm:w-[20rem] sm:m-3 w-[36rem]">
     <h1 className="text-2xl font-serif"> Address</h1>

   
    
   
    
     <div className="flex flex-col gap-3">
     <label className="Font-serif text-lg" >Address line 1</label>
     <input 
           className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
               
               type="text"
               placeholder="enter your address"
               />
   </div>
   <div className="flex flex-col gap-3">
     <label className="Font-serif text-lg" >Address Line 2</label>
     <input 
           className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
               
               type="text"
               placeholder="enter your address"
               />
   </div>
   <div className="flex  sm:flex-col lg:flex-row justify-between">
   <div className="flex flex-col gap-3">
     <label className="Font-serif text-lg" >Zip code</label>
     <input 
           className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
               
               type="text"
               placeholder="zip code"
               />
   </div>
   <div className="flex lg:flex-col gap-3">
     <label className="Font-serif text-lg" >City </label>
     <input 
           className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
               
               type="text"
               placeholder="city"
               />
               </div>
             
   </div>
   <div className="flex sm:flex-col lg:flex-row justify-between">
   <div className="flex flex-col gap-3">
     <label className="Font-serif text-lg" >State</label>
     <input 
           className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
               
               type="text"
               placeholder="state"
               />
   </div>
   <div className="flex flex-col gap-3">
     <label className="Font-serif text-lg" >country</label>
     <input 
           className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
               
               type="text"
               placeholder="country"
               />
               </div>
               </div>
   <div className="flex justify-center">
   <button
              
               className="bg-green-600 flex gap-2 w-28  text-center hover:bg-green-600  text-white font-semibold hover:text-white p-2 pl-6 border border-black-500 hover:border-transparent rounded">Save info</button>
               </div>
               </div>
            
               </div>
           
           </>
       )
   }    
    