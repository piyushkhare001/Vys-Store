'use client'
import Link from 'next/link'

export default function success() {
    return(
        <div className='flex items-center border bprder-black rounded m-4 p-4 gap-3  flex-col '>
        <h1 className='text-green-600 text-2xl'>Congratulations</h1>
        <p> Your account has verified </p>
        <Link href='/Log-in'> log in</Link>
        </div>
    )
}