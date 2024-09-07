
'use client'

import youtube from '../../../public/you.jpg'
import insta from '../../../public/insta.jpeg'
import Image from "next/image"
import star from '../../../public/start.jpeg'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import icon from '../../../public/icon.gif'

import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { IoCartOutline } from "react-icons/io5";
import { IoInformationCircleOutline } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDropdown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import Hamburger from './Hamburger';
import Link from 'next/link'
import {  useEffect, useRef } from 'react';
import { Transition } from '@headlessui/react';




export  default function Navbar () {
const router = useRouter()
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const [profileClick , setProfileClick] = useState(false)
  const [earningClick , setEarningClick] = useState(false)
  const [storeClick , setStoreClick] = useState(false)
  const [addessClick , setAdderessClick] = useState(false)
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  // Close the drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  




    return (
        <main className='flex justify-center '>
           <div className="  z-30 flex items-center p-2 lg:justify-between sm:justify-between mt-3  fixed bg-zinc-200
            backdrop-filter backdrop-blur-lg bg-opacity-30  w-[80%] rounded-3xl ">

          <div>
        <Image
        src={icon}
        alt="My GIF"
        width={75}
        height={40}
        priority={true}  // Ensures the GIF loads quickly for LCP
      />
         </div>

          <div className='flex items-center p-2 gap-3 border sm:w-24 border-slate-950 w-[20%] rounded-3xl '>
          <CiSearch/> search
          </div>


          <div className='flex gap-10 sm:hidden'>
            <p className ='flex gap-1 items-center sm:hidden ' >
            <IoCartOutline/> cart
            </p>
            <p className ='flex gap-1 items-center sm:hidden'>
            <IoInformationCircleOutline/> about
            </p>
            <p className ='flex gap-1 items-center sm:hidden'>
            <IoIosContact/> contact
            </p>
          </div>


          <div className='sm:hidden'> 
          <Dropdown>
  <MenuButton  className ='flex gap-3 items-center'>
    <CgProfile size={20}/> 
    <IoIosArrowDropdown size={20}/>
  </MenuButton>
  <Menu>
   <Link href='/Profile'> <MenuItem > Profile </MenuItem></Link>
   <Link href='/Sign-up'><MenuItem > Sign-up </MenuItem></Link> 
  </Menu>
</Dropdown>
          </div>


 <div className='lg:hidden'>
  <RxHamburgerMenu size={25} onClick={handleToggle}
  />
 <Transition
        show={isOpen}
        enter="transition-transform ease-in-out duration-300"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transition-transform ease-in-out duration-300"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
      >
        <div
          ref={drawerRef}
          className="fixed top-0 right-0   flex  flex-col gap-4 rounded-lg h-[30rem] bg-zinc-950 backdrop-filter backdrop-blur-lg bg-opacity-30 p-8 pb-20 pt-20 shadow-lg text-white  z-90"
        >
        
           
                 <div><Image alt = 'img' src = {star} height={100}  className="rounded-full border aspect-square   text-center border-black "/></div>  
                 <p className='font-serif text-xl text-green-900'> @UserName </p>
                   <div onClick={ () => {router.push('/Profile')}} className={` ${profileClick ? `bg-green-900`: `bg-green-900`}  flex gap-2 w-44  text-center bg-green-600  - font-semibold text-white p-2 pl-14 border border-black-500 hover:border-transparent rounded`} > profile</div>
                   <div onClick={ () => {router.push('/Store')}} className={` ${storeClick ? `bg-green-900`: `bg-green-900`}  flex gap-2 w-44  text-center bg-green-600   font-semibold text-white p-2 pl-14 border border-black-500 hover:border-transparent rounded`}> my store</div>
                   <div onClick={ () => {router.push('/Earning')}} className={` ${earningClick ? `bg-green-900`: `bg-green-900`}  flex gap-2 w-44  text-center bg-green-600  font-semibold text-white p-2 pl-14 border border-black-500 hover:border-transparent rounded`}>  earning</div>
                   <div onClick={ () => {router.push('/Address')}} className={` ${addessClick ? `bg-green-900`:`bg-green-900`}  flex gap-2 w-44  text-center bg-green-600   font-semibold text-white p-2 pl-14 border border-black-500 hover:border-transparent rounded`}>  addess</div>
                   <div onClick={ () => {router.push('/')}} className=" flex gap-2 w-44  text-center bg-red-600  text-white font-semibold hover:text-white p-2 pl-14 border border-black-500 hover:border-transparent rounded"> log out</div>
                   
            

        </div>
      </Transition>

 
     
 </div>
 <div>
  {/* {
    open ? (<>
    
    <div className='h-auto w-[64rem] bg-zinc-200 absolute z-90 pt-14  pb-14 pl-4
            backdrop-filter backdrop-blur-lg bg-opacity-30 rounded-md '>
    <p>Profile </p>
    <p>Store Info </p>
    <p>Earning </p>
    <p> address</p>
    <p> About us</p>
    <p> Contact us</p>
    <div className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded"> Login </div>
    </div>
    
    </>) : (<></>)
  } */}
</div>
           </div>  
           

           </main>)
}




