
"use client";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import Nabvar from '@/app/components/Navbar'
import Image from "next/image";
import img from '../../../public/Auth-img.jpg'
import google from '../../../public/google.jpeg'



export default function LoginPage() {
     const router  = useRouter()
    const [emailErr , setEmailErr] = useState(false)
    const [passErr , setPassErr ] = useState(false) 
    

    const [user, setUser] = React.useState({
        email: "",
        password: "",
       
    })
    



    const onLogin = () => {
        try {
            if(user.email.length <=5 ){
                setEmailErr(true)
            }
            else if (user.password.length > 6 ){
                setPassErr(true)
            }

            else {
             router.push('/Profile')
            }
        }
        catch (error:any) {

            console.log("Login failed", error.message);
        
        }

    
       
}


    return (
        <>
        <Nabvar/>
    <div className="flex items-center sm:p-3 sm:w-[20rem] justify-evenly min-h-screen mt-2 sm:border sm:border-black sm:rounded-lg sm:m-2">
 <div className="sm:hidden">
     <Image alt = "img" 
      src = {img}
      height={900}
      width={500}
      className="rounded-md"
      />
        </div>
    
        <div className="flex flex-col gap-3 ">
            <h1 className="text-3xl font-bold text-center "> LOG IN </h1>
        <button className="flex items-center justify-center border border-gray-300 rounded-lg shadow-md hover:shadow-lg px-4 py-2 bg-white text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 transition duration-300 ease-in-out">
      <Image
        src={google}
        alt="Google logo"
        className="w-5 h-5 mr-2"
      />
      <span className="font-medium">Sign in with Google</span>
    </button>
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
            <div className="flex justify-center">
            <button
            onClick={onLogin}
            className="bg-transparent flex gap-2 w-28  text-center hover:bg-green-600  text-green-700 font-semibold hover:text-white p-2 pl-7 border border-black-500 hover:border-transparent rounded">Login</button>
</div>
            <Link href="/Sign-up">{`Don't have an account? SignUp`}</Link>
        </div>
        </div>
        </>
    )

}
