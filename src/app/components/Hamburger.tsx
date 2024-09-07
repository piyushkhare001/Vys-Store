export default function Hamburger(open : boolean){
    return( 

        <div>
  {
    open ? (<>
    
    <div className='h-auto w-32 bg-zinc-200
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
  }
</div>
 
    )
}