'use client'
import Navbar from "../components/Navbar"
import youtube from '../../../public/you.jpg'
import insta from '../../../public/insta.jpeg'
import Image from "next/image"
import star from '../../../public/start.jpeg'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react"




export default function ProfilePage(){
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
   
               <div className=" sm:hidden flex p-3 flex-col gap-3 items-center h-[33rem] rounded-md border border-black">
                   <Image alt = 'img' src = {star} className="rounded-full border aspect-square  text-center border-black "/>
                   <p className="text-lg text-blue-500"> change profile picture</p>
                   <div onClick={ () => {router.push('/Profile')}} className={` ${profileClick ? `bg-green-900`: `bg-transparent`}  flex gap-2 w-44  text-center hover:bg-green-600  text-green-700 font-semibold hover:text-white p-2 pl-14 border border-black-500 hover:border-transparent rounded`} > profile</div>
                   <div onClick={ () => {router.push('/Store')}} className={` ${storeClick ? `bg-green-900`: `bg-transparent`}  flex gap-2 w-44  text-center hover:bg-green-600  text-green-700 font-semibold hover:text-white p-2 pl-14 border border-black-500 hover:border-transparent rounded`}> my store</div>
                   <div onClick={ () => {router.push('/Earning')}} className={` ${earningClick ? `bg-green-900`: `bg-transparent`}  flex gap-2 w-44  text-center hover:bg-green-600  text-green-700 font-semibold hover:text-white p-2 pl-14 border border-black-500 hover:border-transparent rounded`}>  earning</div>
                   <div onClick={ () => {router.push('/Address')}} className={` ${addessClick ? `bg-green-900`:`bg-transparent`}  flex gap-2 w-44  text-center hover:bg-green-600  text-green-700 font-semibold hover:text-white p-2 pl-14 border border-black-500 hover:border-transparent rounded`}>  addess</div>
                   <div onClick={ () => {router.push('/')}} className="bg-green-900 flex gap-2 w-44  text-center hover:bg-green-600  text-white font-semibold hover:text-white p-2 pl-14 border border-black-500 hover:border-transparent rounded"> log out</div>
                   
   
   
               </div>
   
   
               <div className="border sm:m-4 border-black flex flex-col gap-3 rounded-lg p-4 w-[36rem]">
     <h1 className="text-2xl font-serif"> Profile page</h1>
   
   
 
   

     <div className="flex flex-col gap-3">
     <label className="Font-serif text-lg" > User name</label>
     <input 
           className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
               
               type="text"
               placeholder="enter your username "
               />
   </div>
   <div className="flex flex-col gap-3">
     <label className="Font-serif text-lg" >Email id</label>
     <input 
           className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
               
               type="text"
               placeholder="enter your email"
               />
   </div>
   <div className="flex flex-col gap-3">
     <label className="Font-serif text-lg" >password</label>
     <input 
           className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
               
               type="text"
               placeholder="xxxxxxxxxxxxxxxx"
               />
               <div className="text-blue-800 flex justify-end">
               <p>Reset your password</p>
               </div>
   </div>
   <div className="flex flex-col gap-3">
     <label className="Font-serif text-lg" >Add you Phone no.</label>
     <input 
           className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
               
               type="text"
               placeholder="mobile number"
               />
   </div>
 
   <div className="flex justify-center">
   <button
              
               className="bg-green-600 flex gap-2 w-28  text-center hover:bg-green-600  text-white font-semibold hover:text-white p-2 pl-6 border border-black-500 hover:border-transparent rounded">Save </button>
               </div>
               </div>
               </div>
           </>
       )
   }    
    