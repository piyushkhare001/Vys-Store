
"use client";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import Nabvar from '@/app/components/Navbar'
import Image from "next/image";
import img from '../../../public/Auth-img.jpg'
import google from '../../../public/google.jpeg'



export default function SignUp() {
     const router  = useRouter()
    const [emailErr , setEmailErr] = useState(false)
    const [passErr , setPassErr ] = useState(false) 
    const [nameErr, setNameErr] = useState(false)



    const [selectedOption, setSelectedOption] = useState(null);
  
    const handleOptionClick = (option : any) => {
      setSelectedOption(option);
    };


    const [user, setUser] = React.useState({
        Name  : "",
        email: "",
        password: "",
       
    })
    



    const onSignUp = () => {
        try {
            if (user.Name.length < 2 ){
                setNameErr(true)
            }

            else if(user.email.length <=5 ){
                setEmailErr(true)
            }
           else if (user.password.length > 6 ){
                setPassErr(true)
            }
       else{
               if(Name = '' &  email='' & password = ''){
              router.push('./verify')

    
       
}
       }
         
            
            
        }
        catch (error:any) {

            console.log("Login failed", error.message);
        
        }

      


    return (
        <>
        <Nabvar/>
    <div className="flex items-center justify-evenly mt-24 sm:p-1 p-3   sm:border sm:border-black sm:rounded-lg sm:m-12">
 <div className="sm:hidden">
     <Image alt = "img" 
      src = {img}
      height={900}
      width={500}
      className="rounded-md"
      />
        </div>
    
        <div className="flex flex-col gap-3 ">
            <h1 className="text-3xl font-bold text-center "> Sign Up </h1>
            <label className="Font-serif text-xl" htmlFor="email">Name</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            type="text"
            value={user.Name}
            onChange={(e) => setUser({...user, Name: e.target.value})}
            placeholder="full name"
            />
             {
                nameErr ? (<p className="text-red-600"> enter full name </p>) : (<></>)
            }
      
        <label className="Font-serif text-xl" htmlFor="email">Email</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="email"
            type="text"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="email"
            />
             {
                emailErr ? (<p className="text-red-600"> email should be correct </p>) : (<></>)
            }
        <label className="Font-serif text-xl"  htmlFor="password">password</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="password"
            />
            {
                passErr ? (<p className="text-red-600"> password length should be less than 6  </p>) : (<></>)
            }
           

            <div className="flex flex-col items-center gap-4">

            <div className="p-5">
      <h2 className="text-2xl font-semibold mb-4">Are you a creator?</h2>
      <div className="flex justify-center space-x-4">
        {/* Yes Button */}
        <button
          onClick={() => handleOptionClick('yes')}
          className={`px-4 py-2 rounded-lg border ${
            selectedOption === 'yes'
              ? 'bg-blue-500 text-white'
              : 'bg-white text-gray-700 border-gray-300'
          }`}
        >
          Yes
        </button>

        {/* No Button */}
        <button
          onClick={() => handleOptionClick('no')}
          className={`px-4 py-2 rounded-lg border ${
            selectedOption === 'no'
              ? 'bg-blue-500 text-white'
              : 'bg-white text-gray-700 border-gray-300'
          }`}
        >
          No
        </button>
      </div>

      {/* Display the selected option (optional) */}
 
    </div>
  
                </div>
                <div className="flex justify-center">
                <button
            onClick={onSignUp}
            
            className="bg-transparent flex gap-2 w-28  text-center hover:bg-green-600  text-green-700 font-semibold hover:text-white p-2 pl-7 border border-black-500 hover:border-transparent rounded">Sign Up</button>

         </div>
         <Link className="text-center" href="/Log-in">{`already have account Login`}</Link>
        </div>
        
        </div>
        
        </>
    )

} 
