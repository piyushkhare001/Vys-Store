'use client'
import youtube from '../../../public/you.jpg'
import insta from '../../../public/insta.jpeg'
import Image from "next/image"
import { useRouter } from 'next/navigation';

export default function Verify(){
    const router = useRouter()
    return( 
        < div className='flex items-center border bprder-black rounded m-4 p-4 gap-3  flex-col'>
        <h1> Verify your account </h1>
        <div className="border gap-2 sm:w-72 w-96 items-center border-black rounded-md flex p-1  justify-around">
           <div><Image alt = "img" src ={insta} height={25} width={30} /></div>
        
           <div className="border rounded-sm border-black p-3"> Instagram id</div>
       </div>
   
       <div className="border gap-2 sm:w-72 w-96 items-center border-black rounded-md p-4 flex justify-around">
           <div><Image alt = "img" height={50} width={40} src ={youtube} /></div>
     
           <div className="border rounded-sm border-black p-3"> youtube id</div>
       </div>
       <button
              
              className="bg-green-600 flex gap-2 w-28  text-center hover:bg-green-600  text-white font-semibold hover:text-white p-2 pl-6 border border-black-500 hover:border-transparent rounded" onClick = {()=> {router.push('/success')}}>continue</button>
   
     
        </div>
    )
}